import { useContext } from "react"
import { ShopContext } from "../components/Context/ShopContext"
import drop from '../components/assets/dropdown_icon.png'
import Item from "../components/Items/item"


const Category = (props)=>
{
    const {allprod} = useContext(ShopContext);
   
    return(
        <div className="">
        <img src={props.banner} className="block ml-48 py-4 w-4/5"/>
        <div className="flex mx-44 justify-between items-center">
            <p className="font-semibold">
                <span>Showing 1-12</span>Out Of 36 Products
            </p>
           <div className="py-3 px-8 w-32 rounded-3xl border border-solid border-red-400">
             Sort By <img src={drop}/>
           </div> 
        </div>
        <div className="grid grid-cols-4 mx-10 my-8 gap-y-7">
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
        <div className="flex justify-center items-center  my-10 mx-auto w-56 h-16 rounded-3xl bg-[#ededed] text-[#787878] text-lg font-semibold border hover:bg-[#787878] hover:text-[#ededed]">
            Expolore More
        </div>
        </div>
    )
}

export default Category