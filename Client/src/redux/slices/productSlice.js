import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [
    {
      id: 1,
      name: "Bamboo Pet Bowl Set",
      category: "pets",
      price: 49.99,
      originalPrice: 69.99,
      image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400&h=400&fit=crop",
      rating: 4.8,
      reviews: 124,
      badge: "Eco-Friendly",
      description: "Premium bamboo pet bowls that are eco-friendly and durable.",
      inStock: 25
    },
    {
      id: 2,
      name: "Organic Cotton Yoga Mat",
      category: "fitness",
      price: 79.99,
      originalPrice: 99.99,
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=400&fit=crop",
      rating: 4.9,
      reviews: 89,
      badge: "Premium",
      description: "100% organic cotton yoga mat for comfortable practice.",
      inStock: 15
    },
    {
      id: 3,
      name: "Recycled Steel Water Bottle",
      category: "eco",
      price: 34.99,
      originalPrice: 44.99,
      image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&h=400&fit=crop",
      rating: 4.7,
      reviews: 156,
      badge: "Best Seller",
      description: "Insulated water bottle made from 100% recycled steel.",
      inStock: 30
    },
    {
      id: 4,
      name: "Solar-Powered Pet Feeder",
      category: "pets",
      price: 129.99,
      originalPrice: 159.99,
      image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400&h=400&fit=crop",
      rating: 4.6,
      reviews: 67,
      badge: "New",
      description: "Automatic pet feeder powered by solar energy.",
      inStock: 8
    },
    {
      id: 1,
      name: "Bamboo Pet Bowl Set",
      description: "Eco-friendly dining for your pet",
      price: 469,
      originalPrice: 599,
      image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400&h=400&fit=crop",
      badge: "Eco-Friendly",
      rating: 4.7,
      reviews: 124,
      inStock: 15,
      category: "pets"
    },
    {
      id: 2,
      name: "Natural Hemp Rope Toy",
      description: "Safe and durable playtime",
      price: 299,
      originalPrice: 399,
      image: "https://images.unsplash.com/photo-1605568427561-40dd23c2acea?w=400&h=400&fit=crop",
      badge: "Best Seller",
      rating: 4.8,
      reviews: 89,
      inStock: 8,
      category: "pets"
    },
    {
      id: 3,
      name: "Organic Cotton Pet Bed",
      description: "Comfortable & sustainable sleep",
      price: 1299,
      originalPrice: 1599,
      image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400&h=400&fit=crop",
      badge: "Premium",
      rating: 4.9,
      reviews: 156,
      inStock: 5,
      category: "pets"
    },
    {
      id: 4,
      name: "Solar Pet Water Fountain",
      description: "Energy-efficient hydration",
      price: 2499,
      image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400&h=400&fit=crop",
      badge: "New",
      rating: 4.6,
      reviews: 67,
      inStock: 12,
      category: "pets"
    },
    {
      id: 5,
      name: "Coconut Shell Food Bowl",
      description: "Natural & biodegradable",
      price: 349,
      originalPrice: 449,
      image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400&h=400&fit=crop",
      badge: "Eco-Friendly",
      rating: 4.5,
      reviews: 98,
      inStock: 20,
      category: "pets"
    },
    {
      id: 6,
      name: "Bamboo Toothbrush Set",
      description: "Plastic-free oral care",
      price: 199,
      originalPrice: 299,
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop",
      badge: "Eco-Friendly",
      rating: 4.7,
      reviews: 203,
      inStock: 25,
      category: "eco"
    },
    {
      id: 7,
      name: "Reusable Food Wraps",
      description: "Replace plastic wrap naturally",
      price: 549,
      originalPrice: 699,
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
      badge: "Best Seller",
      rating: 4.8,
      reviews: 145,
      inStock: 18,
      category: "eco"
    },
    {
      id: 8,
      name: "Solar LED Lantern",
      description: "Sustainable outdoor lighting",
      price: 899,
      originalPrice: 1199,
      image: "https://images.unsplash.com/photo-1573160103600-30629dfeabb4?w=400&h=400&fit=crop",
      badge: "Premium",
      rating: 4.6,
      reviews: 87,
      inStock: 10,
      category: "eco"
    },
    {
      id: 9,
      name: "Organic Cotton Tote Bag",
      description: "Stylish & sustainable shopping",
      price: 399,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
      badge: "New",
      rating: 4.5,
      reviews: 76,
      inStock: 30,
      category: "eco"
    },
    {
      id: 10,
      name: "Stainless Steel Water Bottle",
      description: "BPA-free hydration solution",
      price: 799,
      originalPrice: 999,
      image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&h=400&fit=crop",
      badge: "Eco-Friendly",
      rating: 4.9,
      reviews: 234,
      inStock: 22,
      category: "eco"
    },
     {
      id: 11,
      name: "Cork Yoga Mat",
      description: "Natural grip & comfort",
      price: 1999,
      originalPrice: 2499,
      image: "https://images.unsplash.com/photo-1588286840104-8957b019727f?w=400&h=400&fit=crop",
      badge: "Premium",
      rating: 4.8,
      reviews: 112,
      inStock: 8,
      category: "fitness"
    },
    {
      id: 12,
      name: "Bamboo Resistance Bands",
      description: "Eco-friendly strength training",
      price: 699,
      originalPrice: 899,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop",
      badge: "Best Seller",
      rating: 4.7,
      reviews: 89,
      inStock: 15,
      category: "fitness"
    },
    {
      id: 13,
      name: "Organic Hemp Protein",
      description: "Plant-based nutrition",
      price: 1299,
      image: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=400&h=400&fit=crop",
      badge: "New",
      rating: 4.6,
      reviews: 67,
      inStock: 12,
      category: "fitness"
    },
    {
      id: 14,
      name: "Wooden Yoga Blocks",
      description: "Sustainable support & alignment",
      price: 899,
      originalPrice: 1199,
      image: "https://images.unsplash.com/photo-1506629905586-b19ea1a1d093?w=400&h=400&fit=crop",
      badge: "Eco-Friendly",
      rating: 4.5,
      reviews: 94,
      inStock: 20,
      category: "fitness"
    },
    {
      id: 15,
      name: "Natural Rubber Dumbbells",
      description: "Chemical-free strength training",
      price: 1799,
      originalPrice: 2199,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop",
      badge: "Premium",
      rating: 4.9,
      reviews: 156,
      inStock: 6,
      category: "fitness"
    }
  ],
  filteredProducts: [],
  categories: ['all', 'pets', 'eco', 'fitness'],
  activeCategory: 'all',
  searchQuery: '',
  loading: false,
  error: null
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setActiveCategory: (state, action) => {
      state.activeCategory = action.payload;
      productSlice.caseReducers.filterProducts(state);
    },
    
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
      productSlice.caseReducers.filterProducts(state);
    },
    
    filterProducts: (state) => {
      let filtered = state.products;
      
      if (state.activeCategory !== 'all') {
        filtered = filtered.filter(product => product.category === state.activeCategory);
      }
      
      if (state.searchQuery) {
        filtered = filtered.filter(product =>
          product.name.toLowerCase().includes(state.searchQuery.toLowerCase())
        );
      }
      
      state.filteredProducts = filtered;
    },
    
    updateStock: (state, action) => {
      const { productId, quantity } = action.payload;
      const product = state.products.find(p => p.id === productId);
      if (product) {
        product.inStock -= quantity;
      }
    }
  }
});

export const { setActiveCategory, setSearchQuery, filterProducts, updateStock } = productSlice.actions;
export default productSlice.reducer;