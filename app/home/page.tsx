import { Metadata } from 'next';

export default function InfoPage() {
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
              <span className="text-2xl font-bold text-white">CoinSwap</span>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-white/70 hover:text-white transition-colors">About</a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">Blog</a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">Guides</a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">News</a>
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
              Web3 Blog
              <span className="block text-4xl md:text-6xl mt-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Insights & Guides
              </span>
            </h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto mb-8">
              Thoughtful articles, deep-dive tutorials, and timely news to help you navigate crypto and Web3 with confidence.
            </p>
            <div className="flex gap-4 justify-center">
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl font-semibold transition-all shadow-lg shadow-purple-500/30 text-lg">
                Read Latest Posts
              </button>
              <button className="border border-purple-500/50 text-purple-400 hover:bg-purple-500/10 px-8 py-4 rounded-xl font-semibold transition-all text-lg">
                Browse Categories
              </button>
            </div>
          </div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-20">
            {/* Left Side - Statistics */}
            <div className="relative">
              <div className="bg-black/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
                <h3 className="text-2xl font-bold text-white mb-6">Blog Stats</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-purple-500/5 rounded-lg">
                    <span className="text-white/70">Total Articles</span>
                    <span className="text-white font-bold">250+</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-purple-500/5 rounded-lg">
                    <span className="text-white/70">Monthly Readers</span>
                    <span className="text-white font-bold">10,000+</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-purple-500/5 rounded-lg">
                    <span className="text-white/70">Contributors</span>
                    <span className="text-white font-bold">12 Authors</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-purple-500/5 rounded-lg">
                    <span className="text-white/70">Newsletter Subscribers</span>
                    <span className="text-white font-bold">3,500+</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Features Preview */}
            <div className="relative">
              <div className="bg-black/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
                <h3 className="text-2xl font-bold text-white mb-6">Core Content</h3>
                <div className="space-y-4">
                  <div className="p-4 border border-purple-500/20 rounded-lg">
                    <div className="flex items-center mb-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                      <span className="text-white font-semibold">In-depth Tutorials</span>
                    </div>
                    <p className="text-white/60 text-sm ml-5">Step-by-step guides to master tools, wallets, and protocols</p>
                  </div>
                  <div className="p-4 border border-purple-500/20 rounded-lg">
                    <div className="flex items-center mb-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                      <span className="text-white font-semibold">Market Analysis</span>
                    </div>
                    <p className="text-white/60 text-sm ml-5">Data-driven insights on trends, narratives, and on-chain activity</p>
                  </div>
                  <div className="p-4 border border-purple-500/20 rounded-lg">
                    <div className="flex items-center mb-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                      <span className="text-white font-semibold">Project Reviews</span>
                    </div>
                    <p className="text-white/60 text-sm ml-5">Honest takes on new protocols, L2s, and infrastructure</p>
                  </div>
                  <div className="p-4 border border-purple-500/20 rounded-lg">
                    <div className="flex items-center mb-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                      <span className="text-white font-semibold">News & Updates</span>
                    </div>
                    <p className="text-white/60 text-sm ml-5">Breaking stories, security alerts, and ecosystem highlights</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-purple-400 text-sm font-medium mb-2">Our Content</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Everything You Need To Stay Informed
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Curated categories for different learning styles and interests
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Blog Card */}
            <div className="bg-black/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/50 transition-all">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500/20 to-purple-700/20 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                  <path d="M3 4a1 1 0 00-1 1v1a1 1 0 001 1h1a1 1 0 001-1V5a1 1 0 00-1-1H3zM3 10a1 1 0 00-1 1v1a1 1 0 001 1h1a1 1 0 001-1v-1a1 1 0 00-1-1H3zM7 4a1 1 0 00-1 1v1a1 1 0 001 1h9a1 1 0 001-1V5a1 1 0 00-1-1H7zM7 10a1 1 0 00-1 1v9a1 1 0 001 1h9a1 1 0 001-1v-9a1 1 0 00-1-1H7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Blog</h3>
              <p className="text-white/70 mb-6">
                Fresh takes, deep dives, and opinion pieces from our editorial team
              </p>
              <a href="#" className="text-purple-400 hover:text-purple-300 font-semibold">
                Read Articles →
              </a>
            </div>

            {/* Tutorials Card */}
            <div className="bg-black/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/50 transition-all">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500/20 to-purple-700/20 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4zM18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Tutorials</h3>
              <p className="text-white/70 mb-6">
                Learn-by-doing guides to set up wallets, bridges, and on-chain tools
              </p>
              <a href="#" className="text-purple-400 hover:text-purple-300 font-semibold">
                Start Learning →
              </a>
            </div>

            {/* Guides Card */}
            <div className="bg-black/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/50 transition-all">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500/20 to-purple-700/20 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                  <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Guides</h3>
              <p className="text-white/70 mb-6">
                Practical how-tos and best practices for safer on-chain activity
              </p>
              <a href="#" className="text-purple-400 hover:text-purple-300 font-semibold">
                View Guides →
              </a>
            </div>

            {/* News Card */}
            <div className="bg-black/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/50 transition-all">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500/20 to-purple-700/20 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.769l4-3a.999.999 0 01.787-.15l3 1a1 1 0 00.787 0l7-3a1 1 0 000-1.84L10.394 2.08zM3.422 9.442l1.967.394 1.5-1.5-1.967-.394-1.5 1.5zm9.647-9.647a.996.996 0 000-.283l.394-1.967.394 1.967a.997.997 0 000 .283z" />
                  <path d="M13.414 10l-.394.394.5-2.475.394.394a.996.996 0 00.283 0L14 8l-.394-.394a.996.996 0 00-.283 0l-.394.394.5 2.475L13 10h.414zM6.25 11.25l-.394-1.968-.394 1.968a.993.993 0 000 .283l1.967.394.394-1.967a.993.993 0 00-.283 0L5.25 12.5l1.5-1.5 1.5 1.5-1.967.394a.993.993 0 00-.283 0l-.394 1.967.394-1.967a.995.995 0 000-.283l1.968-.394L7.75 11.25l-1.5-1.5zM16.5 9.75l-.394.394.5 2.475-.394-.394a.996.996 0 00-.283 0L16 12.5l.394.394c.05.048.11.086.177.112l.017.006h.006a.998.998 0 00.283 0L17.5 13l-.5-2.475.5-2.475-.394.394a.996.996 0 00-.283 0L16 8.5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">News</h3>
              <p className="text-white/70 mb-6">
                Timely updates on ecosystems, audits, security incidents, and releases
              </p>
              <a href="#" className="text-purple-400 hover:text-purple-300 font-semibold">
                See Updates →
              </a>
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
                About Our Blog
              </h2>
              <p className="text-xl text-white/70 mb-8">
                We publish unbiased research, actionable tutorials, and thoughtful commentary to help you make sense of crypto.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-purple-400 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Editorial Standards</h4>
                    <p className="text-white/70">Fact-checked content with sources and clear disclaimers</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-purple-400 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Independent Research</h4>
                    <p className="text-white/70">No paid shills; we disclose affiliations and conflicts</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-purple-400 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Community Focus</h4>
                    <p className="text-white/70">We listen to feedback and highlight community projects</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-black/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
              <h3 className="text-2xl font-bold text-white mb-6">Newsletter</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-purple-500/5 rounded-lg">
                  <span className="text-white/70">Weekly Issues</span>
                  <span className="text-white font-bold">Every Friday</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-purple-500/5 rounded-lg">
                  <span className="text-white/70">Average Read Time</span>
                  <span className="text-white font-bold">6–8 minutes</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-purple-500/5 rounded-lg">
                  <span className="text-white/70">Subscribers</span>
                  <span className="text-white font-bold">3,500+</span>
                </div>
                <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold transition-all">
                  Subscribe Now
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
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Editorial Roadmap</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              What we're publishing next and how the blog will evolve
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-black/50 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20">
              <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-purple-400 font-bold">01</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Layer 2 Deep Dives</h3>
              <p className="text-white/70 text-sm">Rollups, data availability, and security models explained</p>
            </div>
            <div className="bg-black/50 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20">
              <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-purple-400 font-bold">02</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Security Series</h3>
              <p className="text-white/70 text-sm">Wallet hygiene, approvals, phishing, and OPSEC basics</p>
            </div>
            <div className="bg-black/50 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20">
              <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-purple-400 font-bold">03</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Tooling Tutorials</h3>
              <p className="text-white/70 text-sm">Dune, Tenderly, Foundry, and more—hands-on walkthroughs</p>
            </div>
            <div className="bg-black/50 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20">
              <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-purple-400 font-bold">04</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Ecosystem Spotlights</h3>
              <p className="text-white/70 text-sm">Monthly overviews of chains, apps, and contributors</p>
            </div>
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
                <span className="text-2xl font-bold text-white">CoinSwap</span>
              </div>
              <p className="text-white/70 text-sm mb-4">
                Articles, tutorials, and news to help you navigate crypto and Web3.
              </p>
              <p className="text-white/50 text-xs">© 2024 CoinSwap. All rights reserved.</p>
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
