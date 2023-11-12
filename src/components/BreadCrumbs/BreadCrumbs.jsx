import arrow from '../assets/breadcrum_arrow.png'

export const BreadCrumbs = (props) => {
    const {product} = props; 
  return (
    <div className='flex items-center gap-2 text-[#5c5c5c] text-lg font-semibold my-16 mx-44 capitalize'>
      HOME <img src={arrow}/> SHOP <img src={arrow}/> {product.category} <img src={arrow}/> {product.name}
    </div>
  )
}
