import { Link } from "react-router-dom"


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
    <div className="hover:scale-105 hover:delay-100">
      <Link to={`/product/${props.id}`}><img onClick={scrolltotop} src={props.image}/></Link> 
       <p className="m-2 ">{props.name}</p>
       <div className="flex gap-7 mx-2">
          <div className="text-teal-900 font-semibold text-lg line-through">${props.old_price}</div>
          <div className="text-cyan-300 font-semibold text-lg">${props.new_price}</div>
       </div>
    </div>
  )
}
export default Item