import logo from './assets/logo.png'
import cartlogo from './assets/cart_icon.png'
import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { ShopContext } from './Context/ShopContext'
const Navbar = () =>
{
    const [uline,setline] = useState("shop")
    //let st="hover:underline decoration-red-500 decoration-4 underline-offset-4"
    //let line=<hr className='border-2 border-red-500 mt-6'/>
    const {totalitems}=useContext(ShopContext)
    return(
     <div className='flex justify-around p-16 shadow-md shadow-black font-Poppins h-24'>
        <div className='flex items-center gap-3'>
          <img src={logo}/>
          <p className='font-semibold text-4xl'>SHOPPER</p>
        </div>
        <div className='flex items-center gap-10 list-none font-medium text-xl cursor-pointer '>  
          
            <li onClick={()=>{setline("shop")}}><Link to='/'>SHOP</Link>{uline==="shop"?<hr className='border-2 border-red-500 mt-6'/>:<></>}</li>
            <li onClick={()=>{setline("men")}}><Link to='/men'>MEN</Link> {uline==="men"?<hr className='border-2 border-red-500 mt-6'/>:<></>}</li>
            <li onClick={()=>{setline("women")}}><Link to='/women'>WOMEN</Link> {uline==="women"?<hr className='border-2 border-red-500 mt-6'/>:<></>}</li>
            <li onClick={()=>{setline("kids")}}><Link to='/kids'>KIDS</Link> {uline==="kids"?<hr className='border-2 border-red-500 mt-6'/>:<></>}</li>
          
        </div>
        <div className='flex gap-6 items-center'>
           <Link to='/login'><button className='w-28 h-10 border-solid border-2 rounded-xl border-gray-400 text-md font-medium bg-white active:bg-stone-500'>LOGIN</button></Link> 
            <Link to='/cart'><img src={cartlogo}/></Link> 
            <div className='w-6 h-6 flex justify-center items-center rounded-lg text-sm -mt-8 -ml-10 bg-red-500 text-white'>{totalitems()}</div>
        </div>
     
    </div> 
    )
}

export  default Navbar