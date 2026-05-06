import React from 'react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col pt-20 overflow-hidden">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <img 
          alt="Main Puffer Jacket" 
          className="w-full h-full object-cover object-top brightness-75 scale-110" 
          src="https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=1200&q=80"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-deep/20 via-transparent to-slate-deep"></div>
      </div>
      
      {/* Hero Content */}
      <div className="relative z-10 px-6 mt-12 flex flex-col justify-between flex-grow pb-12">
        <div>
          <p className="text-xs tracking-[0.3em] uppercase mb-2 opacity-70">[ SERIES: 01-R23 // SURVIVOR ]</p>
          <h1 className="text-5xl font-display font-bold leading-none tracking-tighter uppercase mb-2">
            COLLECTION<br/><span className="text-ice-blue">ARTIC 01™</span>
          </h1>
          
          {/* Size Selector */}
          <div className="flex gap-4 mt-8 text-[10px] tracking-widest uppercase opacity-60">
            <span>S</span><span>M</span><span className="text-white border-b border-white">L</span><span>XL</span>
          </div>
          <div className="flex gap-4 mt-2 text-[10px] tracking-widest uppercase opacity-60">
            <span>WHITE</span><span className="text-ice-blue">SILVER</span>
          </div>
        </div>

        {/* Floating Price Label */}
        <div className="mt-auto">
          <div className="glass-panel p-6 rounded-sm max-w-[200px] border-l-4 border-ice-blue">
            <p className="text-xs uppercase tracking-widest opacity-70 mb-1">Add to Cart</p>
            <p className="text-2xl font-display font-bold">$899.99</p>
            <button className="mt-4 w-10 h-10 flex items-center justify-center border border-white/20 hover:bg-white hover:text-slate-deep transition-colors group">
              <svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Decorative Side Scroll indicators */}
      <div className="absolute bottom-10 right-6 flex flex-col gap-2 z-10">
        <div className="w-[2px] h-12 bg-white/20">
          <div className="w-full h-1/3 bg-ice-blue animate-pulse"></div>
        </div>
        <p className="text-[10px] rotate-90 origin-left translate-x-2 translate-y-8 uppercase tracking-widest opacity-50">Scroll</p>
      </div>
    </section>
  );
};

export default Hero;
