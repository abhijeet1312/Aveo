import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveCategory } from '../../redux/slices/productSlice';

const CategoryFilter = () => {
  const dispatch = useDispatch();
  const { activeCategory } = useSelector(state => state.products);

  const categories = [
    { id: 'all', name: 'All Products', icon: '🌟' },
    { id: 'pets', name: 'Pet Care', icon: '🐾' },
    { id: 'eco', name: 'Eco Living', icon: '🌱' },
    { id: 'fitness', name: 'Fitness', icon: '💪' }
  ];

  const handleCategoryChange = (categoryId) => {
    dispatch(setActiveCategory(categoryId));
  };

  return (
    <section className="py-8 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryChange(category.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-green-600 text-white shadow-lg transform scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-green-100 hover:text-green-600'
              }`}
            >
              <span className="text-lg">{category.icon}</span>
              <span>{category.name}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryFilter;