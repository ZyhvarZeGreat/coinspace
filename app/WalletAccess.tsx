"use client";

import Link from "next/link";
import Image from "next/image";
import { useMemo } from "react";

type Chip = { label: string; icon?: string };
type Card = {
  id: string;
  title: string;
  subtitle: string;
  icon?: string;
  badge?: { text: string; tone: "teal" | "amber" };
  chips?: Chip[];
  href?: string;
  available?: boolean;
};

export default function WalletAccess() {
  const cards: Card[] = useMemo(
    () => [
      {
        id: "software",
        title: "Software",
        subtitle: "Keystore File, Mnemonic Phrase, and Private Key",
        icon: "/brand/hardware.png",

        badge: { text: "Official", tone: "teal" },
        href: "/connect",
        available: true,
      },
      {
        id: "enkrypt",
        title: "Enkrypt",
        subtitle: "Connect with Enkrypt browser extension",
        icon: "/brand/enkrypt.svg",
        href: "/connect/enkrypt",
        available: false,
      },
      {
        id: "mew-app",
        title: "MEW wallet app",
        subtitle: "Connect MEW Wallet app to MEW web",
        icon: "/brand/mew.png",
        href: "/connect/mew-app",
        available: false,
      },
      {
        id: "browser-ext-1",
        title: "Browser extension",
        subtitle: "Use your Web3 wallet with MEW",
        icon: "/brand/connect.png",
        chips: [
          { label: "Brave Wallet", icon: "/brand/brave.png" },
          { label: "MetaMask", icon: "/brand/meta.png" },
        ],
        href: "/connect/browser",
        available: false,
      },
      {
        id: "mobile-apps",
        title: "Mobile Apps",
        subtitle: "WalletConnect, WalletLink",
        icon: "/brand/mobile.png",
        href: "/connect/mobile",
        available: false,
      },
      {
        id: "hardware",
        title: "Hardware wallets",
        subtitle: "Ledger, Trezor, KeepKey, Cool Wallet, Bitbox02",
        icon: "/brand/hardware.png",
        href: "/connect/hardware",
        available: false,
      },
    ],
    []
  );

  return (
    <main className="min-h-screen w-full bg-[#154c87]">
      <section className="mx-auto max-w-3xl px-4 py-12 sm:py-16">
        <header className="text-center text-white">
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Access my wallet
          </h1>
          <p className="mt-3 text-[15px] text-blue-100">
            Please select a method to access your wallet.
          </p>
          <p className="mt-1 text-[15px] text-blue-100">
            Don’t have a wallet?{" "}
            <Link
              href="/create"
              className="underline decoration-2 underline-offset-4"
            >
              Create Wallet
            </Link>
          </p>
        </header>

        <div className="mt-8 space-y-5">
          {cards.map((card) => (
            <WalletCard key={card.id} card={card} />
          ))}
        </div>
      </section>
    </main>
  );
}

function WalletCard({ card }: { card: Card }) {
  const isAvailable = card.available !== false;

  const baseClasses =
    "block rounded-xl bg-white shadow-[0_6px_18px_rgba(0,0,0,0.22)] outline-none ring-0 transition-transform";

  const availableClasses =
    "hover:-translate-y-[1px] focus-visible:ring-2 focus-visible:ring-white/40 cursor-pointer";

  const unavailableClasses =
    "opacity-50 cursor-not-allowed pointer-events-none select-none";

  return isAvailable ? (
    <Link
      href={card.href ?? "#"}
      className={`${baseClasses} ${availableClasses}`}
    >
      <CardContent card={card} />
    </Link>
  ) : (
    <div className={`${baseClasses} ${unavailableClasses}`}>
      <CardContent card={card} />
    </div>
  );
}

function CardContent({ card }: { card: Card }) {
  const toneClass =
    card.badge?.tone === "teal"
      ? "bg-teal-100 text-teal-700"
      : "bg-amber-100 text-amber-700";

  return (
    <div className="flex min-h-[140px] items-center gap-4 px-5 py-5 sm:min-h-[132px] sm:px-6">
      {card.icon ? (
        <div className="shrink-0">
          <Image
            src={card.icon}
            alt=""
            width={44}
            height={44}
            className="h-11 w-11 object-contain"
            unoptimized
          />
        </div>
      ) : (
        <div className="h-11 w-11 shrink-0 rounded-lg bg-black/5" />
      )}

      <div className="min-w-0 flex-1">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-[17px] font-semibold text-neutral-900">
              {card.title}
            </h3>
            <p className="mt-1 text-[14.5px] text-neutral-700">
              {card.subtitle}
            </p>
          </div>

          {card.badge && (
            <span
              className={`inline-flex h-7 items-center gap-1 rounded-full px-2.5 text-[12px] font-semibold ${toneClass}`}
            >
              {card.badge.tone === "teal" ? "✔" : "⚠"} {card.badge.text}
            </span>
          )}
        </div>

        {card.chips && card.chips.length > 0 && (
          <div className="mt-3 flex flex-wrap items-center gap-2">
            {card.chips.map((chip) => (
              <span
                key={chip.label}
                className="inline-flex items-center gap-2 rounded-md bg-neutral-100/90 px-2.5 py-1.5 text-[13px] text-neutral-900"
              >
                {chip.icon && (
                  <Image
                    src={chip.icon}
                    alt=""
                    width={16}
                    height={16}
                    className="h-4 w-4"
                    unoptimized
                  />
                )}
                {chip.label}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
