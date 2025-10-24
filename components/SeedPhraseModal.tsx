"use client";
import { useState } from "react";

export default function SeedPhraseModal({
  open = true,
  seedPhrase = [],
  onClose,
  onContinue,
}: {
  open?: boolean;
  seedPhrase?: string[];
  onClose?: () => void;
  onContinue?: () => void;
}) {
  const [copied, setCopied] = useState(false);

  if (!open) return null;

  const handleCopy = () => {
    if (seedPhrase.length) {
      navigator.clipboard.writeText(seedPhrase.join(" "));
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-[60] flex flex-col bg-white">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200">
        <h2 className="text-slate-900 font-semibold text-lg">
          Your 12-word seed phrase
        </h2>
        <button
          onClick={onClose}
          className="text-slate-500 hover:text-slate-700 text-sm font-medium"
        >
          ✕ Close
        </button>
      </div>

      {/* Body */}
      <div className="flex-1 overflow-y-auto px-6 sm:px-10 py-10">
        <div className="max-w-2xl mx-auto">
          <p className="text-slate-600 text-center">
            Write down these words in order and keep them safe. They are the
            only way to recover your wallet.
          </p>

          {/* Seed phrase grid */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-3">
            {seedPhrase.map((word, index) => (
              <div
                key={index}
                className="px-3 py-2 bg-slate-100 rounded-xl text-slate-900 flex items-center justify-between text-sm font-medium"
              >
                <span>{index + 1}.</span>
                <span>{word}</span>
              </div>
            ))}
          </div>

          {/* Copy confirmation */}
          <div className="mt-4 text-center text-sm text-slate-500">
            {copied ? (
              <span className="text-emerald-600 font-medium">
                Copied to clipboard ✓
              </span>
            ) : (
              "Make sure no one is watching your screen."
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="px-6 sm:px-10 py-6 border-t border-slate-200">
        <div className="max-w-2xl mx-auto flex flex-col sm:flex-row gap-4">
          <button
            onClick={handleCopy}
            className="flex-1 h-12 rounded-xl bg-emerald-500 text-white font-semibold hover:bg-emerald-600 transition-colors"
          >
            {copied ? "Copied!" : "Copy Seed Phrase"}
          </button>

          <button
            onClick={onContinue}
            className="flex-1 h-12 rounded-xl border border-emerald-500 text-emerald-500 font-semibold hover:bg-emerald-50 transition-colors"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
