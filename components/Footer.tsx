import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-deep py-16 px-8 border-t border-white/5 relative z-10">
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          <div className="col-span-2">
            <div className="text-3xl font-display tracking-widest font-bold mb-4">FRZN</div>
            <p className="text-xs uppercase tracking-widest opacity-40 leading-relaxed max-w-sm">
              Premium technical outerwear designed for the most extreme environments on Earth.
            </p>
          </div>
          <div className="flex flex-col gap-4 text-xs uppercase tracking-[0.2em] font-semibold opacity-80">
            <h5 className="opacity-40 text-[10px]">Collection</h5>
            <a href="#" className="hover:text-ice-blue transition-colors">Catalog</a>
            <a href="#" className="hover:text-ice-blue transition-colors">Puffers</a>
            <a href="#" className="hover:text-ice-blue transition-colors">Boots</a>
            <a href="#" className="hover:text-ice-blue transition-colors">Archive</a>
          </div>
          <div className="flex flex-col gap-4 text-xs uppercase tracking-[0.2em] font-semibold opacity-80 md:text-right">
            <h5 className="opacity-40 text-[10px]">Connect</h5>
            <a href="#" className="hover:text-ice-blue transition-colors">Instagram</a>
            <a href="#" className="hover:text-ice-blue transition-colors">Twitter</a>
            <a href="#" className="hover:text-ice-blue transition-colors">Discord</a>
            <a href="#" className="hover:text-ice-blue transition-colors">Contact</a>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 opacity-30 text-[9px] uppercase tracking-[0.3em] gap-4">
          <p>© 2024 FRZN EXTERIOR WEAR. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8">
            <p className="cursor-pointer hover:opacity-100 transition-opacity">Privacy Policy</p>
            <p className="cursor-pointer hover:opacity-100 transition-opacity">Terms of Service</p>
            <p>Designed by FRZN_TEAM</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
