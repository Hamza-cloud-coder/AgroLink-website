/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ExternalLink, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section 
      data-aos="fade-up"
      className="relative min-h-[85vh] flex flex-col justify-between overflow-hidden bg-primary-container text-white"
    >
      {/* Full-width Background Image */}
      <div className="absolute inset-0 z-0">
        <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLhr-8U_Ahp8LL3rTkjCkFGMy83N6reg7xW8t8q46VhONhjHWpx7kDzPowQL6_1Yg0LDvNeAW0VcDvvx99bE3DLM0isckzMoJgrxxPzAyFe2Q9O05IqZhWpomTNc-Un3St23QsnJsoUm3eI5k9mr0W1yxm_bnhk_qpa0cycMu2_3aDODKHy9EzDmqZ2JBeG39dE--gX9EeRwtNJI2fwRbMYjy_crVtbeCbm226IelxJ1DuWG440uc-w9ujXM5zrkMU6KVL4L4j6v8" alt="Agricultural fields" />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-12 pt-16 md:pt-24 pb-12 grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-16">
        {/* Left Content */}
        <div 
          className="space-y-6 text-white"
        >
          <span className="inline-block border border-white/40 bg-white/10 backdrop-blur-md px-4 py-1 rounded-full text-[10px] md:text-sm font-medium tracking-widest uppercase">One Platform, Global Marketplace</span>
          <h1 className="text-2xl md:text-5xl lg:text-6xl font-medium leading-tight max-w-2xl">
            Global Marketplace for<br className="md:hidden" /> Agriculture & Food Industry
          </h1>
          <p className="text-base md:text-lg text-white/90 max-w-lg">
            AgroLink unites farmers, processors, distributors, and buyers for direct trade without intermediaries. Manage crop, livestock, raw-material, and machinery transactions in a single global marketplace.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="https://wa.me/61459771636" className="bg-secondary-container text-primary-container font-medium px-6 py-3 md:px-8 md:py-4 rounded-full text-base md:text-lg hover:brightness-110 transition-all flex items-center gap-2">
              DM Whatsapp
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        {/* Right Visual (Floating Card) */}
        <div 
          className="hidden lg:flex justify-end"
        >
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-3xl w-72 shadow-2xl">
                <div className="aspect-square bg-surface-container rounded-2xl overflow-hidden mb-4">
                    <img className="w-full h-full object-cover" 
                        src="/assets/hydroponic-lettuce-seedlings-farming-modern-600nw-2711981705.webp"
                        alt="Agricultural machinery"
                    />
                </div>
                <div className="flex justify-between items-center text-white p-2">
                    <p className="text-sm font-semibold">Discover our<br/>recent project</p>
                    <div className="w-8 h-8 bg-white text-primary-container rounded-full flex items-center justify-center">
                        <ExternalLink className="w-5 h-5" />
                    </div>
                </div>
            </div>
        </div>
      </div>
      
      {/* Large White Stat Cards */}
      <div 
        data-aos="fade-up"
        className="relative z-10 bg-surface px-6 md:px-12 pb-12"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-0 bg-white rounded-3xl overflow-hidden shadow-2xl">
            {[
                { label: 'Farmers Joined', value: '500+' },
                { label: 'Local Partnerships', value: '25+' },
                { label: 'Startup Year', value: '2026' },
            ].map((stat, i) => (
                <div key={i} className="p-8 md:p-10 border-b sm:border-b-0 sm:border-r border-outline-variant/30 last:border-r-0 text-center sm:text-left">
                    <div className="text-4xl md:text-[52px] font-black text-primary-container leading-none mb-4">{stat.value}</div>
                    <p className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider mb-2">{stat.label}</p>
                    <p className="text-xs text-on-surface-variant/70">Building a more transparent and efficient agricultural supply chain from day one.</p>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}
