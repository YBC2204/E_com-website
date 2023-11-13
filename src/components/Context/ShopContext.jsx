/* eslint-disable react/prop-types */
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
        
    }
    const removefromCart = (itemId) =>{
        setItem((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }
    const totalcart =() =>{
        let total=0;
        for(const item in cartItem)
        { 
            {console.log(cartItem[item])}
            if(cartItem[item]>0)
            {
                let iteminfo = allprod.find((prod)=>
                    prod.id===Number(item))
                
                total+=iteminfo.new_price*cartItem[item]
            }
            
        }
        return total
    }
    const totalitems =()=>{
        let totitems=0;
        for (const item in cartItem){
            if(cartItem[item]>0){
                totitems+= cartItem[item];
            }
        }
        return totitems
    }
    const contextval = {allprod,cartItem,addtoCart,removefromCart,totalcart,totalitems}
  
  
  return (
    <ShopContext.Provider value={contextval}>
        {props.children}
    </ShopContext.Provider>
  )}

 
export default ShopContextProvider;