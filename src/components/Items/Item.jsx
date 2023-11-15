/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

 const Item = (props) => {

  const scrolltotop = ()=>{
    window.scrollTo(
      {
        top:50,
        behavior:'smooth'
      }
    )
  }
  return (
    <motion.div className="hover:scale-105 hover:delay-100 font-Robot"  initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }} transition={{ duration: 1 }}>
      <Link to={`/product/${props.id}`}><img onClick={scrolltotop} src={props.image}/></Link> 
       <p className="m-2 text-xs md:text-base h-12 overflow-hidden">{props.name}</p>
       <div className="flex gap-7 mx-2">
          <div className="text-teal-900 font-semibold text-lg line-through">${props.old_price}</div>
          <div className="text-cyan-300 font-semibold text-lg">${props.new_price}</div>
       </div>
    </motion.div>
  )
}
export default Item