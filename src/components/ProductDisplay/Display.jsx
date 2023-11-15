/* eslint-disable react/prop-types */
import star from '../assets/star_icon.png'
import star_dull from '../assets/star_dull_icon.png'
import { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';

export const Display = (props) => {
    const {product}= props;
    const sizestyl ="w-10 h-10 flex justify-center items-center lg:py-4 lg:px-6 hover:bg-slate-600 hover:text-zinc-300 border border-[#ebebeb] rounded-md cursor-pointer bg-zinc-300 text-slate-600";
    const {addtoCart}=useContext(ShopContext)


  return (
    <div className='flex flex-col lg:flex-row my-6  lg:mx-28 items-center'>
        <div className='flex flex-col  lg:items-start gap-2 lg:flex-row   lg:mx-3 '>
            <div className='flex lg:flex-col h-28 lg:h-full gap-2  justify-center lg:justify-normal'>
                <img src={product.image} className='w-24   lg:w-28'/>
                <img src={product.image} className='w-24   lg:w-28'/>
                <img src={product.image} className='w-24  lg:w-28'/>
                
            </div>
            <div className='flex justify-center '>
            <img src={product.image} className='main lg:h-full h-56 '/>
            </div>
        </div>
        <div className='mt-2 mx-8 lg:mx-16 flex flex-col font-Poppins'>
            <p className='font-bold text-xl text-[#3d3d3d]'>{product.name}</p>
            <div className='flex gap-1 items-center mt-3 text-[#1c1c1] text-lg'>
                <img src={star}/>
                <img src={star}/>
                <img src={star}/>
                <img src={star}/>
                <img src={star_dull}/>
                <p>(123)</p>
                </div>
                <div className='flex my-3 lg:my-10 gap-7 text-2xl font-semibold'>
                    <div className="text-teal-900 line-through">${product.old_price}</div>
                    <div className='text-red-500'>${product.new_price}</div>
                </div>
                <div>
                    <h1 className='mt-4 text-[#656565] text-xl font-semibold'>Select Size</h1>
                    <div className='flex gap-5 my-7 flex-wrap'>
                        <div className={sizestyl}>S</div>
                        <div className={sizestyl}>M</div>
                        <div className={sizestyl}>L</div>
                        <div className={sizestyl}>XL</div>
                        <div className={sizestyl}>XXL</div>
                    </div>
                </div>
               <button className='py-5 lg:px-7 w-36 lg:w-52 text-lg font-semibold text-white bg-red-500 rounded-xl hover:scale-105' onClick={()=>{addtoCart(product.id)}}>
               ADD TO CART</button>
               
        </div>
    </div>
  )
}
