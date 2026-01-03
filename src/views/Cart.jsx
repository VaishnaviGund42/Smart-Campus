import React, { useEffect } from 'react'
import {useState} from 'react'
import CartStationaryItem from '../components/CartStationaryItem';


function Cart() {
  const [cartItems,setCartItems]=useState([]);
  const [totalAmount,setTotalAmount]=useState(0);

  useEffect(()=>{
    const existingCart =
    JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(existingCart);
  },[])

  useEffect(()=>{
    let total=0;

    cartItems.map((item)=>{
      total+=item.price*item.quantity;
    })
    setTotalAmount(total)
  },[cartItems])

  return (
    <div className='bg-green-200 min-h-screen '>
     
      <h3 className='text-center font-bold text-2xl  bg-green-300 p-4'>
        Total Amount: ₹ {totalAmount}
      </h3>


    <div className='min-h-screen flex flex-row flex-wrap gap-4 justify-center bg-green-200 p-4 '>
      <div className='max-h-[400px ] bg-green-300 '>
      {
        cartItems.map((item)=>{
            console.log(item);
          return(<CartStationaryItem key={item.id} description={item.description} {...item} >
            
          </CartStationaryItem>) 
        })
      }
      </div>

    </div>
    </div>
  )
}

export default Cart