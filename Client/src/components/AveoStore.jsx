import React, { useState, useEffect } from 'react';
import { ShoppingCart, Search, Menu, X, Heart, Star, ArrowRight, Leaf, Shield, Truck, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

// Mock Redux Store (simplified for demo)
const useStore = () => {
    const [cart, setCart] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const [products, setProducts] = useState([
        {
            id: 1,
            name: "Bamboo Pet Bowl Set",
            category: "pets",
            price: 49.99,
            originalPrice: 69.99,
            image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400&h=400&fit=crop",
            rating: 4.8,
            reviews: 124,
            badge: "Eco-Friendly"
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
            badge: "Premium"
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
            badge: "Best Seller"
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
            badge: "New"
        }
    ]);

    const addToCart = (product) => {
        setCart(prev => [...prev, { ...product, quantity: 1 }]);
    };

    const toggleFavorite = (productId) => {
        setFavorites(prev =>
            prev.includes(productId)
                ? prev.filter(id => id !== productId)
                : [...prev, productId]
        );
    };

    return { cart, favorites, products, addToCart, toggleFavorite };
};

const AveoStore = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeCategory, setActiveCategory] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const { cart, favorites, products, addToCart, toggleFavorite } = useStore();

    const categories = [
        { id: 'all', name: 'All Products', icon: '🌟' },
        { id: 'pets', name: 'Pet Care', icon: '🐾' },
        { id: 'eco', name: 'Eco Living', icon: '🌱' },
        { id: 'fitness', name: 'Fitness', icon: '💪' }
    ];

    const filteredProducts = products.filter(product => {
        const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
        const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

   const Header = () => (
        <header className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex items-center space-x-2">
                        <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                            <Leaf className="w-6 h-6 text-white" />
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                                AveoStore
                            </h1>
                            <p className="text-xs text-gray-500 -mt-1">Eco Premium</p>
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        <Link to={"/"} className="text-gray-700 hover:text-green-600 font-medium transition-colors">Home</Link>
                        <Link to={"/shop"} className="text-gray-700 hover:text-green-600 font-medium transition-colors">Shop</Link>
                        <Link to={"/about"} className="text-gray-700 hover:text-green-600 font-medium transition-colors">About</Link>
                        <Link to={"/contact"} className="text-gray-700 hover:text-green-600 font-medium transition-colors">Contact</Link>
                    </nav>

                    {/* Actions */}
                    <div className="flex items-center space-x-4">
                        <div className="relative hidden sm:block">
                            <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search products..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="pl-10 pr-4 py-2 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent w-64"
                            />
                        </div>

                        <button className="relative p-2 text-gray-700 hover:text-green-600 transition-colors">
                            <Heart className="w-6 h-6" />
                            {favorites.length > 0 && (
                                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                                    {favorites.length}
                                </span>
                            )}
                        </button>

                        <button className="relative p-2 text-gray-700 hover:text-green-600 transition-colors">
                            <ShoppingCart className="w-6 h-6" />
                            {cart.length > 0 && (
                                <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                                    {cart.length}
                                </span>
                            )}
                        </button>

                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="md:hidden p-2 text-gray-700"
                        >
                            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden py-4 border-t border-gray-200">
                        <div className="flex flex-col space-y-4">
                            <input
                                type="text"
                                placeholder="Search products..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                            <nav className="flex flex-col space-y-2">

                                <Link to={"/"} className="text-gray-700 hover:text-green-600 py-2 ">Home</Link>
                                <Link to={"/shop"} className="text-gray-700 hover:text-green-600 py-2">Shop</Link>
                                <Link to={"/about"} className="text-gray-700 hover:text-green-600 py-2">About</Link>
                                <Link to={"/contact"} className="text-gray-700 hover:text-green-600 font-medium py-2">Contact</Link>
                            </nav>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );

    

    const Hero = () => (
        <section className="relative bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 py-20">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                                Your Pet Deserves
                                <span className="block bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                                    Eco-Luxury
                                </span>
                            </h2>
                            <p className="text-xl text-gray-600 max-w-lg">
                                Premium sustainable products that last years & help save the planet.
                                From bamboo bowls to solar feeders.
                            </p>
                        </div>

                        {/* <h1 className='text-red-400'>smer</h1> */}

                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-full font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                                Shop Now - Free UAE Shipping
                            </button>
                            <button className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-full font-semibold hover:bg-green-600 hover:text-white transition-all duration-300">
                                Watch Demo
                            </button>
                        </div>

                        <div className="flex items-center space-x-8 pt-4">
                            <div className="flex items-center space-x-2">
                                <Shield className="w-6 h-6 text-green-600" />
                                <span className="text-sm text-gray-600">Eco-Certified</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Truck className="w-6 h-6 text-green-600" />
                                <span className="text-sm text-gray-600">Fast Shipping</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Phone className="w-6 h-6 text-green-600" />
                                <span className="text-sm text-gray-600">24/7 Support</span>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 rounded-3xl transform rotate-6 opacity-20"></div>
                        <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=600&h=600&fit=crop"
                                alt="Eco-friendly pet products"
                                className="w-full h-96 object-cover rounded-2xl"
                            />
                            <div className="absolute -bottom-4 -right-4 bg-green-500 text-white p-4 rounded-2xl shadow-lg">
                                <div className="text-2xl font-bold">50%</div>
                                <div className="text-sm">ECO SAVINGS</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );

    const CategoryFilter = () => (
        <section className="py-8 bg-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-center gap-4">
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setActiveCategory(category.id)}
                            className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${activeCategory === category.id
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

    const ProductGrid = () => (
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
                        <div
                            key={product.id}
                            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
                        >
                            <div className="relative overflow-hidden">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                                />
                                <div className="absolute top-4 left-4">
                                    <span className={`px-3 py-1 text-xs font-semibold rounded-full ${product.badge === 'Eco-Friendly' ? 'bg-green-100 text-green-800' :
                                            product.badge === 'Premium' ? 'bg-purple-100 text-purple-800' :
                                                product.badge === 'Best Seller' ? 'bg-orange-100 text-orange-800' :
                                                    'bg-blue-100 text-blue-800'
                                        }`}>
                                        {product.badge}
                                    </span>
                                </div>
                                <button
                                    onClick={() => toggleFavorite(product.id)}
                                    className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300"
                                >
                                    <Heart
                                        className={`w-5 h-5 ${favorites.includes(product.id)
                                                ? 'fill-red-500 text-red-500'
                                                : 'text-gray-400'
                                            }`}
                                    />
                                </button>
                            </div>

                            <div className="p-6">
                                <h4 className="font-bold text-lg text-gray-900 mb-2">{product.name}</h4>

                                <div className="flex items-center space-x-2 mb-3">
                                    <div className="flex items-center">
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                className={`w-4 h-4 ${i < Math.floor(product.rating)
                                                        ? 'fill-yellow-400 text-yellow-400'
                                                        : 'text-gray-300'
                                                    }`}
                                            />
                                        ))}
                                    </div>
                                    <span className="text-sm text-gray-500">({product.reviews})</span>
                                </div>

                                <div className="flex items-center space-x-2 mb-4">
                                    <span className="text-2xl font-bold text-green-600">${product.price}</span>
                                    <span className="text-lg text-gray-500 line-through">${product.originalPrice}</span>
                                </div>

                                <button
                                    onClick={() => addToCart(product)}
                                    className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 rounded-xl font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                                >
                                    <ShoppingCart className="w-5 h-5" />
                                    <span>Add to Cart</span>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );

    const Features = () => (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="text-center p-8 rounded-2xl bg-green-50 hover:bg-green-100 transition-colors duration-300">
                        <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                            <Leaf className="w-8 h-8 text-white" />
                        </div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">100% Eco-Friendly</h4>
                        <p className="text-gray-600">
                            All products are made from sustainable, renewable materials that protect our planet.
                        </p>
                    </div>

                    <div className="text-center p-8 rounded-2xl bg-blue-50 hover:bg-blue-100 transition-colors duration-300">
                        <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                            <Shield className="w-8 h-8 text-white" />
                        </div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">Premium Quality</h4>
                        <p className="text-gray-600">
                            Rigorously tested products that combine sustainability with exceptional durability.
                        </p>
                    </div>

                    <div className="text-center p-8 rounded-2xl bg-orange-50 hover:bg-orange-100 transition-colors duration-300">
                        <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                            <Truck className="w-8 h-8 text-white" />
                        </div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">Fast Shipping</h4>
                        <p className="text-gray-600">
                            Free shipping across UAE and fast delivery to India and Southeast Asia.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );

    const Footer = () => (
        <footer className="bg-gray-900 text-white py-12">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    <div>
                        <div className="flex items-center space-x-2 mb-4">
                            <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                                <Leaf className="w-5 h-5 text-white" />
                            </div>
                            <h5 className="text-xl font-bold">AveoStore</h5>
                        </div>
                        <p className="text-gray-400 mb-4">
                            Premium eco-friendly products for conscious living. Sustainable, stylish, and built to last.
                        </p>
                    </div>

                    <div>
                        <h6 className="font-semibold mb-4">Quick Links</h6>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Shop</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h6 className="font-semibold mb-4">Categories</h6>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="#" className="hover:text-white transition-colors">Pet Care</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Eco Living</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Fitness</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">New Arrivals</a></li>
                        </ul>
                    </div>

                    <div>
                        <h6 className="font-semibold mb-4">Support</h6>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="#" className="hover:text-white transition-colors">Track Order</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Shipping Info</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Returns</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
                    <p>&copy; 2024 AveoStore. All rights reserved. Made with 💚 for a sustainable future.</p>
                </div>
            </div>
        </footer>
    );

    return (
        <div className="min-h-screen bg-white">
            <Header />
            <Hero />
            <CategoryFilter />
            <ProductGrid />
            <Features />
            <Footer />
        </div>
    );
};

export default AveoStore;