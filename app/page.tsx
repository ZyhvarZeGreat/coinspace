"use client";

import "./globals.css";
import { useState } from "react";
import EnterPassphraseModal from "../components/EnterPassphraseModal";
import GeneratePassphraseModal from "../components/GeneratePassphraseModal";
import SeedPhraseModal from "../components/SeedPhraseModal";

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

  return (
    <main className="min-h-dvh bg-[#122c26] text-white flex flex-col">
      {/* Center content */}
      <section className="flex-1 grid place-items-center px-4">
        <div className="flex flex-col items-center gap-6">
          {/* Middle image */}
          <img src="/brand/coinspace.svg" alt="Wallet" className="h-16 w-16" />

          <h1 className="text-3xl font-extrabold tracking-tight">
            Coin Wallet
          </h1>

          <button
            className="h-11 px-5 rounded-xl bg-[#49b36b] text-black font-semibold hover:bg-[#41a261] transition-colors shadow-md"
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
