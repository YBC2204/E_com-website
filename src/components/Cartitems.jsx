/* eslint-disable react/jsx-key */
import  { useContext } from 'react'

import { ShopContext } from './Context/ShopContext'
import remove from '../components/assets/cart_cross_icon.png'

 const Cartitems = () => {

    const {allprod,cartItem,addtoCart,removefromCart,totalcart} = useContext(ShopContext)
    console.log(cartItem)
    const divstyl ="hidden lg:grid grid-cols-6 gap-20  py-5 text-[#454545] text-lg font-semibold"
  return (
    <div className=' lg:my-24 lg:mx-40'>
        <div className={divstyl}>
            <p>PRODUCTS</p>
            <p>TITLE</p>
            <p>PRIZE</p>
            <p>QUANTITY</p>
            <p>TOTAL</p>
            <p>REMOVE</p>
        </div>
        <hr className='hidden lg:block h-1 bg-[#e2e2e2] '/>
        <p className='lg:hidden text-4xl font-bold flex justify-center my-5'>ITEMS</p>
       {allprod.map((e)=>{
        if(cartItem[e.id]>0)
        {
          return <div >
          
           <div className="hidden lg:grid grid-cols-6 items-center gap-20 py-5 text-[#454545] text-lg font-semibold">
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
       {allprod.map((e)=>{
        if(cartItem[e.id]>0)
        {
          return <div >
          
           <div className="lg:hidden grid grid-cols-2  text-[#454545]  font-semibold mx-3 my-8 gap-2">
             <div><img src={e.image} className='p-2'/></div>
             <div className='flex flex-col gap-1 justify-around'> 
             <p className=''>{e.name}</p>
              <p>PRIZE :: ${e.new_price}</p>
            <div className='flex gap-3 h-10'>
            
              <p className='py-1 text-xl' onClick={()=>{removefromCart(e.id)}}>-</p>
            <button className='w-12 h-10 border border-slate-400 bg-gray-300' >{cartItem[e.id]}</button>
            <p className='py-1 text-xl' onClick={()=>{addtoCart(e.id)}}>+</p>
            </div> 
               <p>TOTAL :: ${e.new_price*cartItem[e.id]}</p>
               </div>
               
            </div>
              <hr className='h-1 bg-[#e2e2e2] '/>
            </div>
        }
        return null;
       })}
       
       <div className='flex my-24 mx-10 lg:mx-0'>
        <div className='flex-1 flex flex-col lg:mr-48 gap-10'>
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
         <div className='flex justify-center lg:justify-normal'><button className='w-64 h-14 bg-red-500 text-white text-lg font-semibold'>PROCEED TO CHECKOUT </button></div>
        </div>
       </div>
    </div>
  )
}

export default Cartitems

