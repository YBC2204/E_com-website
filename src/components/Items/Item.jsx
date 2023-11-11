

 const Item = (props) => {
  return (
    <div className="w-80 hover:scale-105 hover:delay-100">
       <img src={props.image}/>
       <p className="m-2">{props.name}</p>
       <div className="flex gap-7">
          <div className="text-teal-900 font-semibold text-lg line-through">${props.old_price}</div>
          <div className="text-cyan-300 font-semibold text-lg">${props.new_price}</div>
       </div>
    </div>
  )
}
export default Item