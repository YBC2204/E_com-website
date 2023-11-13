
import Hero from "../components/Hero"
import NewCollections from "../components/NewCollections/NewCollections"
import Offers from "../components/Offers/Offers"
import { Popular } from "../components/Popular/Popular"

const Shop = ()=>
{
    return(
        <div >
            <Hero/>
            <Popular/>
            <Offers/>
            <NewCollections/>
            
        </div>
    )
}
export default Shop