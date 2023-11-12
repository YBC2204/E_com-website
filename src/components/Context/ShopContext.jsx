import  { createContext, useState } from 'react'
import allprod from '../assets/all_product'


export const ShopContext = createContext(null);

const getdefaultCart = () =>{
    let cart={}
    for (let i = 0; i < allprod.length+1; i++) {
         cart[i] = 0;
        
    }
return cart
}

const ShopContextProvider= (props) =>{
    
    const[cartItem,setItem]=useState(getdefaultCart())
    
   
    const addtoCart = (itemId) =>{
        setItem((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        console.log(cartItem);
    }
    const removefromCart = (itemId) =>{
        setItem((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }
    
    const contextval = {allprod,cartItem,addtoCart,removefromCart}
  
  
  return (
    <ShopContext.Provider value={contextval}>
        {props.children}
    </ShopContext.Provider>
  )}

 
export default ShopContextProvider;