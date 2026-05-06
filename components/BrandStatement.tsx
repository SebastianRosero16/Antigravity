import React from 'react';

const BrandStatement = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background Mountain */}
      <div className="absolute inset-0 z-0">
        <img 
          alt="Mountain landscape" 
          className="w-full h-full object-cover object-bottom brightness-50" 
          src="https://lh3.googleusercontent.com/aida/ADBb0uiqX5_VqCTm9ENm1WNDedwDokHLqyPH0GvPtGuKQsjsQpHs4-pIqllJlyIyHQT5Xcv73gH3lO9AY1ktPB2zLUGHkTDn01t4grfd2vIPCFey8FmMIhyKhrqHCuqZBY0LKof_EUeLGKjWAtgaWMo1g70mEmzHrK9hTXEu1FTuTAz7IIR3KX4bgX-1x0SXT53T-cJwyfQMelVWuQsdZ9LV2o_GczoCFlux_JJ7XbP2AvcaJGax7Mw5nm7vdSqwwDzfksmEBv2SNtQ4y-8"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-deep via-transparent to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <div className="mb-8 opacity-40 text-7xl md:text-9xl font-display font-bold text-outline select-none animate-pulse">
          FRZN®
        </div>
        <h2 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tight leading-none mb-6">
          Built for cold<br/>
          Made for height<br/>
          Forged to last
        </h2>
        <div className="w-16 h-[2px] bg-ice-blue mx-auto mb-8 shadow-[0_0_10px_rgba(165,180,252,0.5)]"></div>
        <p className="text-[10px] uppercase tracking-[0.4em] opacity-60">FRZN Exterior Wear © 2024</p>
      </div>

      {/* Small Bottom UI Elements */}
      <div className="absolute bottom-12 left-8 right-8 flex justify-between items-end">
        <div className="text-[10px] uppercase tracking-widest opacity-40 leading-relaxed max-w-[150px]">
          FRZN was born in<br/>the mountains, not<br/>as a trend, but as<br/>a response.
        </div>
        <div className="flex flex-col items-end gap-3 opacity-40 group cursor-default">
          <div className="w-24 h-[1px] bg-white group-hover:w-32 transition-all duration-500"></div>
          <p className="text-[10px] uppercase tracking-widest">Protocol: Altitude_09.EE</p>
        </div>
      </div>
    </section>
  );
};

export default BrandStatement;
