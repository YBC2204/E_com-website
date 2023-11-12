import { useContext } from "react"
import { ShopContext } from "../components/Context/ShopContext"
import { useParams } from "react-router-dom"
import { BreadCrumbs } from "../components/BreadCrumbs/BreadCrumbs"
import { Display } from "../components/ProductDisplay/display"
import { RelatedProducts } from "../components/relatedProducts"



const Product = () => {
  const {allprod}=useContext(ShopContext)
  const {productId} = useParams();
  const product= allprod.find((e)=> e.id === Number(productId)) 
  return (
    <div>
      <BreadCrumbs product={product}/>
      <Display product={product}/>
      <RelatedProducts product={product}/>
    </div>
  )
}

export default Product
