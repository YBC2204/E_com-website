/* eslint-disable react/prop-types */
import all_product from '../components/assets/all_product'
import Item from './Items/Item'

export const RelatedProducts = (props) => {
    const {product}=props
    
    let displayedCards=0
  return (
    <div className='flex flex-col items-center gap-2 my-12 lg:mb-20 lg:mt-32'>
        <h1 className='text-[#171717] text-3xl lg:text-5xl font-semibold'>Related products</h1>
        <hr className='w-52 h-1 rounded-lg bg-[#252525]'/>
        <div className='mt-12 grid grid-cols-2 lg:flex lg:w-3/4  w-80 gap-7'>
        
        

{all_product.map((item) => {
  if (displayedCards < 4 && product.category === item.category) {
    
    displayedCards++;
    return (
      <Item
        key={item.id}
        id={item.id}
        name={item.name}
        image={item.image}
        new_price={item.new_price}
        old_price={item.old_price}
      />
    );
  } else {
    return null;
  }
})}
        </div>
    </div>
  )
}
