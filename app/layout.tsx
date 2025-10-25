import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Inter } from "next/font/google";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "500",
});
const satoshi = localFont({
  src: "../public/fonts/satoshi/Satoshi-Variable.woff",
  variable: "--font-satoshi",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "500",
});

const inter = Inter({
  display: "swap",
  variable: "--inter",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Coin Wallet | Secure Self-Custodial Multicurrency Crypto Wallet",
  description:
    "Buy, send, receive, and swap crypto easily with Coin Wallet — a secure, self-custodial wallet for Bitcoin, Ethereum, Litecoin, Solana, Dogecoin, XRP, Monero, and more on desktop and mobile.",
  icons: "/brand/coinspace.ico",
  keywords: "Coinspace wallet, crypto wallet, Bitcoin wallet, Ethereum wallet, cryptocurrency, blockchain, secure wallet, self-custodial wallet",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${satoshi.variable} ${inter.variable} antialiased`}
      >
        <ToastContainer
          autoClose={2000}
          hideProgressBar={true}
          theme="colored"
        />
        {children}
      </body>
    </html>
  );
}
