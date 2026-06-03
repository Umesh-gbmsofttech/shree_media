import React, { useMemo } from 'react';
import Fuse from 'fuse.js';
import { Printer, FileText, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
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
    <motion.div
      initial={ { opacity: 0, y: 20 } }
      whileInView={ { opacity: 1, y: 0 } }
      viewport={ { once: true } }
      transition={ { duration: 0.6 } }
      id="products-section"
      className="mb-12 scroll-mt-24"
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-[20px] font-bold !font-open-sans leading-[28px] !text-section-heading flex items-center gap-2">
          <ChevronRight className="text-brand-blue w-6 h-6 stroke-[3px]" />
          All Printing Solutions
        </h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4">
        { filteredProducts.map((product, index) => {
          const imgSrc = importImage(product.image);
          return (
            <div
              key={ `${product.name}-${index}` }
              className="
    group
    relative
    flex flex-col
    bg-transparent
    overflow-hidden
    min-h-[160px]

    transform-gpu
    transition-all
    duration-500
    ease-[cubic-bezier(0.22,1,0.36,1)]

    hover:-translate-y-1
    cursor-pointer
  "
            >
              {/* Image Section */ }
              <div
                className="
      relative
      m-2.5
      mb-1.5
      overflow-hidden
      rounded-[12px]
      aspect-[4/3]
    "
              >
                { imgSrc ? (
                  <img
                    src={ imgSrc }
                    alt={ product.name }
                    className="
          w-full
          h-full
          object-cover

          transform-gpu
          transition-transform
          duration-700
          ease-[cubic-bezier(0.22,1,0.36,1)]

          group-hover:scale-105
        "
                  />
                ) : (
                  <div
                    className="
          w-full
          h-full
          flex
          items-center
          justify-center
          text-gray-300

          transition-transform
          duration-700
          group-hover:scale-110
        "
                  >
                    <div className="relative">
                      <Printer className="w-10 h-10 opacity-20" />
                      <FileText className="absolute -bottom-1 -right-1 w-5 h-5 opacity-40 rounded-sm p-0.5" />
                    </div>
                  </div>
                ) }
              </div>

              {/* Content */ }
              <div className="px-3 pb-3.5 flex-1 flex items-center justify-center">
                <p
                  className="
        text-center
        text-[13px]
        font-semibold
        leading-[18px]
        font-open-sans

        text-[#1F2937]

        transition-all
        duration-300

        group-hover:text-brand-blue
      "
                >
                  { product.name }
                </p>
              </div>
            </div>
          );
        }) }
      </div>

      { filteredProducts.length === 0 && (
        <div className="py-20 text-center">
          <p className="text-gray-500 font-medium !text-brand-text">No products found matching your search.</p>
        </div>
      ) }
    </motion.div>
  );
};

export default ProductsGrid;
