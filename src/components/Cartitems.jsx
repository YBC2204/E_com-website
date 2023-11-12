/* eslint-disable react/jsx-key */
import React, { useContext } from 'react'
import all_product from './assets/all_product'
import { ShopContext } from './Context/ShopContext'
import remove from '../components/assets/cart_cross_icon.png'

 const Cartitems = () => {

    const {allprod,cartItem,addtoCart,removefromCart,totalcart} = useContext(ShopContext)
    console.log(cartItem)
    const divstyl ="grid grid-cols-6 gap-20  py-5 text-[#454545] text-lg font-semibold"
  return (
    <div className='my-24 mx-40'>
        <div className={divstyl}>
            <p>PRODUCTS</p>
            <p>TITLE</p>
            <p>PRIZE</p>
            <p>QUANTITY</p>
            <p>TOTAL</p>
            <p>REMOVE</p>
        </div>
        <hr className='h-1 bg-[#e2e2e2] '/>
       {allprod.map((e)=>{
        if(cartItem[e.id]>0)
        {
          return <div >
           <div className="grid grid-cols-6 items-center gap-20 py-5 text-[#454545] text-lg font-semibold">
             <img src={e.image} className='h-36'/>
             <p >{e.name}</p>
              <p>${e.new_price}</p>
             <button className='w-20 h-12 border border-slate-400 bg-gray-300' onClick={()=>{addtoCart(e.id)}}>{cartItem[e.id]}</button>
               <p>${e.new_price*cartItem[e.id]}</p>
               <img src={remove} onClick={()=>{removefromCart(e.id)}} className=' cursor-pointer my-0 mx-8'/>
            </div>
              <hr className='h-1 bg-[#e2e2e2] '/>
            </div>
        }
        return null;
       })}
       <div className='flex my-24'>
        <div className='flex-1 flex flex-col mr-48 gap-10'>
          <h1 className='text-xl font-bold'>Cart Total</h1>
          <div>
            <div className='flex justify-between py-4 font-semibold'>
              <p>SubTotal</p>
              <p>${totalcart()}</p>
            </div>
            <hr className='h-1  bg-gray-300 '/>
            <div className='flex justify-between py-4 font-semibold'>
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr className='h-1 bg-gray-300 '/>
            <div className='flex justify-between py-4 font-semibold'>
              <h3>Total</h3>
              <h3>${totalcart()}</h3>
            </div>
            <hr className='h-1  bg-gray-300 '/>
          </div>
          <button className='w-64 h-14 bg-red-500 text-white text-lg font-semibold'>PROCEED TO CHECKOUT </button>
        </div>
       </div>
    </div>
  )
}

export default Cartitems

