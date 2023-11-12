/* eslint-disable react/jsx-key */
import React, { useContext } from 'react'
import all_product from './assets/all_product'
import { ShopContext } from './Context/ShopContext'
import remove from '../components/assets/cart_cross_icon.png'

 const Cartitems = () => {

    const {allprod,cartItem,removefromCart} = useContext(ShopContext)
    console.log(cartItem)
    const divstyl ="flex gap-20 items-center justify-between py-5 text-[#454545] text-lg font-semibold"
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
           <div className="flex  items-center  py-5 text-[#454545] text-lg font-semibold">
             <img src={e.image} className='h-36'/>
             <p className='w-40 mx-4'>{e.name}</p>
              <p >${e.new_price}</p>
             <button className='flex w-20 justify-center'>{cartItem[e.id]}</button>
               <p>{e.new_price*cartItem[e.id]}</p>
               <img src={remove} onClick={()=>{removefromCart(e.id)}} className='w-4 cursor-pointer my-0 mx-8'/>
            </div>
              <hr className='h-1 bg-[#e2e2e2] '/>
            </div>
        }
       })}
    </div>
  )
}

export default Cartitems

