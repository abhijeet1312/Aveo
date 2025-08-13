// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// // import { setUser } from '../redux/slices/userSlice';
// import { Leaf, Eye, EyeOff, Mail, Lock, User, Phone, MapPin, ArrowRight, Shield, Heart, Sparkles } from 'lucide-react';
// import { setUser } from '../../redux/slices/userSlice';

// // Login Page Component
// const LoginPage = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [formData, setFormData] = useState({
//     email: '',
//     password: ''
//   });

//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const handleInputChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch('https://aveo-8pm2.onrender.com/api/login', { // Replace with your actual API endpoint
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           user_email: formData.email,
//           user_password: formData.password
//         })
//       });

//       if (!response.ok) {
//         throw new Error('Login failed');
//       }

//       const data = await response.json();

//       console.log(data);

//       dispatch(setUser(data.user)); // Dispatching the user data to the Redux store

//       navigate('/')
//       return data;
//     } catch (error) {
//       throw new Error(error.message || 'Network error occurred');
//     }
//   };

//   return (
//     <div className="min-h-screen flex" style={{ backgroundColor: '#f9e8dc' }}>
//       {/* Left Side - Form */}
//       <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
//         <div className="max-w-md w-full space-y-8">
//           {/* Logo */}
//           <div className="text-center">
//             <Link to="/" className="inline-flex items-center space-x-2 mb-8">
//               <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-lg border border-amber-200">
//                 <Leaf className="w-7 h-7 text-amber-600" />
//               </div>
//               <div className="text-left">
//                 <h1 className="text-2xl font-bold text-amber-900">AveoStore</h1>
//                 <p className="text-xs text-amber-700 -mt-1 tracking-wide">ECO PREMIUM</p>
//               </div>
//             </Link>
//           </div>

//           {/* Form Header */}
//           <div className="text-center">
//             <h2 className="text-3xl font-bold text-amber-900">Welcome Back!</h2>
//             <p className="mt-2 text-amber-700">
//               Sign in to your account and continue your eco-journey
//             </p>
//           </div>

//           {/* Form */}
//           <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
//             <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-amber-200">
//               <div className="space-y-4">
//                 <div>
//                   <label htmlFor="email" className="block text-sm font-medium text-amber-800 mb-2">
//                     Email Address
//                   </label>
//                   <div className="relative">
//                     <Mail className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-amber-600" />
//                     <input
//                       id="email"
//                       name="email"
//                       type="email"
//                       required
//                       value={formData.email}
//                       onChange={handleInputChange}
//                       className="w-full pl-10 pr-4 py-3 border border-amber-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white/90 text-amber-900 placeholder-amber-600"
//                       placeholder="john@example.com"
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <label htmlFor="password" className="block text-sm font-medium text-amber-800 mb-2">
//                     Password
//                   </label>
//                   <div className="relative">
//                     <Lock className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-amber-600" />
//                     <input
//                       id="password"
//                       name="password"
//                       type={showPassword ? 'text' : 'password'}
//                       required
//                       value={formData.password}
//                       onChange={handleInputChange}
//                       className="w-full pl-10 pr-12 py-3 border border-amber-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white/90 text-amber-900 placeholder-amber-600"
//                       placeholder="••••••••"
//                     />
//                     <button
//                       type="button"
//                       onClick={() => setShowPassword(!showPassword)}
//                       className="absolute right-3 top-1/2 transform -translate-y-1/2 text-amber-600 hover:text-amber-800"
//                     >
//                       {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
//                     </button>
//                   </div>
//                 </div>

//                 <div className="flex items-center justify-between">
//                   <div className="flex items-center">
//                     <input
//                       id="remember-me"
//                       name="remember-me"
//                       type="checkbox"
//                       className="h-4 w-4 text-amber-600 focus:ring-amber-500 border-amber-300 rounded"
//                     />
//                     <label htmlFor="remember-me" className="ml-2 block text-sm text-amber-700">
//                       Remember me
//                     </label>
//                   </div>
//                   <div className="text-sm">
//                     <Link to="/forgot-password" className="font-medium text-amber-600 hover:text-amber-800 transition-colors">
//                       Forgot password?
//                     </Link>
//                   </div>
//                 </div>
//               </div>

//               <div className="mt-6">
//                 <button
//                   type="submit"
//                   disabled={isLoading}
//                   className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-xl text-white bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105 shadow-lg"
//                 >
//                   {isLoading ? (
//                     <div className="flex items-center space-x-2">
//                       <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
//                       <span>Signing in...</span>
//                     </div>
//                   ) : (
//                     <div className="flex items-center space-x-2">
//                       <span>Sign In</span>
//                       <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//                     </div>
//                   )}
//                 </button>
//               </div>

//               <div className="mt-6 text-center">
//                 <span className="text-amber-700">Don't have an account? </span>
//                 <Link
//                   to="/signup"
//                   className="font-medium text-amber-600 hover:text-amber-800 transition-colors"
//                 >
//                   Sign up
//                 </Link>
//               </div>
//             </div>
//           </form>

//           {/* Trust Indicators */}
//           <div className="mt-8 bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-amber-200">
//             <div className="flex items-center justify-center space-x-6 text-xs text-amber-700">
//               <div className="flex items-center space-x-1">
//                 <Shield className="w-4 h-4 text-amber-600" />
//                 <span>Secure & Safe</span>
//               </div>
//               <div className="flex items-center space-x-1">
//                 <Heart className="w-4 h-4 text-red-500" />
//                 <span>50K+ Happy Users</span>
//               </div>
//               <div className="flex items-center space-x-1">
//                 <Sparkles className="w-4 h-4 text-amber-600" />
//                 <span>Premium Experience</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Right Side - Image/Content */}
//       <div className="hidden lg:block lg:w-1/2 relative">
//         <div 
//           className="h-full bg-cover bg-center relative"
//           style={{ 
//             backgroundImage: 'url(https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=1200&fit=crop)',
//           }}
//         >
//           {/* <div className="absolute inset-0 bg-gradient-to-r from-amber-900/70 via-orange-900/50 to-transparent"></div> */}
          
//           <div className="relative h-full flex items-center justify-center p-12">
//             <div className="text-white max-w-lg">
//               <h2 className="text-4xl font-bold mb-6">Welcome Back to Your Eco Journey</h2>
//               <p className="text-xl mb-8 text-white/90">
//                 Continue exploring our premium collection of eco-friendly products that make a difference.
//               </p>
              
//               <div className="space-y-4">
//                 <div className="flex items-center space-x-3">
//                   <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
//                     <Leaf className="w-4 h-4" />
//                   </div>
//                   <span>100% Eco-Certified Products</span>
//                 </div>
//                 <div className="flex items-center space-x-3">
//                   <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
//                     <Shield className="w-4 h-4" />
//                   </div>
//                   <span>Premium Quality Guarantee</span>
//                 </div>
//                 <div className="flex items-center space-x-3">
//                   <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
//                     <Heart className="w-4 h-4" />
//                   </div>
//                   <span>Loved by 50,000+ Pet Parents</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default LoginPage;


import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { 
  Mail, 
  Lock, 
  Eye, 
  EyeOff, 
  ArrowRight, 
  Leaf, 
  Shield, 
  Heart, 
  Sparkles 
} from 'lucide-react';
import { setUser } from '../../redux/slices/userSlice'; // Adjust import path

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  


  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    
    
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Set local loading state
    setIsLoading(true);
   

    try {
      const response = await fetch('https://aveo-8pm2.onrender.com/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user_email: formData.email,
          user_password: formData.password
        })
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || 'Login failed. Please check your credentials.');
      }

      const data = await response.json();
      console.log('Login successful:', data);

     navigate('/');

      // Dispatch user data to Redux store
      dispatch(setUser(data.user));

      // Small delay to show success state
      

    } catch (error) {
      console.error('Login error:', error);
      
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex" style={{ backgroundColor: '#f9e8dc' }}>
      {/* Loading Overlay */}
      {isLoading && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl p-8 shadow-2xl border border-amber-200 text-center max-w-sm mx-4">
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-amber-200 border-t-amber-600 mx-auto mb-4"></div>
            <h3 className="text-lg font-semibold text-amber-900 mb-2">Signing you in...</h3>
            <p className="text-amber-700 text-sm">Please wait while we verify your credentials</p>
          </div>
        </div>
      )}

      {/* Left Side - Form */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          {/* Logo */}
          <div className="text-center">
            <Link to="/" className="inline-flex items-center space-x-2 mb-8">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-lg border border-amber-200">
                <Leaf className="w-7 h-7 text-amber-600" />
              </div>
              <div className="text-left">
                <h1 className="text-2xl font-bold text-amber-900">AveoStore</h1>
                <p className="text-xs text-amber-700 -mt-1 tracking-wide">ECO PREMIUM</p>
              </div>
            </Link>
          </div>

          {/* Form Header */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-amber-900">Welcome Back!</h2>
            <p className="mt-2 text-amber-700">
              Sign in to your account and continue your eco-journey
            </p>
          </div>

          {/* Form */}
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-amber-200">
              
              {/* Error Message */}
              {/* {authError && (
                <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-xl">
                  <div className="flex items-center space-x-2">
                    <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">!</span>
                    </div>
                    <p className="text-red-700 text-sm font-medium">{authError}</p>
                  </div>
                </div>
              )} */}

              <div className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-amber-800 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-amber-600" />
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      disabled={isLoading}
                      className="w-full pl-10 pr-4 py-3 border border-amber-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white/90 text-amber-900 placeholder-amber-600 disabled:opacity-50 disabled:cursor-not-allowed"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-amber-800 mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-amber-600" />
                    <input
                      id="password"
                      name="password"
                      type={showPassword ? 'text' : 'password'}
                      required
                      value={formData.password}
                      onChange={handleInputChange}
                      disabled={isLoading}
                      className="w-full pl-10 pr-12 py-3 border border-amber-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white/90 text-amber-900 placeholder-amber-600 disabled:opacity-50 disabled:cursor-not-allowed"
                      placeholder="••••••••"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      disabled={isLoading}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-amber-600 hover:text-amber-800 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      disabled={isLoading}
                      className="h-4 w-4 text-amber-600 focus:ring-amber-500 border-amber-300 rounded disabled:opacity-50"
                    />
                    <label htmlFor="remember-me" className="ml-2 block text-sm text-amber-700">
                      Remember me
                    </label>
                  </div>
                  <div className="text-sm">
                    <Link 
                      to="/forgot-password" 
                      className={`font-medium text-amber-600 hover:text-amber-800 transition-colors ${isLoading ? 'pointer-events-none opacity-50' : ''}`}
                    >
                      Forgot password?
                    </Link>
                  </div>
                </div>
              </div>

             <div className="mt-6">
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-xl text-white transition-all duration-300 shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 ${
                    isLoading 
                      ? 'bg-amber-400 cursor-not-allowed' 
                      : 'bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 transform hover:scale-105'
                  }`}
                >
                  {isLoading ? (
                    <div className="flex items-center space-x-3">
                      {/* Enhanced spinner */}
                      <div className="relative">
                        <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                        <div className="absolute inset-0 animate-ping rounded-full h-5 w-5 border border-white opacity-20"></div>
                      </div>
                      <span className="font-medium">Signing in...</span>
                      {/* Animated dots */}
                      <div className="flex space-x-1">
                        <div className="w-1 h-1 bg-white rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                        <div className="w-1 h-1 bg-white rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                        <div className="w-1 h-1 bg-white rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-2">
                      <span className="font-medium">Sign In</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  )}
                </button>
              </div>

              <div className="mt-6 text-center">
                <span className="text-amber-700">Don't have an account? </span>
                <Link
                  to="/signup"
                  className={`font-medium text-amber-600 hover:text-amber-800 transition-colors ${isLoading ? 'pointer-events-none opacity-50' : ''}`}
                >
                  Sign up
                </Link>
              </div>
            </div>
          </form>

          {/* Trust Indicators */}
          <div className="mt-8 bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-amber-200">
            <div className="flex items-center justify-center space-x-6 text-xs text-amber-700">
              <div className="flex items-center space-x-1">
                <Shield className="w-4 h-4 text-amber-600" />
                <span>Secure & Safe</span>
              </div>
              <div className="flex items-center space-x-1">
                <Heart className="w-4 h-4 text-red-500" />
                <span>50K+ Happy Users</span>
              </div>
              <div className="flex items-center space-x-1">
                <Sparkles className="w-4 h-4 text-amber-600" />
                <span>Premium Experience</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Image/Content */}
      <div className="hidden lg:block lg:w-1/2 relative">
        <div 
          className="h-full bg-cover bg-center relative"
          style={{ 
            backgroundImage: 'url(https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=1200&fit=crop)',
          }}
        >
          <div className="relative h-full flex items-center justify-center p-12">
            <div className="text-white max-w-lg">
              <h2 className="text-4xl font-bold mb-6">Welcome Back to Your Eco Journey</h2>
              <p className="text-xl mb-8 text-white/90">
                Continue exploring our premium collection of eco-friendly products that make a difference.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <Leaf className="w-4 h-4" />
                  </div>
                  <span>100% Eco-Certified Products</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <Shield className="w-4 h-4" />
                  </div>
                  <span>Premium Quality Guarantee</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <Heart className="w-4 h-4" />
                  </div>
                  <span>Loved by 50,000+ Pet Parents</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;