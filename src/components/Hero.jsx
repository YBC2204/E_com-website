import hand_icon from './assets/hand_icon.png'
import arrow from './assets/arrow.png'
import hero_image from './assets/hero-r.png'
 const Hero = () => {
  return (
    <div className='h-[75vh] bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 flex font-Lato justify-around'>
        <div className='flex flex-col justify-center gap-5 lg:pl-44 px-10'>
            <h2 className='text-lg font-semibold text-[#FFE5E5]'>NEW ARRIVALS</h2>
            <div>
                <div className='flex items-center gap-5'>
                    <p className='text-4xl lg:text-7xl font-bold '>New</p>
                    <img src={hand_icon} className='w-12 lg:w-24'/>
                </div>
                <p className='text-4xl lg:text-7xl font-bold'>Collections</p>
                <p className=' mt-4 text-6xl lg:text-7xl font-bold text-red-100'>For everyone</p>
            </div>
           <div className='flex justify-center items-center gap-2 lg:gap-4 w-44 lg:w-80 h-16 rounded-3xl mt-7 bg-red-400 text-white mx-auto lg:text-xl font-semibold'>
            <div>Latest Collection</div>
            <img src={arrow}/>
           </div> 
        </div>
        <div className='hidden lg:flex items-center justify-center overflow-hidden'>
            <img src={hero_image} className='h-[700px] lg:h-full'/>
        </div>
    </div>
  )
}
export default Hero