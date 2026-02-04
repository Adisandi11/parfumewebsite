import React, { useEffect, useState } from 'react';
import { getPerfumes } from '../services/contentful';
import { Perfume } from '../types';

const ProductList: React.FC = () => {
  const [perfumes, setPerfumes] = useState<Perfume[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getPerfumes();
        // Cast contentful response items to our local Perfume type
        setPerfumes(response.items as unknown as Perfume[]);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError('Unable to load our collection at the moment.');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Helper to safely extract text from Contentful Rich Text or string
  const getDescriptionText = (description: any): string => {
    if (!description) return '';
    if (typeof description === 'string') return description;
    
    // Handle Contentful Rich Text object
    if (description.nodeType === 'document' && Array.isArray(description.content)) {
      return description.content
        .map((node: any) => {
          if (Array.isArray(node.content)) {
            return node.content
              .map((child: any) => child.value || '')
              .join('');
          }
          return '';
        })
        .filter((text: string) => text.trim().length > 0)
        .join(' ');
    }
    
    return '';
  };

  if (loading) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center bg-navy-800">
        <div className="text-gold-500 text-xl animate-pulse">
          <i className="fa-solid fa-spinner fa-spin mr-2"></i> Decanting essences...
        </div>
      </div>
    );
  }

  if (error) {
     return (
       <div className="min-h-[50vh] flex items-center justify-center bg-navy-800">
         <div className="text-red-400">{error}</div>
       </div>
     );
  }

  const handleBuy = (perfumeName: string) => {
    const message = `Hello Velixir, I am interested in purchasing the "${perfumeName}". Please provide details on how to order.`;
    const url = `https://wa.me/6285862639161?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="products" className="py-24 bg-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-gold-500 font-semibold tracking-wider uppercase">Our Collection</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-100 mt-2 mb-4">
            Find Your Signature
          </h2>
          <p className="text-slate-400">
            A curated selection of fragrances designed to evoke emotion and desire.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {perfumes.map((perfume) => {
            const { name, description, price, category, image, featured } = perfume.fields;
            
            // Extract image URL safely
            let imageUrl = 'https://picsum.photos/400/500';
            
            if (image) {
                // Check if it's a Contentful Asset object
                if (typeof image === 'object' && image.fields?.file?.url) {
                    imageUrl = image.fields.file.url;
                } 
                // Check if it's directly a URL string
                else if (typeof image === 'string') {
                    imageUrl = image;
                }
            }
            
            // Ensure protocol is present
            if (imageUrl.startsWith('//')) {
                imageUrl = `https:${imageUrl}`;
            }
            
            const descriptionText = getDescriptionText(description);

            return (
              <div key={perfume.sys.id} className="group bg-navy-900 rounded-xl overflow-hidden shadow-xl border border-navy-700 hover:border-gold-500/30 transition-all duration-300 flex flex-col">
                <div className="relative h-80 overflow-hidden">
                  <img 
                    src={imageUrl} 
                    alt={name} 
                    onError={(e) => {
                        e.currentTarget.src = 'https://picsum.photos/400/500';
                    }}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  {featured && (
                    <div className="absolute top-4 right-4 bg-gold-500 text-navy-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      Featured
                    </div>
                  )}
                  <div className="absolute inset-0 bg-navy-900/20 group-hover:bg-transparent transition-colors duration-300"></div>
                </div>
                
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-gold-500 text-xs font-bold uppercase tracking-widest">{category || 'Signature'}</span>
                    <span className="text-slate-100 font-serif text-lg font-bold">IDR {price ? price.toLocaleString('id-ID') : '0'}</span>
                  </div>
                  
                  <h3 className="text-2xl font-serif font-bold text-white mb-3 group-hover:text-gold-400 transition-colors">
                    {name}
                  </h3>
                  
                  <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-1 line-clamp-4">
                    {descriptionText}
                  </p>
                  
                  <button 
                    onClick={() => handleBuy(name)}
                    className="w-full py-3 bg-navy-800 border border-gold-500 text-gold-500 font-bold rounded hover:bg-gold-500 hover:text-navy-900 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <i className="fa-brands fa-whatsapp"></i> Buy Now
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductList;