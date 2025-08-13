import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearCart } from '../redux/slices/cartSlice';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import { 
  ArrowLeft, 
  CreditCard, 
  Lock, 
  MapPin, 
  Mail, 
  Phone, 
  User,
  Package,
  Truck,
  CheckCircle,
  AlertCircle,
  Gift,
  Calendar,
  DollarSign
} from 'lucide-react';
import toast from 'react-hot-toast';

const CheckoutPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { items, totalAmount, shipping, tax, discount, finalTotal, totalQuantity } = useSelector(state => state.cart);
  
  const [currentStep, setCurrentStep] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderNotes, setOrderNotes] = useState('');
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('card');
  const [selectedShippingMethod, setSelectedShippingMethod] = useState('standard');
  
  const [formData, setFormData] = useState({
    // Shipping Information
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    apartment: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'UAE',
    
    // Payment Information
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardName: '',
    
    // Billing Address
    sameAsShipping: true,
    billingFirstName: '',
    billingLastName: '',
    billingAddress: '',
    billingCity: '',
    billingState: '',
    billingZipCode: '',
    billingCountry: 'UAE'
  });

  const [errors, setErrors] = useState({});

  const shippingMethods = [
    {
      id: 'standard',
      name: 'Standard Shipping',
      description: '5-7 business days',
      price: 0,
      icon: <Package className="w-5 h-5" />
    },
    {
      id: 'express',
      name: 'Express Shipping',
      description: '2-3 business days',
      price: 15.99,
      icon: <Truck className="w-5 h-5" />
    },
    {
      id: 'overnight',
      name: 'Overnight Delivery',
      description: 'Next business day',
      price: 29.99,
      icon: <Calendar className="w-5 h-5" />
    }
  ];

  const paymentMethods = [
    {
      id: 'card',
      name: 'Credit/Debit Card',
      description: 'Visa, Mastercard, American Express',
      icon: <CreditCard className="w-5 h-5" />
    },
    {
      id: 'paypal',
      name: 'PayPal',
      description: 'Pay with your PayPal account',
      icon: <DollarSign className="w-5 h-5" />
    }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
  };

  const validateCardNumber = (cardNumber) => {
    const cleanCard = cardNumber.replace(/\s/g, '');
    return cleanCard.length >= 13 && cleanCard.length <= 19;
  };

  const validateExpiryDate = (expiryDate) => {
    const regex = /^(0[1-9]|1[0-2])\/([0-9]{2})$/;
    if (!regex.test(expiryDate)) return false;
    
    const [month, year] = expiryDate.split('/');
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear() % 100;
    const currentMonth = currentDate.getMonth() + 1;
    
    const expYear = parseInt(year);
    const expMonth = parseInt(month);
    
    if (expYear < currentYear || (expYear === currentYear && expMonth < currentMonth)) {
      return false;
    }
    
    return true;
  };

  const validateStep = (step) => {
    const newErrors = {};
    
    if (step === 1) {
      // Validate shipping information
      if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
      if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
      if (!formData.email.trim()) {
        newErrors.email = 'Email is required';
      } else if (!validateEmail(formData.email)) {
        newErrors.email = 'Please enter a valid email address';
      }
      if (!formData.phone.trim()) {
        newErrors.phone = 'Phone number is required';
      } else if (!validatePhone(formData.phone)) {
        newErrors.phone = 'Please enter a valid phone number';
      }
      if (!formData.address.trim()) newErrors.address = 'Address is required';
      if (!formData.city.trim()) newErrors.city = 'City is required';
      if (!formData.zipCode.trim()) newErrors.zipCode = 'ZIP code is required';
      if (!formData.state.trim()) newErrors.state = 'State/Province is required';
    }
    
    if (step === 2 && selectedPaymentMethod === 'card') {
      // Validate payment information
      if (!formData.cardNumber.trim()) {
        newErrors.cardNumber = 'Card number is required';
      } else if (!validateCardNumber(formData.cardNumber)) {
        newErrors.cardNumber = 'Please enter a valid card number';
      }
      
      if (!formData.expiryDate.trim()) {
        newErrors.expiryDate = 'Expiry date is required';
      } else if (!validateExpiryDate(formData.expiryDate)) {
        newErrors.expiryDate = 'Please enter a valid expiry date (MM/YY)';
      }
      
      if (!formData.cvv.trim()) {
        newErrors.cvv = 'CVV is required';
      } else if (formData.cvv.length < 3 || formData.cvv.length > 4) {
        newErrors.cvv = 'CVV must be 3 or 4 digits';
      }
      
      if (!formData.cardName.trim()) newErrors.cardName = 'Cardholder name is required';
      
      // Validate billing address if different from shipping
      if (!formData.sameAsShipping) {
        if (!formData.billingFirstName.trim()) newErrors.billingFirstName = 'Billing first name is required';
        if (!formData.billingLastName.trim()) newErrors.billingLastName = 'Billing last name is required';
        if (!formData.billingAddress.trim()) newErrors.billingAddress = 'Billing address is required';
        if (!formData.billingCity.trim()) newErrors.billingCity = 'Billing city is required';
        if (!formData.billingZipCode.trim()) newErrors.billingZipCode = 'Billing ZIP code is required';
      }
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handlePreviousStep = () => {
    setCurrentStep(prev => prev - 1);
  };

  const formatCardNumber = (value) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = matches && matches[0] || '';
    const parts = [];

    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }

    if (parts.length) {
      return parts.join(' ');
    } else {
      return v;
    }
  };

  const formatExpiryDate = (value) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    if (v.length >= 2) {
      return v.substring(0, 2) + '/' + v.substring(2, 4);
    }
    return v;
  };

  const calculateShippingCost = () => {
    if (totalAmount >= 50) return 0; // Free shipping over $50
    const selectedMethod = shippingMethods.find(method => method.id === selectedShippingMethod);
    return selectedMethod ? selectedMethod.price : 0;
  };

  const calculateFinalTotal = () => {
    const shippingCost = calculateShippingCost();
    return totalAmount + shippingCost + tax - discount;
  };

  const handlePlaceOrder = async () => {
    if (!validateStep(2)) return;
    
    setIsProcessing(true);
    
    try {
      // Simulate payment processing
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      // Create order object
      const orderData = {
        orderId: `AV-${Date.now()}`,
        items,
        customer: {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone
        },
        shippingAddress: {
          firstName: formData.firstName,
          lastName: formData.lastName,
          address: formData.address,
          apartment: formData.apartment,
          city: formData.city,
          state: formData.state,
          zipCode: formData.zipCode,
          country: formData.country
        },
        billingAddress: formData.sameAsShipping ? null : {
          firstName: formData.billingFirstName,
          lastName: formData.billingLastName,
          address: formData.billingAddress,
          city: formData.billingCity,
          state: formData.billingState,
          zipCode: formData.billingZipCode,
          country: formData.billingCountry
        },
        paymentMethod: selectedPaymentMethod,
        shippingMethod: selectedShippingMethod,
        orderNotes,
        pricing: {
          subtotal: totalAmount,
          shipping: calculateShippingCost(),
          tax,
          discount,
          total: calculateFinalTotal()
        },
        createdAt: new Date().toISOString()
      };
      
      // Store order data temporarily (in real app, this would be sent to backend)
      sessionStorage.setItem('lastOrder', JSON.stringify(orderData));
      
      // Clear cart and redirect to success
      dispatch(clearCart());
      toast.success('Order placed successfully!');
      navigate('/order-success');
      
    } catch (error) {
      toast.error('Payment failed. Please try again.');
      console.error('Order placement error:', error);
    } finally {
      setIsProcessing(false);
    }
  };

  if (items.length === 0) {
    navigate('/cart');
    return null;
  }

  const steps = [
    { number: 1, title: 'Shipping', icon: <MapPin className="w-5 h-5" /> },
    { number: 2, title: 'Payment', icon: <CreditCard className="w-5 h-5" /> },
    { number: 3, title: 'Review', icon: <CheckCircle className="w-5 h-5" /> }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-900">Checkout</h1>
            <p className="text-gray-600 mt-2">Complete your order securely</p>
          </div>
          
          <Button
            onClick={() => navigate('/cart')}
            variant="ghost"
            icon={<ArrowLeft className="w-5 h-5" />}
          >
            Back to Cart
          </Button>
        </div>

        {/* Progress Steps */}
        <div className="flex items-center justify-center mb-12">
          {steps.map((step, index) => (
            <div key={step.number} className="flex items-center">
              <div className={`
                flex items-center justify-center w-12 h-12 rounded-full border-2 transition-colors
                ${currentStep >= step.number 
                  ? 'bg-green-600 border-green-600 text-white' 
                  : 'bg-white border-gray-300 text-gray-400'
                }
              `}>
                {step.icon}
              </div>
              <div className="ml-3">
                <div className={`text-sm font-medium ${
                  currentStep >= step.number ? 'text-green-600' : 'text-gray-400'
                }`}>
                  Step {step.number}
                </div>
                <div className={`text-xs ${
                  currentStep >= step.number ? 'text-gray-900' : 'text-gray-400'
                }`}>
                  {step.title}
                </div>
              </div>
              
              {index < steps.length - 1 && (
                <div className={`w-16 h-0.5 mx-6 ${
                  currentStep > step.number ? 'bg-green-600' : 'bg-gray-300'
                }`} />
              )}
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* STEP 1: SHIPPING INFORMATION */}
            {currentStep === 1 && (
              <div className="space-y-8">
                {/* Contact Information */}
                <div className="bg-white rounded-xl shadow-lg p-8">
                  <h2 className="text-2xl font-bold mb-6 flex items-center">
                    <User className="w-6 h-6 text-green-600 mr-3" />
                    Contact Information
                  </h2>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <Input
                      label="First Name *"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      error={errors.firstName}
                      placeholder="John"
                    />
                    
                    <Input
                      label="Last Name *"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      error={errors.lastName}
                      placeholder="Doe"
                    />
                    
                    <Input
                      label="Email Address *"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      error={errors.email}
                      placeholder="john.doe@example.com"
                      icon={<Mail className="w-4 h-4 text-gray-400" />}
                    />
                    
                    <Input
                      label="Phone Number *"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      error={errors.phone}
                      placeholder="+971 50 123 4567"
                      icon={<Phone className="w-4 h-4 text-gray-400" />}
                    />
                  </div>
                </div>

                {/* Shipping Address */}
                <div className="bg-white rounded-xl shadow-lg p-8">
                  <h2 className="text-2xl font-bold mb-6 flex items-center">
                    <MapPin className="w-6 h-6 text-green-600 mr-3" />
                    Shipping Address
                  </h2>
                  
                  <div className="space-y-6">
                    <Input
                      label="Street Address *"
                      value={formData.address}
                      onChange={(e) => handleInputChange('address', e.target.value)}
                      error={errors.address}
                      placeholder="123 Main Street"
                    />
                    
                    <Input
                      label="Apartment, suite, etc. (optional)"
                      value={formData.apartment}
                      onChange={(e) => handleInputChange('apartment', e.target.value)}
                      placeholder="Apt 4B"
                    />
                    
                    <div className="grid md:grid-cols-3 gap-6">
                      <Input
                        label="City *"
                        value={formData.city}
                        onChange={(e) => handleInputChange('city', e.target.value)}
                        error={errors.city}
                        placeholder="Dubai"
                      />
                      
                      <Input
                        label="State/Province *"
                        value={formData.state}
                        onChange={(e) => handleInputChange('state', e.target.value)}
                        error={errors.state}
                        placeholder="Dubai"
                      />
                      
                      <Input
                        label="ZIP/Postal Code *"
                        value={formData.zipCode}
                        onChange={(e) => handleInputChange('zipCode', e.target.value)}
                        error={errors.zipCode}
                        placeholder="12345"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Country *
                      </label>
                      <select
                        value={formData.country}
                        onChange={(e) => handleInputChange('country', e.target.value)}
                        className="block w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      >
                        <option value="UAE">United Arab Emirates</option>
                        <option value="India">India</option>
                        <option value="Singapore">Singapore</option>
                        <option value="Malaysia">Malaysia</option>
                        <option value="Thailand">Thailand</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Shipping Method */}
                <div className="bg-white rounded-xl shadow-lg p-8">
                  <h2 className="text-2xl font-bold mb-6 flex items-center">
                    <Truck className="w-6 h-6 text-green-600 mr-3" />
                    Shipping Method
                  </h2>
                  
                  <div className="space-y-4">
                    {shippingMethods.map((method) => (
                      <label key={method.id} className={`
                        flex items-center justify-between p-4 border-2 rounded-lg cursor-pointer transition-colors
                        ${selectedShippingMethod === method.id ? 'border-green-500 bg-green-50' : 'border-gray-200 hover:border-gray-300'}
                      `}>
                        <div className="flex items-center space-x-3">
                          <input
                            type="radio"
                            name="shippingMethod"
                            value={method.id}
                            checked={selectedShippingMethod === method.id}
                            onChange={(e) => setSelectedShippingMethod(e.target.value)}
                            className="text-green-600 focus:ring-green-500"
                          />
                          <div className="flex items-center space-x-3">
                            {method.icon}
                            <div>
                              <div className="font-medium">{method.name}</div>
                              <div className="text-sm text-gray-600">{method.description}</div>
                            </div>
                          </div>
                        </div>
                        <div className="font-semibold">
                          {method.price === 0 ? 'FREE' : `$${method.price.toFixed(2)}`}
                        </div>
                      </label>
                    ))}
                  </div>
                  
                  {totalAmount < 50 && (
                    <div className="mt-4 p-3 bg-yellow-50 rounded-lg flex items-center space-x-2">
                      <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0" />
                      <span className="text-sm text-yellow-800">
                        Add ${(50 - totalAmount).toFixed(2)} more to qualify for free standard shipping!
                      </span>
                    </div>
                  )}
                </div>
                
                <div className="flex justify-end">
                  <Button onClick={handleNextStep} variant="primary" size="lg">
                    Continue to Payment
                  </Button>
                </div>
              </div>
            )}

            {/* STEP 2: PAYMENT INFORMATION */}
            {currentStep === 2 && (
              <div className="space-y-8">
                {/* Payment Method Selection */}
                <div className="bg-white rounded-xl shadow-lg p-8">
                  <h2 className="text-2xl font-bold mb-6 flex items-center">
                    <CreditCard className="w-6 h-6 text-green-600 mr-3" />
                    Payment Method
                  </h2>
                  
                  <div className="space-y-4 mb-6">
                    {paymentMethods.map((method) => (
                      <label key={method.id} className={`
                        flex items-center justify-between p-4 border-2 rounded-lg cursor-pointer transition-colors
                        ${selectedPaymentMethod === method.id ? 'border-green-500 bg-green-50' : 'border-gray-200 hover:border-gray-300'}
                      `}>
                        <div className="flex items-center space-x-3">
                          <input
                            type="radio"
                            name="paymentMethod"
                            value={method.id}
                            checked={selectedPaymentMethod === method.id}
                            onChange={(e) => setSelectedPaymentMethod(e.target.value)}
                            className="text-green-600 focus:ring-green-500"
                          />
                          <div className="flex items-center space-x-3">
                            {method.icon}
                            <div>
                              <div className="font-medium">{method.name}</div>
                              <div className="text-sm text-gray-600">{method.description}</div>
                            </div>
                          </div>
                        </div>
                      </label>
                    ))}
                  </div>

                  {selectedPaymentMethod === 'card' && (
                    <>
                      <div className="bg-blue-50 rounded-lg p-4 mb-6 flex items-center">
                        <Lock className="w-5 h-5 text-blue-600 mr-2" />
                        <span className="text-sm text-blue-800">
                          Your payment information is secure and encrypted with SSL
                        </span>
                      </div>
                      
                      <div className="space-y-6">
                        <Input
                          label="Card Number *"
                          value={formData.cardNumber}
                          onChange={(e) => handleInputChange('cardNumber', formatCardNumber(e.target.value))}
                          error={errors.cardNumber}
                          placeholder="1234 5678 9012 3456"
                          maxLength="19"
                        />
                        
                        <Input
                          label="Cardholder Name *"
                          value={formData.cardName}
                          onChange={(e) => handleInputChange('cardName', e.target.value)}
                          error={errors.cardName}
                          placeholder="John Doe"
                        />
                        
                        <div className="grid grid-cols-2 gap-6">
                          <Input
                            label="Expiry Date *"
                            value={formData.expiryDate}
                            onChange={(e) => handleInputChange('expiryDate', formatExpiryDate(e.target.value))}
                            error={errors.expiryDate}
                            placeholder="MM/YY"
                            maxLength="5"
                          />
                          
                          <Input
                            label="CVV *"
                            value={formData.cvv}
                            onChange={(e) => handleInputChange('cvv', e.target.value.replace(/\D/g, ''))}
                            error={errors.cvv}
                            placeholder="123"
                            maxLength="4"
                          />
                        </div>
                      </div>
                    </>
                  )}

                  {selectedPaymentMethod === 'paypal' && (
                    <div className="bg-blue-50 rounded-lg p-6 text-center">
                      <div className="text-blue-800 mb-2">You will be redirected to PayPal to complete your payment</div>
                      <div className="text-sm text-blue-600">Click "Continue to Review" to proceed</div>
                    </div>
                  )}
                </div>

                {/* Billing Address */}
                {selectedPaymentMethod === 'card' && (
                  <div className="bg-white rounded-xl shadow-lg p-8">
                    <h2 className="text-2xl font-bold mb-6">Billing Address</h2>
                    
                    <div className="mb-6">
                      <label className="flex items-center space-x-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.sameAsShipping}
                          onChange={(e) => handleInputChange('sameAsShipping', e.target.checked)}
                          className="text-green-600 focus:ring-green-500 rounded"
                        />
                        <span className="text-gray-700">Same as shipping address</span>
                      </label>
                    </div>

                    {!formData.sameAsShipping && (
                      <div className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                          <Input
                            label="First Name *"
                            value={formData.billingFirstName}
                            onChange={(e) => handleInputChange('billingFirstName', e.target.value)}
                            error={errors.billingFirstName}
                          />
                          
                          <Input
                            label="Last Name *"
                            value={formData.billingLastName}
                            onChange={(e) => handleInputChange('billingLastName', e.target.value)}
                            error={errors.billingLastName}
                          />
                        </div>
                        
                        <Input
                          label="Street Address *"
                          value={formData.billingAddress}
                          onChange={(e) => handleInputChange('billingAddress', e.target.value)}
                          error={errors.billingAddress}
                        />
                        
                        <div className="grid md:grid-cols-3 gap-6">
                          <Input
                            label="City *"
                            value={formData.billingCity}
                            onChange={(e) => handleInputChange('billingCity', e.target.value)}
                            error={errors.billingCity}
                          />
                          
                          <Input
                            label="State/Province *"
                            value={formData.billingState}
                            onChange={(e) => handleInputChange('billingState', e.target.value)}
                            error={errors.billingState}
                          />
                          
                          <Input
                            label="ZIP Code *"
                            value={formData.billingZipCode}
                            onChange={(e) => handleInputChange('billingZipCode', e.target.value)}
                            error={errors.billingZipCode}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                )}
                
                <div className="flex justify-between">
                  <Button onClick={handlePreviousStep} variant="outline">
                    Back to Shipping
                  </Button>
                  <Button onClick={handleNextStep} variant="primary" size="lg">
                    Review Order
                  </Button>
                </div>
              </div>
            )}

            {/* STEP 3: ORDER REVIEW */}
            {currentStep === 3 && (
              <div className="space-y-8">
                {/* Order Summary */}
                <div className="bg-white rounded-xl shadow-lg p-8">
                  <h2 className="text-2xl font-bold mb-6 flex items-center">
                    <CheckCircle className="w-6 h-6 text-green-600 mr-3" />
                    Review Your Order
                  </h2>
                  
                  {/* Customer Information */}
                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h3 className="font-semibold mb-3 flex items-center">
                        <CreditCard className="w-4 h-4 mr-2" />
                        Payment & Billing
                      </h3>
                      <div className="text-sm text-gray-600 space-y-1">
                        {selectedPaymentMethod === 'card' ? (
                          <>
                            <p>**** **** **** {formData.cardNumber.slice(-4)}</p>
                            <p>{formData.cardName}</p>
                            <p>Expires {formData.expiryDate}</p>
                          </>
                        ) : (
                          <p>PayPal</p>
                        )}
                        <div className="pt-2 border-t border-gray-200 mt-2">
                          <p className="font-medium">Billing Address:</p>
                          {formData.sameAsShipping ? (
                            <p>Same as shipping address</p>
                          ) : (
                            <>
                              <p>{formData.billingFirstName} {formData.billingLastName}</p>
                              <p>{formData.billingAddress}</p>
                              <p>{formData.billingCity}, {formData.billingState} {formData.billingZipCode}</p>
                              <p>{formData.billingCountry}</p>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Shipping Method */}
                  <div className="mb-8 p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-semibold mb-2 flex items-center">
                      <Truck className="w-4 h-4 mr-2" />
                      Shipping Method
                    </h3>
                    <div className="text-sm text-gray-600">
                      {shippingMethods.find(method => method.id === selectedShippingMethod)?.name} - 
                      {shippingMethods.find(method => method.id === selectedShippingMethod)?.description}
                      <span className="ml-2 font-medium">
                        {calculateShippingCost() === 0 ? 'FREE' : `${calculateShippingCost().toFixed(2)}`}
                      </span>
                    </div>
                  </div>

                  {/* Order Items */}
                  <div className="mb-8">
                    <h3 className="font-semibold mb-4 flex items-center">
                      <Package className="w-4 h-4 mr-2" />
                      Order Items ({totalQuantity} {totalQuantity === 1 ? 'item' : 'items'})
                    </h3>
                    <div className="space-y-4">
                      {items.map(item => (
                        <div key={item.id} className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-20 h-20 object-cover rounded-lg"
                          />
                          <div className="flex-1">
                            <h4 className="font-medium text-lg">{item.name}</h4>
                            <p className="text-sm text-gray-600 mb-1">{item.description}</p>
                            <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                            <p className="text-sm font-medium text-green-600">${item.price} each</p>
                          </div>
                          <div className="text-right">
                            <p className="text-xl font-bold text-gray-900">${item.totalPrice.toFixed(2)}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Order Notes */}
                  <div className="mb-8">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Order Notes (Optional)
                    </label>
                    <textarea
                      value={orderNotes}
                      onChange={(e) => setOrderNotes(e.target.value)}
                      placeholder="Special instructions for your order..."
                      rows="3"
                      className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
                    />
                  </div>

                  {/* Terms and Conditions */}
                  <div className="mb-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <div className="flex items-start space-x-3">
                      <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                      <div className="text-sm text-yellow-800">
                        <p className="font-medium mb-1">Please review before placing your order:</p>
                        <ul className="space-y-1 text-xs">
                          <li>• By placing this order, you agree to our Terms of Service and Privacy Policy</li>
                          <li>• All sales are final for digital products</li>
                          <li>• Physical products can be returned within 30 days</li>
                          <li>• You will receive an order confirmation email shortly after purchase</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-between">
                  <Button onClick={handlePreviousStep} variant="outline">
                    Back to Payment
                  </Button>
                  <Button 
                    onClick={handlePlaceOrder} 
                    variant="primary" 
                    size="lg"
                    loading={isProcessing}
                    disabled={isProcessing}
                    className="min-w-[200px]"
                  >
                    {isProcessing ? 'Processing Payment...' : `Place Order - ${calculateFinalTotal().toFixed(2)}`}
                  </Button>
                </div>
              </div>
            )}
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-8">
              <h3 className="text-xl font-bold mb-6">Order Summary</h3>
              
              {/* Items Summary */}
              <div className="space-y-3 mb-6">
                {items.slice(0, 3).map(item => (
                  <div key={item.id} className="flex justify-between text-sm">
                    <span className="truncate pr-2">{item.name} (x{item.quantity})</span>
                    <span className="font-medium">${item.totalPrice.toFixed(2)}</span>
                  </div>
                ))}
                {items.length > 3 && (
                  <div className="text-sm text-gray-500">
                    +{items.length - 3} more {items.length - 3 === 1 ? 'item' : 'items'}
                  </div>
                )}
              </div>
              
              {/* Pricing Breakdown */}
              <div className="border-t border-gray-200 pt-4 space-y-3">
                <div className="flex justify-between text-base">
                  <span>Subtotal ({totalQuantity} {totalQuantity === 1 ? 'item' : 'items'})</span>
                  <span>${totalAmount.toFixed(2)}</span>
                </div>
                
                <div className="flex justify-between text-base">
                  <span>Shipping</span>
                  <span className={calculateShippingCost() === 0 ? 'text-green-600 font-medium' : ''}>
                    {calculateShippingCost() === 0 ? 'FREE' : `${calculateShippingCost().toFixed(2)}`}
                  </span>
                </div>
                
                <div className="flex justify-between text-base">
                  <span>Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                
                {discount > 0 && (
                  <div className="flex justify-between text-base text-green-600">
                    <span>Discount</span>
                    <span>-${discount.toFixed(2)}</span>
                  </div>
                )}
                
                <div className="border-t border-gray-200 pt-3">
                  <div className="flex justify-between text-xl font-bold">
                    <span>Total</span>
                    <span>${calculateFinalTotal().toFixed(2)}</span>
                  </div>
                </div>
              </div>

              {/* Free Shipping Progress */}
              {totalAmount < 50 && (
                <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span className="text-yellow-800">Free shipping progress</span>
                    <span className="font-medium text-yellow-800">${totalAmount.toFixed(2)} / $50.00</span>
                  </div>
                  <div className="w-full bg-yellow-200 rounded-full h-2">
                    <div 
                      className="bg-yellow-600 h-2 rounded-full transition-all duration-300" 
                      style={{ width: `${Math.min((totalAmount / 50) * 100, 100)}%` }}
                    ></div>
                  </div>
                  <p className="text-xs text-yellow-700 mt-2">
                    Add ${(50 - totalAmount).toFixed(2)} more for free shipping!
                  </p>
                </div>
              )}

              {/* Trust Signals */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="space-y-3 text-sm text-gray-600">
                  <div className="flex items-center space-x-2">
                    <Lock className="w-4 h-4 text-green-600" />
                    <span>Secure SSL encryption</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Truck className="w-4 h-4 text-green-600" />
                    <span>Fast & reliable shipping</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Package className="w-4 h-4 text-green-600" />
                    <span>30-day return policy</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>24/7 customer support</span>
                  </div>
                </div>
              </div>

              {/* Contact Support */}
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <h4 className="font-medium text-blue-900 mb-2">Need Help?</h4>
                <p className="text-sm text-blue-800 mb-2">
                  Our customer service team is here to help with any questions.
                </p>
                <Button variant="outline" size="sm" className="w-full text-blue-600 border-blue-300 hover:bg-blue-100">
                  Contact Support
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;