import data_product from '../assets/data'
import Item from '../Items/Item'
export const Popular = () => {

    const datas = data_product.map(items =>(<Item key={items.id} id={items.id} name={items.name} image={items.image} new_price={items.new_price} old_price={items
    .old_price}/>))
  return (
    <div className='flex flex-col items-center gap-3 mt-10 '>
        <h1 className='text-[#171717] lg:text-5xl text-3xl font-semibold'>POPULAR IN WOMEN</h1>
        <hr className='w-64 h-1 rounded-lg bg-slate-400'/>
        <div className='mt-12 flex lg:flex-row gap-7 flex-col w-64 lg:w-3/4  '>
           {datas}
        </div>
    </div>
  )
}
