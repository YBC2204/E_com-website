import star from '../assets/star_icon.png'
import star_dull from '../assets/star_dull_icon.png'
import { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';

export const Display = (props) => {
    const {product}= props;
    const sizestyl ="py-4 px-6 hover:bg-slate-600 hover:text-zinc-300 border border-[#ebebeb] rounded-md cursor-pointer bg-zinc-300 text-slate-600";
    const {addtoCart}=useContext(ShopContext)


  return (
    <div className='flex my-0 mx-44'>
        <div className='flex gap-4'>
            <div className='flex flex-col gap-4'>
                <img src={product.image} className='h-40 '/>
                <img src={product.image} className='h-40'/>
                <img src={product.image} className='h-40'/>
                
            </div>
            <div>
            <img src={product.image} className='main h-[500px] '/>
            </div>
        </div>
        <div className='my-0 mx-16 flex flex-col'>
            <p className='font-bold text-xl text-[#3d3d3d]'>{product.name}</p>
            <div className='flex gap-1 items-center mt-3 text-[#1c1c1] text-lg'>
                <img src={star}/>
                <img src={star}/>
                <img src={star}/>
                <img src={star}/>
                <img src={star_dull}/>
                <p>(123)</p>
                </div>
                <div className='flex my-10 gap-7 text-2xl font-semibold'>
                    <div className="text-teal-900 line-through">${product.old_price}</div>
                    <div className='text-red-500'>${product.new_price}</div>
                </div>
                <div>
                    <h1 className='mt-8 text-[#656565] text-xl font-semibold'>Select Size</h1>
                    <div className='flex gap-5 my-7'>
                        <div className={sizestyl}>S</div>
                        <div className={sizestyl}>M</div>
                        <div className={sizestyl}>L</div>
                        <div className={sizestyl}>XL</div>
                        <div className={sizestyl}>XXL</div>
                    </div>
                </div>
               <button className='py-5 px-7 w-52 text-lg font-semibold text-white bg-red-500 rounded-xl hover:scale-105' onClick={()=>{addtoCart(product.id)}}>
               ADD TO CART</button>
               
        </div>
    </div>
  )
}
