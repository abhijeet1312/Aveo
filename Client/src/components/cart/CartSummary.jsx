
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const CartSummary = () => {
  const { totalAmount, shipping, tax, discount, finalTotal } = useSelector(state => state.cart);

  console.log(totalAmount, shipping, tax, discount, finalTotal);

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h3 className="text-xl font-bold mb-6">Order Summary</h3>
      
      <div className="space-y-3">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>${totalAmount}</span>
        </div>
        
        <div className="flex justify-between">
          <span>Shipping</span>
          <span className={shipping === 0 ? 'text-green-600' : ''}>
            {shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span>Tax</span>
          <span>${tax.toFixed(2)}</span>
        </div>
        
        {discount > 0 && (
          <div className="flex justify-between text-green-600">
            <span>Discount</span>
            <span>-${discount.toFixed(2)}</span>
          </div>
        )}
        
        <hr className="my-4" />
        
        <div className="flex justify-between text-xl font-bold">
          <span>Total</span>
          <span>${finalTotal.toFixed(2)}</span>
        </div>
      </div>

      {totalAmount < 50 && (
        <div className="mt-4 p-3 bg-yellow-50 rounded-lg">
          <p className="text-sm text-yellow-800">
            Add ${(50 - totalAmount).toFixed(2)} more for free shipping!
          </p>
        </div>
      )}

      <Link to={"/checkout"}><button className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-4 rounded-xl font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300 mt-6">
        Proceed to Checkout
      </button></Link>
       {/* <Link to={"/checkout"} className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-4 rounded-xl font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300 mt-6">
        Proceed to Checkout
     </Link> */}
    </div>
  );
};

export default CartSummary;