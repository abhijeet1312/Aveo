import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filterProducts } from '../../redux/slices/productSlice';
import ProductCard from './ProductCard';

const ProductGrid = () => {
  const dispatch = useDispatch();
  const { filteredProducts, activeCategory, searchQuery } = useSelector(state => state.products);

  useEffect(() => {
    dispatch(filterProducts());
  }, [dispatch, activeCategory, searchQuery]);

  if (filteredProducts.length === 0) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">No products found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Featured Products</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our curated selection of premium eco-friendly products designed for modern, conscious living.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;