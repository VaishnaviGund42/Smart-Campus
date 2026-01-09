import React, { useEffect, useMemo, useState } from 'react';
import CartStationaryItem from '../components/CartStationaryItem';
import Btn from '../components/Button.jsx';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

function Cart() {
  const [cartItems, setCartItems] = useState([]);

 
  useEffect(() => {
    const existingCart =
      JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(existingCart);
  }, []);

  
  const totalAmount = useMemo(() => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity, 0
    );
  }, [cartItems]);

  return (
    <div className="bg-[#F8FAFF] min-h-screen flex flex-col">
      <Navbar />

      <h3 className="text-center font-bold text-2xl bg-gray-100 p-4">
        Total Amount: ₹ {totalAmount}
      </h3>

      <div className="flex-1 flex flex-wrap gap-4 justify-center p-4">
        <div className="max-h-[400px] overflow-y-auto rounded-lg p-4 w-full max-w-4xl bg-white">
          {cartItems.map((item) => (
            <CartStationaryItem key={item.id} {...item} />
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center mb-6">
        <Btn
          title="Proceed to Pay"
          variant="primary"
          size="large"
          onClick={() => {
            window.location.href = "https://www.phonepe.com/";
          }}
        />
      </div>

      <Footer />
    </div>
  );
}

export default Cart;
