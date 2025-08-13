import React, { useState, useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { setActiveCategory, setSearchQuery } from '../redux/slices/productSlice';
// import {  PawPrint, Leaf, Dumbbell } from "lucide-react";
import ProductCard from '../components/product/ProductCard';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import Badge from '../components/ui/Badge';
import { 
  Search, 
  Filter, 
  Grid3X3,
  
  Dumbbell,
  List, 
  PawPrint,
  SlidersHorizontal,
  X,
  ChevronDown,
  Star,
  DollarSign,
  Package,
  Leaf,
  TrendingUp,
  Heart,
  Eye,
  ShoppingCart
} from 'lucide-react';

const ProductsPage = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const { products, activeCategory, searchQuery } = useSelector(state => state.products);
  
  // Local state for filters and view
  const [viewMode, setViewMode] = useState('grid'); // grid or list
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState([0, 200]);
  const [selectedRating, setSelectedRating] = useState(0);
  const [selectedBadges, setSelectedBadges] = useState([]);
  const [itemsPerPage] = useState(12);
  const [currentPage, setCurrentPage] = useState(1);

  // Initialize from URL params
  useEffect(() => {
    const category = searchParams.get('category') || 'all';
    const search = searchParams.get('search') || '';
    const sort = searchParams.get('sort') || 'featured';
    const page = parseInt(searchParams.get('page')) || 1;

    dispatch(setActiveCategory(category));
    dispatch(setSearchQuery(search));
    setSortBy(sort);
    setCurrentPage(page);
  }, [searchParams, dispatch]);

  // Update URL when filters change
  const updateURL = (updates) => {
    const newParams = new URLSearchParams(searchParams);
    Object.entries(updates).forEach(([key, value]) => {
      if (value && value !== 'all' && value !== '') {
        newParams.set(key, value);
      } else {
        newParams.delete(key);
      }
    });
    setSearchParams(newParams);
  };

  // Filter and sort products
  const filteredAndSortedProducts = useMemo(() => {
    let filtered = products;

    // Category filter
    if (activeCategory !== 'all') {
      filtered = filtered.filter(product => product.category === activeCategory);
    }

    // Search filter
    if (searchQuery) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Price range filter
    filtered = filtered.filter(product => 
      product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    // Rating filter
    if (selectedRating > 0) {
      filtered = filtered.filter(product => product.rating >= selectedRating);
    }

    // Badge filter
    if (selectedBadges.length > 0) {
      filtered = filtered.filter(product => 
        selectedBadges.includes(product.badge)
      );
    }

    // Sort products
    const sorted = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        case 'newest':
          return b.id - a.id;
        case 'name':
          return a.name.localeCompare(b.name);
        case 'popularity':
          return b.reviews - a.reviews;
        default: // featured
          return 0;
      }
    });

    return sorted;
  }, [products, activeCategory, searchQuery, priceRange, selectedRating, selectedBadges, sortBy]);

  // Pagination
  const totalPages = Math.ceil(filteredAndSortedProducts.length / itemsPerPage);
  const paginatedProducts = filteredAndSortedProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const categories = [
  { id: 'all', name: 'All Products', count: products.length, icon: <Star className="w-5 h-5" /> },
  { id: 'pets', name: 'Pet Care', count: products.filter(p => p.category === 'pets').length, icon: <PawPrint className="w-5 h-5" /> },
  { id: 'eco', name: 'Eco Living', count: products.filter(p => p.category === 'eco').length, icon: <Leaf className="w-5 h-5" /> },
  { id: 'fitness', name: 'Fitness', count: products.filter(p => p.category === 'fitness').length, icon: <Dumbbell className="w-5 h-5" /> }
];

  const badges = ['Eco-Friendly', 'Premium', 'Best Seller', 'New'];

  const sortOptions = [
    { value: 'featured', label: 'Featured' },
    { value: 'popularity', label: 'Most Popular' },
    { value: 'rating', label: 'Highest Rated' },
    { value: 'newest', label: 'Newest First' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'name', label: 'Name: A to Z' }
  ];

  const handleCategoryChange = (categoryId) => {
    dispatch(setActiveCategory(categoryId));
    updateURL({ category: categoryId, page: 1 });
    setCurrentPage(1);
  };

  const handleSearchChange = (value) => {
    dispatch(setSearchQuery(value));
    updateURL({ search: value, page: 1 });
    setCurrentPage(1);
  };

  const handleSortChange = (value) => {
    setSortBy(value);
    updateURL({ sort: value, page: 1 });
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    updateURL({ page });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBadgeFilter = (badge) => {
    const updated = selectedBadges.includes(badge)
      ? selectedBadges.filter(b => b !== badge)
      : [...selectedBadges, badge];
    setSelectedBadges(updated);
    setCurrentPage(1);
  };

  const clearAllFilters = () => {
    dispatch(setActiveCategory('all'));
    dispatch(setSearchQuery(''));
    setPriceRange([0, 200]);
    setSelectedRating(0);
    setSelectedBadges([]);
    setSortBy('featured');
    setCurrentPage(1);
    setSearchParams({});
  };

  const getBadgeType = (badge) => {
    switch (badge) {
      case 'Eco-Friendly': return 'eco-friendly';
      case 'Premium': return 'premium';
      case 'Best Seller': return 'best-seller';
      case 'New': return 'new';
      default: return 'default';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      

      <div className="max-w-7xl mx-auto px-4 sm:px-2 lg:px-2 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className={`lg:w-80 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold flex items-center">
                  <SlidersHorizontal className="w-5 h-5 mr-2 text-green-600" />
                  Filters
                </h2>
                <button
                  onClick={clearAllFilters}
                  className="text-sm text-red-600 hover:text-red-800 transition-colors"
                >
                  Clear All
                </button>
              </div>

              {/* Categories */}
              <div className="mb-6">
                <h3 className="font-semibold mb-3">Categories</h3>
                <div className="space-y-2">
                  {categories.map(category => (
                    <button
                      key={category.id}
                      onClick={() => handleCategoryChange(category.id)}
                      className={`w-full flex items-center justify-between p-3 rounded-lg transition-colors ${
                        activeCategory === category.id
                          ? 'bg-green-100 text-green-800 border border-green-200'
                          : 'hover:bg-gray-100'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <span className="text-lg">{category.icon}</span>
                        <span className="font-medium">{category.name}</span>
                      </div>
                      <span className="text-sm bg-gray-200 px-2 py-1 rounded-full">
                        {category.count}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <h3 className="font-semibold mb-3">Price Range</h3>
                <div className="space-y-3">
                  <input
                    type="range"
                    min="0"
                    max="200"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                    className="w-full accent-green-600"
                  />
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>$0</span>
                    <span className="font-medium">${priceRange[1]}</span>
                  </div>
                </div>
              </div>

              {/* Rating Filter */}
              {/* <div className="mb-6">
                <h3 className="font-semibold mb-3">Minimum Rating</h3>
                <div className="space-y-2">
                  {[4, 3, 2, 1].map(rating => (
                    <button
                      key={rating}
                      onClick={() => setSelectedRating(selectedRating === rating ? 0 : rating)}
                      className={`w-full flex items-center space-x-2 p-2 rounded-lg transition-colors ${
                        selectedRating === rating ? 'bg-yellow-100' : 'hover:bg-gray-100'
                      }`}
                    >
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm">& Up</span>
                    </button>
                  ))}
                </div>
              </div> */}

             
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => setShowFilters(!showFilters)}
                    className="lg:hidden flex items-center space-x-2 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    <Filter className="w-4 h-4" />
                    <span>Filters</span>
                  </button>
                  
                  <div className="text-gray-600">
                    <span className="font-medium">{filteredAndSortedProducts.length}</span> products found
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  {/* Sort Dropdown */}
                  <select
                    value={sortBy}
                    onChange={(e) => handleSortChange(e.target.value)}
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  >
                    {sortOptions.map(option => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>

                  {/* View Mode Toggle */}
                  {/* <div className="flex items-center bg-gray-100 rounded-lg p-1">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-2 rounded-md transition-colors ${
                        viewMode === 'grid' ? 'bg-white shadow-sm' : 'hover:bg-gray-200'
                      }`}
                    >
                      <Grid3X3 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-2 rounded-md transition-colors ${
                        viewMode === 'list' ? 'bg-white shadow-sm' : 'hover:bg-gray-200'
                      }`}
                    >
                      <List className="w-4 h-4" />
                    </button>
                  </div> */}
                </div>
              </div>

              {/* Active Filters */}
              {(activeCategory !== 'all' || searchQuery || selectedRating > 0 || selectedBadges.length > 0 || priceRange[1] < 200) && (
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-sm text-gray-600">Active filters:</span>
                    
                    {activeCategory !== 'all' && (
                      <Badge type="default" className="flex items-center space-x-1">
                        <span>Category: {categories.find(c => c.id === activeCategory)?.name}</span>
                        <button onClick={() => handleCategoryChange('all')}>
                          <X className="w-3 h-3" />
                        </button>
                      </Badge>
                    )}
                    
                    {searchQuery && (
                      <Badge type="default" className="flex items-center space-x-1">
                        <span>Search: "{searchQuery}"</span>
                        <button onClick={() => handleSearchChange('')}>
                          <X className="w-3 h-3" />
                        </button>
                      </Badge>
                    )}
                    
                    {selectedRating > 0 && (
                      <Badge type="default" className="flex items-center space-x-1">
                        <span>{selectedRating}+ Stars</span>
                        <button onClick={() => setSelectedRating(0)}>
                          <X className="w-3 h-3" />
                        </button>
                      </Badge>
                    )}
                    
                    {selectedBadges.map(badge => (
                      <Badge key={badge} type={getBadgeType(badge)} className="flex items-center space-x-1">
                        <span>{badge}</span>
                        <button onClick={() => handleBadgeFilter(badge)}>
                          <X className="w-3 h-3" />
                        </button>
                      </Badge>
                    ))}
                    
                    {priceRange[1] < 200 && (
                      <Badge type="default" className="flex items-center space-x-1">
                        <span>Under ${priceRange[1]}</span>
                        <button onClick={() => setPriceRange([0, 200])}>
                          <X className="w-3 h-3" />
                        </button>
                      </Badge>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Products Grid/List */}
            {paginatedProducts.length === 0 ? (
              <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
                <Package className="w-24 h-24 text-gray-300 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">No products found</h3>
                <p className="text-gray-600 mb-6">
                  Try adjusting your filters or search terms to find what you're looking for.
                </p>
                <Button onClick={clearAllFilters} variant="primary">
                  Clear All Filters
                </Button>
              </div>
            ) : (
              <>
                <div className={`grid gap-6 ${
                  viewMode === 'grid' 
                    ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3' 
                    : 'grid-cols-1'
                }`}>
                  {paginatedProducts.map(product => (
                    viewMode === 'grid' ? (
                      <ProductCard key={product.id} product={product} />
                    ) : (
                      <ProductListItem key={product.id} product={product} />
                    )
                  ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="mt-12 flex justify-center">
                    <div className="flex items-center space-x-2">
                      <Button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        variant="outline"
                        size="sm"
                      >
                        Previous
                      </Button>
                      
                      {[...Array(totalPages)].map((_, index) => {
                        const page = index + 1;
                        if (
                          page === 1 ||
                          page === totalPages ||
                          (page >= currentPage - 2 && page <= currentPage + 2)
                        ) {
                          return (
                            <Button
                              key={page}
                              onClick={() => handlePageChange(page)}
                              variant={currentPage === page ? "primary" : "outline"}
                              size="sm"
                            >
                              {page}
                            </Button>
                          );
                        } else if (
                          page === currentPage - 3 ||
                          page === currentPage + 3
                        ) {
                          return <span key={page} className="px-2">...</span>;
                        }
                        return null;
                      })}
                      
                      <Button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        variant="outline"
                        size="sm"
                      >
                        Next
                      </Button>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};


  
  


export default ProductsPage;


// import React, { useState, useEffect, useMemo } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { useSearchParams } from 'react-router-dom';
// import { setActiveCategory, setSearchQuery } from '../redux/slices/productSlice';
// import ProductCard from '../components/product/ProductCard';
// import Button from '../components/ui/Button';
// import Input from '../components/ui/Input';
// import Badge from '../components/ui/Badge';
// import { 
//   Search, 
//   Filter, 
//   Grid3X3, 
//   List, 
//   SlidersHorizontal,
//   X,
//   ChevronDown,
//   Star,
//   DollarSign,
//   Package,
//   Leaf,
//   TrendingUp,
//   Heart,
//   Eye,
//   ShoppingCart
// } from 'lucide-react';

// const ProductsPage = () => {
//   const dispatch = useDispatch();
//   const [searchParams, setSearchParams] = useSearchParams();
//   const { products, activeCategory, searchQuery } = useSelector(state => state.products);
  
//   // Local state for filters and view
//   const [viewMode, setViewMode] = useState('grid'); // grid or list
//   const [showFilters, setShowFilters] = useState(false);
//   const [sortBy, setSortBy] = useState('featured');
//   const [priceRange, setPriceRange] = useState([0, 3000]);
//   const [selectedRating, setSelectedRating] = useState(0);
//   const [selectedBadges, setSelectedBadges] = useState([]);
//   const [itemsPerPage] = useState(12);
//   const [currentPage, setCurrentPage] = useState(1);

//   // Initialize from URL params
//   useEffect(() => {
//     const category = searchParams.get('category') || 'all';
//     const search = searchParams.get('search') || '';
//     const sort = searchParams.get('sort') || 'featured';
//     const page = parseInt(searchParams.get('page')) || 1;

//     dispatch(setActiveCategory(category));
//     dispatch(setSearchQuery(search));
//     setSortBy(sort);
//     setCurrentPage(page);
//   }, [searchParams, dispatch]);

//   // Update URL when filters change
//   const updateURL = (updates) => {
//     const newParams = new URLSearchParams(searchParams);
//     Object.entries(updates).forEach(([key, value]) => {
//       if (value && value !== 'all' && value !== '') {
//         newParams.set(key, value);
//       } else {
//         newParams.delete(key);
//       }
//     });
//     setSearchParams(newParams);
//   };

//   // Filter and sort products
//   const filteredAndSortedProducts = useMemo(() => {
//     let filtered = products;

//     // Category filter
//     if (activeCategory !== 'all') {
//       filtered = filtered.filter(product => product.category === activeCategory);
//     }

//     // Search filter
//     if (searchQuery) {
//       filtered = filtered.filter(product =>
//         product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         product.description.toLowerCase().includes(searchQuery.toLowerCase())
//       );
//     }

//     // Price range filter
//     filtered = filtered.filter(product => 
//       product.price >= priceRange[0] && product.price <= priceRange[1]
//     );

//     // Rating filter
//     if (selectedRating > 0) {
//       filtered = filtered.filter(product => product.rating >= selectedRating);
//     }

//     // Badge filter
//     if (selectedBadges.length > 0) {
//       filtered = filtered.filter(product => 
//         selectedBadges.includes(product.badge)
//       );
//     }

//     // Sort products
//     const sorted = [...filtered].sort((a, b) => {
//       switch (sortBy) {
//         case 'price-low':
//           return a.price - b.price;
//         case 'price-high':
//           return b.price - a.price;
//         case 'rating':
//           return b.rating - a.rating;
//         case 'newest':
//           return b.id - a.id;
//         case 'name':
//           return a.name.localeCompare(b.name);
//         case 'popularity':
//           return b.reviews - a.reviews;
//         default: // featured
//           return 0;
//       }
//     });

//     return sorted;
//   }, [products, activeCategory, searchQuery, priceRange, selectedRating, selectedBadges, sortBy]);

//   // Pagination
//   const totalPages = Math.ceil(filteredAndSortedProducts.length / itemsPerPage);
//   const paginatedProducts = filteredAndSortedProducts.slice(
//     (currentPage - 1) * itemsPerPage,
//     currentPage * itemsPerPage
//   );

//   const categories = [
//     { id: 'all', name: 'All Products', count: products.length, icon: '🌟' },
//     { id: 'pets', name: 'Pet Care', count: products.filter(p => p.category === 'pets').length, icon: '🐾' },
//     { id: 'eco', name: 'Eco Living', count: products.filter(p => p.category === 'eco').length, icon: '🌱' },
//     { id: 'fitness', name: 'Fitness', count: products.filter(p => p.category === 'fitness').length, icon: '💪' }
//   ];

//   const badges = ['Eco-Friendly', 'Premium', 'Best Seller', 'New'];

//   const sortOptions = [
//     { value: 'featured', label: 'Featured' },
//     { value: 'popularity', label: 'Most Popular' },
//     { value: 'rating', label: 'Highest Rated' },
//     { value: 'newest', label: 'Newest First' },
//     { value: 'price-low', label: 'Price: Low to High' },
//     { value: 'price-high', label: 'Price: High to Low' },
//     { value: 'name', label: 'Name: A to Z' }
//   ];

//   const handleCategoryChange = (categoryId) => {
//     dispatch(setActiveCategory(categoryId));
//     updateURL({ category: categoryId, page: 1 });
//     setCurrentPage(1);
//   };

//   const handleSearchChange = (value) => {
//     dispatch(setSearchQuery(value));
//     updateURL({ search: value, page: 1 });
//     setCurrentPage(1);
//   };

//   const handleSortChange = (value) => {
//     setSortBy(value);
//     updateURL({ sort: value, page: 1 });
//     setCurrentPage(1);
//   };

//   const handlePageChange = (page) => {
//     setCurrentPage(page);
//     updateURL({ page });
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   const handleBadgeFilter = (badge) => {
//     const updated = selectedBadges.includes(badge)
//       ? selectedBadges.filter(b => b !== badge)
//       : [...selectedBadges, badge];
//     setSelectedBadges(updated);
//     setCurrentPage(1);
//   };

//   const clearAllFilters = () => {
//     dispatch(setActiveCategory('all'));
//     dispatch(setSearchQuery(''));
//     setPriceRange([0, 3000]);
//     setSelectedRating(0);
//     setSelectedBadges([]);
//     setSortBy('featured');
//     setCurrentPage(1);
//     setSearchParams({});
//   };

//   const getBadgeType = (badge) => {
//     switch (badge) {
//       case 'Eco-Friendly': return 'eco-friendly';
//       case 'Premium': return 'premium';
//       case 'Best Seller': return 'best-seller';
//       case 'New': return 'new';
//       default: return 'default';
//     }
//   };

//   const ProductListItem = ({ product }) => (
//     <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 p-6 border border-amber-100">
//       <div className="flex flex-col md:flex-row gap-6">
//         <div className="md:w-48 flex-shrink-0">
//           <img
//             src={product.image}
//             alt={product.name}
//             className="w-full h-48 object-cover rounded-xl"
//           />
//         </div>
//         <div className="flex-1 flex flex-col justify-between">
//           <div>
//             <div className="flex items-start justify-between mb-2">
//               <h3 className="text-xl font-bold text-amber-900">{product.name}</h3>
//               <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
//                 product.badge === 'Eco-Friendly' ? 'bg-amber-100 text-amber-800' :
//                 product.badge === 'Premium' ? 'bg-purple-100 text-purple-800' :
//                 product.badge === 'Best Seller' ? 'bg-orange-100 text-orange-800' :
//                 'bg-blue-100 text-blue-800'
//               }`}>
//                 {product.badge}
//               </span>
//             </div>
//             <p className="text-amber-700 mb-4">{product.description}</p>
//             <div className="flex items-center space-x-4 mb-4">
//               <div className="flex items-center">
//                 {[...Array(5)].map((_, i) => (
//                   <Star
//                     key={i}
//                     className={`w-4 h-4 ${
//                       i < Math.floor(product.rating)
//                         ? 'fill-yellow-400 text-yellow-400'
//                         : 'text-gray-300'
//                     }`}
//                   />
//                 ))}
//                 <span className="ml-2 text-sm text-amber-600">({product.reviews} reviews)</span>
//               </div>
//             </div>
//           </div>
//           <div className="flex items-center justify-between">
//             <div className="flex items-center space-x-2">
//               <span className="text-2xl font-bold text-amber-700">₹{product.price}</span>
//               {product.originalPrice && (
//                 <span className="text-lg text-gray-500 line-through">₹{product.originalPrice}</span>
//               )}
//             </div>
//             <div className="flex items-center space-x-2">
//               <button className="p-2 bg-amber-50 hover:bg-amber-100 rounded-full transition-colors">
//                 <Heart className="w-5 h-5 text-amber-700" />
//               </button>
//               <button className="px-6 py-3 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-xl font-semibold hover:from-amber-700 hover:to-orange-700 transition-all duration-300 flex items-center space-x-2">
//                 <ShoppingCart className="w-5 h-5" />
//                 <span>Add to Cart</span>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );

//   return (
//     <div className="min-h-screen" style={{ backgroundColor: '#f9e8dc' }}>
//       {/* Hero Section */}
     

//       <div className="max-w-7xl mx-auto px-4 sm:px-2 lg:px-2 py-8">
//         <div className="flex flex-col lg:flex-row gap-8">
//           {/* Sidebar Filters */}
//           <div className={`lg:w-80 ${showFilters ? 'block' : 'hidden lg:block'}`}>
//             <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 sticky top-6 border border-amber-200">
//               <div className="flex items-center justify-between mb-6">
//                 <h2 className="text-xl font-bold flex items-center text-amber-900">
//                   <SlidersHorizontal className="w-5 h-5 mr-2 text-amber-600" />
//                   Filters
//                 </h2>
//                 <button
//                   onClick={clearAllFilters}
//                   className="text-sm text-red-600 hover:text-red-800 transition-colors font-medium"
//                 >
//                   Clear All
//                 </button>
//               </div>

//               {/* Categories */}
//               <div className="mb-6">
//                 <h3 className="font-semibold mb-3 text-amber-900">Categories</h3>
//                 <div className="space-y-2">
//                   {categories.map(category => (
//                     <button
//                       key={category.id}
//                       onClick={() => handleCategoryChange(category.id)}
//                       className={`w-full flex items-center justify-between p-3 rounded-lg transition-colors ${
//                         activeCategory === category.id
//                           ? 'bg-amber-100 text-amber-800 border border-amber-300'
//                           : 'hover:bg-amber-50 text-amber-700'
//                       }`}
//                     >
//                       <div className="flex items-center space-x-3">
//                         <span className="text-lg">{category.icon}</span>
//                         <span className="font-medium">{category.name}</span>
//                       </div>
//                       <span className="text-sm bg-amber-200 text-amber-800 px-2 py-1 rounded-full">
//                         {category.count}
//                       </span>
//                     </button>
//                   ))}
//                 </div>
//               </div>

//               {/* Price Range */}
//               <div className="mb-6">
//                 <h3 className="font-semibold mb-3 text-amber-900">Price Range</h3>
//                 <div className="space-y-3">
//                   <input
//                     type="range"
//                     min="0"
//                     max="3000"
//                     value={priceRange[1]}
//                     onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
//                     className="w-full accent-amber-600"
//                   />
//                   <div className="flex justify-between text-sm text-amber-700">
//                     <span>₹0</span>
//                     <span className="font-medium">₹{priceRange[1]}</span>
//                   </div>
//                 </div>
//               </div>

//               {/* Rating Filter */}
//               <div className="mb-6">
//                 <h3 className="font-semibold mb-3 text-amber-900">Minimum Rating</h3>
//                 <div className="space-y-2">
//                   {[4, 3, 2, 1].map(rating => (
//                     <button
//                       key={rating}
//                       onClick={() => setSelectedRating(selectedRating === rating ? 0 : rating)}
//                       className={`w-full flex items-center space-x-2 p-2 rounded-lg transition-colors ${
//                         selectedRating === rating ? 'bg-yellow-100' : 'hover:bg-amber-50'
//                       }`}
//                     >
//                       <div className="flex items-center">
//                         {[...Array(5)].map((_, i) => (
//                           <Star
//                             key={i}
//                             className={`w-4 h-4 ${
//                               i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
//                             }`}
//                           />
//                         ))}
//                       </div>
//                       <span className="text-sm text-amber-700">& Up</span>
//                     </button>
//                   ))}
//                 </div>
//               </div>

//               {/* Badge Filters */}
//               <div className="mb-6">
//                 <h3 className="font-semibold mb-3 text-amber-900">Product Tags</h3>
//                 <div className="flex flex-wrap gap-2">
//                   {badges.map(badge => (
//                     <button
//                       key={badge}
//                       onClick={() => handleBadgeFilter(badge)}
//                       className={`px-3 py-1 text-xs font-semibold rounded-full transition-all duration-200 ${
//                         selectedBadges.includes(badge) 
//                           ? 'ring-2 ring-amber-500 bg-amber-100 text-amber-800' 
//                           : 'bg-gray-100 text-gray-700 hover:bg-amber-50 hover:text-amber-700'
//                       }`}
//                     >
//                       {badge}
//                     </button>
//                   ))}
//                 </div>
//               </div>

//               {/* Quick Stats */}
//               <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg p-4 border border-amber-200">
//                 <h3 className="font-semibold mb-2 text-amber-800">Collection Stats</h3>
//                 <div className="space-y-2 text-sm">
//                   <div className="flex justify-between">
//                     <span className="text-amber-700">Total Products</span>
//                     <span className="font-medium text-amber-800">{filteredAndSortedProducts.length}</span>
//                   </div>
//                   <div className="flex justify-between">
//                     <span className="text-amber-700">Eco-Friendly</span>
//                     <span className="font-medium text-amber-800">
//                       {products.filter(p => p.badge === 'Eco-Friendly').length}
//                     </span>
//                   </div>
//                   <div className="flex justify-between">
//                     <span className="text-amber-700">Avg. Rating</span>
//                     <span className="font-medium text-amber-800">
//                       {(products.reduce((sum, p) => sum + p.rating, 0) / products.length).toFixed(1)} ★
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Main Content */}
//           <div className="flex-1">
//             {/* Toolbar */}
//             <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 mb-6 border border-amber-200">
//               <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
//                 <div className="flex items-center space-x-4">
//                   <button
//                     onClick={() => setShowFilters(!showFilters)}
//                     className="lg:hidden flex items-center space-x-2 px-4 py-2 bg-amber-100 text-amber-800 rounded-lg hover:bg-amber-200 transition-colors"
//                   >
//                     <Filter className="w-4 h-4" />
//                     <span>Filters</span>
//                   </button>
                  
//                   <div className="text-amber-700">
//                     <span className="font-medium">{filteredAndSortedProducts.length}</span> products found
//                   </div>
//                 </div>

//                 <div className="flex items-center space-x-4">
//                   {/* Sort Dropdown */}
//                   <select
//                     value={sortBy}
//                     onChange={(e) => handleSortChange(e.target.value)}
//                     className="px-4 py-2 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white text-amber-800"
//                   >
//                     {sortOptions.map(option => (
//                       <option key={option.value} value={option.value}>
//                         {option.label}
//                       </option>
//                     ))}
//                   </select>

//                   {/* View Mode Toggle */}
//                   <div className="flex items-center bg-amber-100 rounded-lg p-1">
//                     <button
//                       onClick={() => setViewMode('grid')}
//                       className={`p-2 rounded-md transition-colors ${
//                         viewMode === 'grid' ? 'bg-white shadow-sm text-amber-800' : 'hover:bg-amber-200 text-amber-600'
//                       }`}
//                     >
//                       <Grid3X3 className="w-4 h-4" />
//                     </button>
//                     <button
//                       onClick={() => setViewMode('list')}
//                       className={`p-2 rounded-md transition-colors ${
//                         viewMode === 'list' ? 'bg-white shadow-sm text-amber-800' : 'hover:bg-amber-200 text-amber-600'
//                       }`}
//                     >
//                       <List className="w-4 h-4" />
//                     </button>
//                   </div>
//                 </div>
//               </div>

//               {/* Active Filters */}
//               {(activeCategory !== 'all' || searchQuery || selectedRating > 0 || selectedBadges.length > 0 || priceRange[1] < 3000) && (
//                 <div className="mt-4 pt-4 border-t border-amber-200">
//                   <div className="flex flex-wrap items-center gap-2">
//                     <span className="text-sm text-amber-700">Active filters:</span>
                    
//                     {activeCategory !== 'all' && (
//                       <span className="flex items-center space-x-1 px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-xs">
//                         <span>Category: {categories.find(c => c.id === activeCategory)?.name}</span>
//                         <button onClick={() => handleCategoryChange('all')}>
//                           <X className="w-3 h-3" />
//                         </button>
//                       </span>
//                     )}
                    
//                     {searchQuery && (
//                       <span className="flex items-center space-x-1 px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-xs">
//                         <span>Search: "{searchQuery}"</span>
//                         <button onClick={() => handleSearchChange('')}>
//                           <X className="w-3 h-3" />
//                         </button>
//                       </span>
//                     )}
                    
//                     {selectedRating > 0 && (
//                       <span className="flex items-center space-x-1 px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-xs">
//                         <span>{selectedRating}+ Stars</span>
//                         <button onClick={() => setSelectedRating(0)}>
//                           <X className="w-3 h-3" />
//                         </button>
//                       </span>
//                     )}
                    
//                     {selectedBadges.map(badge => (
//                       <span key={badge} className="flex items-center space-x-1 px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-xs">
//                         <span>{badge}</span>
//                         <button onClick={() => handleBadgeFilter(badge)}>
//                           <X className="w-3 h-3" />
//                         </button>
//                       </span>
//                     ))}
                    
//                     {priceRange[1] < 3000 && (
//                       <span className="flex items-center space-x-1 px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-xs">
//                         <span>Under ₹{priceRange[1]}</span>
//                         <button onClick={() => setPriceRange([0, 3000])}>
//                           <X className="w-3 h-3" />
//                         </button>
//                       </span>
//                     )}
//                   </div>
//                 </div>
//               )}
//             </div>

//             {/* Products Grid/List */}
//             {paginatedProducts.length === 0 ? (
//               <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-12 text-center border border-amber-200">
//                 <Package className="w-24 h-24 text-amber-300 mx-auto mb-6" />
//                 <h3 className="text-2xl font-bold text-amber-900 mb-4">No products found</h3>
//                 <p className="text-amber-700 mb-6">
//                   Try adjusting your filters or search terms to find what you're looking for.
//                 </p>
//                 <button
//                   onClick={clearAllFilters}
//                   className="px-6 py-3 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-xl font-semibold hover:from-amber-700 hover:to-orange-700 transition-all duration-300"
//                 >
//                   Clear All Filters
//                 </button>
//               </div>
//             ) : (
//               <>
//                 <div className={`grid gap-6 ${
//                   viewMode === 'grid' 
//                     ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
//                     : 'grid-cols-1'
//                 }`}>
//                   {paginatedProducts.map(product => (
//                     viewMode === 'grid' ? (
//                       <ProductCard key={product.id} product={product} />
//                     ) : (
//                       <ProductListItem key={product.id} product={product} />
//                     )
//                   ))}
//                 </div>

//                 {/* Pagination */}
//                 {totalPages > 1 && (
//                   <div className="mt-12 flex justify-center">
//                     <div className="flex items-center space-x-2">
//                       <button
//                         onClick={() => handlePageChange(currentPage - 1)}
//                         disabled={currentPage === 1}
//                         className="px-4 py-2 bg-white border border-amber-300 text-amber-800 rounded-lg hover:bg-amber-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
//                       >
//                         Previous
//                       </button>
                      
//                       {[...Array(totalPages)].map((_, index) => {
//                         const page = index + 1;
//                         if (
//                           page === 1 ||
//                           page === totalPages ||
//                           (page >= currentPage - 2 && page <= currentPage + 2)
//                         ) {
//                           return (
//                             <button
//                               key={page}
//                               onClick={() => handlePageChange(page)}
//                               className={`px-4 py-2 rounded-lg transition-colors ${
//                                 currentPage === page 
//                                   ? 'bg-gradient-to-r from-amber-600 to-orange-600 text-white'
//                                   : 'bg-white border border-amber-300 text-amber-800 hover:bg-amber-50'
//                               }`}
//                             >
//                               {page}
//                             </button>
//                           );
//                         } else if (
//                           page === currentPage - 3 ||
//                           page === currentPage + 3
//                         ) {
//                           return <span key={page} className="px-2 text-amber-600">...</span>;
//                         }
//                         return null;
//                       })}
                      
//                       <button
//                         onClick={() => handlePageChange(currentPage + 1)}
//                         disabled={currentPage === totalPages}
//                         className="px-4 py-2 bg-white border border-amber-300 text-amber-800 rounded-lg hover:bg-amber-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
//                       >
//                         Next
//                       </button>
//                     </div>
//                   </div>
//                 )}
//               </>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductsPage;