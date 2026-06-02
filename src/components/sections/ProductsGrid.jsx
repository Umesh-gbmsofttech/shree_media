import React, { useMemo } from 'react';
import Fuse from 'fuse.js';
import productData from '../../data/products.json';

// Import images dynamically
const importImage = (imageName) => {
  if (!imageName) return null;
  try {
    return new URL(`../../assets/${imageName}`, import.meta.url).href;
  } catch (e) {
    return null;
  }
};

const ProductsGrid = ({ activeCategory, searchQuery }) => {
  const allProducts = productData.products;

  const filteredProducts = useMemo(() => {
    let results = allProducts;

    // Filter by Category
    if (activeCategory !== 'All Printing') {
      results = results.filter((p) => p.category === activeCategory);
    }

    // Filter by Search
    if (searchQuery.trim() !== '') {
      const fuse = new Fuse(results, {
        keys: [ 'name' ],
        threshold: 0.3,
      });
      results = fuse.search(searchQuery).map((r) => r.item);
    }

    return results;
  }, [ activeCategory, searchQuery, allProducts ]);

  return (
    <div id="products-section" className="mb-12 scroll-mt-24 px-1">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold uppercase tracking-wide !text-brand-text">All PRINTING SOLUTIONS</h2>
        <button className="text-sm font-bold !text-brand-blue hover:underline">View All &rarr;</button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        { filteredProducts.map((product, index) => {
          const imgSrc = importImage(product.image);
          return (
            <div
              key={ `${product.name}-${index}` }
              className="flex flex-col items-center bg-white rounded-2xl border-2 border-gray-100 p-2 shadow-sm transition-shadow cursor-default group"
            >
              <div className="w-full aspect-square bg-gray-50 rounded-xl mb-3 flex items-center justify-center border border-gray-100 overflow-hidden">
                { imgSrc ? (
                  <img
                    src={ imgSrc }
                    alt={ product.name }
                    className="w-full h-full object-cover transition-transform group-hover:scale-105"
                  />
                ) : (
                  <div className="text-gray-300 flex flex-col items-center justify-center">
                    <div className="w-12 h-12 rounded-full border-2 border-dashed border-gray-200" />
                  </div>
                ) }
              </div>
              <p className="text-xs font-bold text-center leading-tight !text-brand-text">
                { product.name }
              </p>
            </div>
          );
        }) }
      </div>

      { filteredProducts.length === 0 && (
        <div className="py-20 text-center">
          <p className="text-gray-500 font-medium !text-brand-text">No products found matching your search.</p>
        </div>
      ) }
    </div>
  );
};

export default ProductsGrid;
