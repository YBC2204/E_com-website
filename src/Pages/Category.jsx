/* eslint-disable react/prop-types */
import { useContext } from "react"
import { ShopContext } from "../components/Context/ShopContext"
import drop from '../components/assets/dropdown_icon.png'
import Item from "../components/Items/Item"


const Category = (props)=>
{
    const {allprod} = useContext(ShopContext);
   
    return(
        <div className="">
        <img src={props.banner} className="block lg:ml-48 py-4 lg:w-4/5"/>
        <div className="flex lg:mx-44 justify-end items-center mr-4">
            
              
           <div className="lg:py-3 lg:px-8 flex justify-center gap-2 items-center w-24 h-7 lg:h-12 lg:w-36 rounded-3xl border border-solid border-red-400 font-semibold hover:bg-red-400 cursor-pointer">
             Sort By <img src={drop} className="h-2"/>
           </div> 
        </div>
        <div className="grid lg:grid-cols-4  grid-cols-2 md:grid-cols-3 lg:mx-10 my-8 gap-7 mx-6 ">
            {allprod.map((item)=>{
               
             if (props.category===item.category)
             {
                return <Item key={item.id} id={item.id} name={item.name} image={item.image} 
    new_price={item.new_price} old_price={item.old_price}/>
             }
             else{
                return null;
             }
            })}
        </div>
        <div className="flex justify-center items-center  my-10 mx-auto w-40 h-12 lg:w-56 lg:h-16 rounded-3xl bg-[#ededed] text-[#787878] text-base lg:text-lg font-semibold border hover:bg-[#787878] hover:text-[#ededed]">
            Expolore More
        </div>
        </div>
    )
}

export default Category