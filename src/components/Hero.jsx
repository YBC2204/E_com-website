import arrow from './assets/arrow.png'
import hero_image from './assets/hero-r.png'
import { useRef } from 'react';
import { motion } from "framer-motion"
 const Hero = () => {

    const newCollectionsRef = useRef(null);

    const scrollToNewCollections = () => {
      newCollectionsRef.current.scrollIntoView({ behavior: 'smooth' });
    };

  return (
    <div className='h-[85vh] bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 flex font-Lato justify-around'>
        <div className='flex flex-col justify-center gap-5 lg:gap-8  px-10'>
            <h2 className='text-xl lg:text-4xl font-semibold text-[#FFE5E5]'>Elevate Your Style, Embrace Your Individuality</h2>
            <div className='w-full font-Poppins flex gap-2'>
               <div className='flex flex-col lg:gap-1'>
               <p>🛍️</p>
               <p>🌟</p>
               <p>🚀</p>
               <p>🌈</p>
               </div> 
               <div><p className=' lg:text-xl font-semibold'> Shop the Lookbook
                <br/> Unleash Your Style
                <br/> Express Yourself
                <br/><span></span> Fashion Beyond Boundaries</p></div>
                </div>
                <p className=' mt-4 text-2xl text-center lg:text-6xl font-bold text-red-100 '>Start Your Journey Now</p>
            
           <div ref={newCollectionsRef} onClick={scrollToNewCollections} className='flex justify-center items-center gap-2 lg:gap-4 w-44 lg:w-80 h-16 rounded-3xl lg:mt-7  bg-red-400 text-white mx-auto lg:text-xl font-semibold cursor-pointer'>
            <div>Latest Collection</div>
            <img src={arrow}/>
           </div> 
        </div>
        <motion.div className='hidden lg:flex items-center justify-center overflow-hidden' 
   initial={{ opacity: 0, scale: 0.75 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1.5 }}>
            <img src={hero_image} className='h-[700px] lg:h-full'/>
        </motion.div>
    </div>
  )
}
export default Hero