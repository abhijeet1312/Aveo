import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useCart } from '../hooks/useCart';
import { toggleFavorite } from '../redux/slices/userSlice';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import { 
  ArrowLeft, 
  Heart, 
  Star, 
  ShoppingCart, 
  Plus, 
  Minus, 
  Truck, 
  Shield, 
  RotateCcw,
  Leaf,
  Share2,
  ZoomIn
} from 'lucide-react';
import toast from 'react-hot-toast';

const ProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { products } = useSelector(state => state.products);
  const { favorites } = useSelector(state => state.user);
  const { addItemToCart, incrementItemQuantity, decrementItemQuantity, getItemQuantity } = useCart();
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isZoomed, setIsZoomed] = useState(false);

  const product = products.find(p => p.id === parseInt(id));
  const cartQuantity = getItemQuantity(product?.id);
  const isFavorite = favorites.includes(product?.id);

  // Mock additional product data
  const productImages = [
    product?.image,
    "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=400&fit=crop"
  ];

  const productFeatures = [
    "Made from 100% sustainable materials",
    "Biodegradable and eco-friendly",
    "Dishwasher safe and durable",
    "Free from harmful chemicals",
    "Supports reforestation projects"
  ];

  useEffect(() => {
    if (!product) {
      navigate('/');
    }
  }, [product, navigate]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItemToCart(product);
    }
    setQuantity(1);
  };

  const handleToggleFavorite = () => {
    dispatch(toggleFavorite(product.id));
  };

  const handleShare = async () => {
    try {
      await navigator.share({
        title: product.name,
        text: product.description,
        url: window.location.href,
      });
    } catch (error) {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard.writeText(window.location.href);
      toast.success('Product link copied to clipboard!');
    }
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
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <Button
          onClick={() => navigate(-1)}
          variant="ghost"
          className="mb-6"
          icon={<ArrowLeft className="w-5 h-5" />}
        >
          Back to Products
        </Button>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative">
              <img
                src={productImages[selectedImage]}
                alt={product.name}
                className={`w-full h-96 object-cover rounded-2xl cursor-zoom-in transition-transform duration-300 ${
                  isZoomed ? 'scale-150' : 'scale-100'
                }`}
                onClick={() => setIsZoomed(!isZoomed)}
              />
              <button
                onClick={() => setIsZoomed(!isZoomed)}
                className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow"
              >
                <ZoomIn className="w-5 h-5" />
              </button>
            </div>
            
            <div className="flex space-x-3">
              {productImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                    selectedImage === index ? 'border-green-500' : 'border-gray-200'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-start justify-between mb-4">
                <div>
                  <Badge type={getBadgeType(product.badge)} className="mb-3">
                    {product.badge}
                  </Badge>
                  <h1 className="text-4xl font-bold text-gray-900 mb-2">{product.name}</h1>
                </div>
                
                <div className="flex space-x-2">
                  <button
                    onClick={handleShare}
                    className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <Share2 className="w-6 h-6" />
                  </button>
                  <button
                    onClick={handleToggleFavorite}
                    className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                  >
                    <Heart
                      className={`w-6 h-6 ${
                        isFavorite ? 'fill-red-500 text-red-500' : ''
                      }`}
                    />
                  </button>
                </div>
              </div>

              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(product.rating)
                          ? 'fill-yellow-400 text-yellow-400'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-gray-600">({product.reviews} reviews)</span>
              </div>

              <p className="text-gray-600 text-lg mb-6">{product.description}</p>

              <div className="flex items-center space-x-4 mb-6">
                <span className="text-4xl font-bold text-green-600">${product.price}</span>
                {product.originalPrice && (
                  <span className="text-2xl text-gray-500 line-through">${product.originalPrice}</span>
                )}
                {product.originalPrice && (
                  <Badge type="sale" className="text-base">
                    Save {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                  </Badge>
                )}
              </div>

              <div className="flex items-center space-x-2 mb-6">
                <span className="text-gray-600">Stock:</span>
                <span className={`font-medium ${
                  product.inStock > 10 ? 'text-green-600' : 
                  product.inStock > 0 ? 'text-yellow-600' : 'text-red-600'
                }`}>
                  {product.inStock > 0 ? `${product.inStock} available` : 'Out of stock'}
                </span>
              </div>
            </div>

            {/* Quantity & Add to Cart */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <span className="text-gray-700 font-medium">Quantity:</span>
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  
                  <span className="w-12 text-center font-semibold text-lg">{quantity}</span>
                  
                  <button
                    onClick={() => setQuantity(Math.min(product.inStock, quantity + 1))}
                    className="w-10 h-10 rounded-full bg-green-100 hover:bg-green-200 flex items-center justify-center transition-colors"
                  >
                    <Plus className="w-4 h-4 text-green-600" />
                  </button>
                </div>
              </div>

              <div className="flex space-x-4">
                <Button
                  onClick={handleAddToCart}
                  disabled={product.inStock === 0}
                  variant="primary"
                  size="lg"
                  className="flex-1"
                  icon={<ShoppingCart className="w-5 h-5" />}
                >
                  Add to Cart
                </Button>
                
                {cartQuantity > 0 && (
                  <div className="flex items-center space-x-2">
                    <Button
                      onClick={() => decrementItemQuantity(product.id)}
                      variant="outline"
                      size="sm"
                    >
                      <Minus className="w-4 h-4" />
                    </Button>
                    <span className="px-3 py-2 bg-gray-100 rounded-lg font-semibold">
                      {cartQuantity}
                    </span>
                    <Button
                      onClick={() => incrementItemQuantity(product.id)}
                      variant="outline"
                      size="sm"
                    >
                      <Plus className="w-4 h-4" />
                    </Button>
                  </div>
                )}
              </div>
            </div>

            {/* Features */}
            <div className="bg-green-50 rounded-xl p-6">
              <h3 className="font-semibold text-lg mb-4 flex items-center">
                <Leaf className="w-5 h-5 text-green-600 mr-2" />
                Eco-Friendly Features
              </h3>
              <ul className="space-y-2">
                {productFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-2 text-gray-700">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Shipping & Returns */}
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="p-4 bg-blue-50 rounded-xl">
                <Truck className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                <div className="text-sm font-medium">Free Shipping</div>
                <div className="text-xs text-gray-600">Orders over $50</div>
              </div>
              
              <div className="p-4 bg-purple-50 rounded-xl">
                <Shield className="w-6 h-6 text-purple-600 mx-auto mb-2" />
                <div className="text-sm font-medium">Secure Payment</div>
                <div className="text-xs text-gray-600">SSL Protected</div>
              </div>
              
              <div className="p-4 bg-orange-50 rounded-xl">
                <RotateCcw className="w-6 h-6 text-orange-600 mx-auto mb-2" />
                <div className="text-sm font-medium">Easy Returns</div>
                <div className="text-xs text-gray-600">30-day policy</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;