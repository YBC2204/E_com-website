import exc_img from '../assets/exclusive_image.png'
const Offers = () => {
  return (
    <div className='w-3/4 rounded-2xl flex m-auto px-32 mt-16 bg-gradient-to-t from-indigo-400 via-purple-400 to-pink-400'>
        <div className='flex flex-col justify-center gap-5'>
            <h1 className='text-5xl font-semibold'>Exclusive <br/>Offers For You</h1>
            
            <p className='font-semibold text-2xl'>ONLY THE BEST FOR YOU</p>
            <button className='w-72 h-16 rounded-xl bg-red-500 border-none text-2xl font-semibold mt-7'>Check Now</button>
        </div>
        <div className='flex items-center justify-end w-full pt-12'>
            <img src={exc_img}/>
        </div>
    </div>
  )
}

export default Offers