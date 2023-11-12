import Item from '../Items/item'
import newc from '../assets/new_collections'

const NewCollections = () => {
    const newcollec = newc.map(item =>(
    <Item key={item.id} id={item.id} name={item.name} image={item.image} 
    new_price={item.new_price} old_price={item.old_price}/>
    ))
  return (
    <div className='flex flex-col items-center gap-3 mt-10'>
        <h1 className='text-[#171717] text-5xl font-semibold'>NEW COLLECTIONS</h1>
        <hr className='w-64 h-1 rounded-lg bg-slate-400'/>
        <div className='mt-12 flex gap-7 flex-wrap justify-center'>
           {newcollec}
        </div>
    </div>
  )
}
export default NewCollections