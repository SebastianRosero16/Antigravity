import React from 'react';

const products = [
  {
    id: 1,
    title: 'Reflective Puffer',
    price: '$999.00',
    color: 'Aurora Silver',
    image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=600&q=80',
    variants: ['bg-white', 'bg-blue-400']
  },
  {
    id: 2,
    title: 'High-Gloss Puffer',
    price: '$1,199.99',
    color: 'Orbit Silver',
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&q=80',
    variants: ['bg-slate-200']
  },
  {
    id: 3,
    title: 'Heavy Shield Puffer',
    price: '$1,199.99',
    color: 'Stealth Black',
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&q=80',
    variants: ['bg-black']
  },
  {
    id: 4,
    title: 'Tech Puffer Jacket',
    price: '$899.99',
    color: 'Icefield Blue',
    image: 'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=600&q=80',
    variants: ['bg-blue-300']
  }
];

const CollectionGrid = () => {
  return (
    <section className="bg-slate-deep py-20 px-6 relative overflow-hidden">
      {/* Decorative Background Graffiti */}
      <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none mix-blend-overlay">
        <img 
          alt="Background graphic" 
          className="w-full h-full object-cover" 
          src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1200&q=80"src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1200&q=80"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-4xl font-display font-bold uppercase tracking-tighter">New Collection</h2>
          <button className="text-[10px] uppercase tracking-[0.2em] px-4 py-2 border border-white/30 rounded-full hover:bg-white/10 transition-colors">Filters</button>
        </div>

        {/* Featured Product */}
        <div className="mb-12 relative overflow-hidden group">
          <div className="aspect-[16/9] md:aspect-[21/9] bg-slate-dark/30 rounded-sm overflow-hidden">
            <img 
              alt="Aurora Puffer" 
              className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105" 
              src="https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=1400&q=80"
            />
          </div>
          <div className="absolute top-8 right-8 text-right bg-slate-deep/40 backdrop-blur-md p-6 rounded-sm border border-white/10">
            <h3 className="text-4xl font-display font-bold uppercase">Aurora™</h3>
            <p className="text-sm opacity-70 tracking-widest mt-1">$1,999</p>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {products.map((product) => (
            <div key={product.id} className="flex flex-col gap-3 group">
              <div className="aspect-[4/5] product-card-bg rounded-sm p-4 relative overflow-hidden">
                <img 
                  alt={product.title} 
                  className="w-full h-full object-contain mix-blend-screen opacity-80 transform transition-transform duration-500 group-hover:scale-110" 
                  src={product.image}
                />
                <div className="absolute bottom-4 left-4 flex gap-1">
                  {product.variants.map((variant, idx) => (
                    <span key={idx} className={`w-3 h-3 rounded-full ${variant} border border-white/20 shadow-sm`}></span>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-[9px] uppercase tracking-wider opacity-50">{product.color}</p>
                <h4 className="text-xs font-bold uppercase group-hover:text-ice-blue transition-colors">{product.title}</h4>
                <p className="text-[10px] mt-1 opacity-70 font-mono">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollectionGrid;
