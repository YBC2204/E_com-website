import exc_img from '../assets/offers-r.png'
import { Link } from "react-router-dom"
import {motion} from 'framer-motion'
const Offers = () => {
  return (
    <motion.div initial={{ opacity: 0, scale: 0.5 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1 }}>
    <div className='w-full lg:w-3/4 lg:rounded-2xl lg:flex lg:m-auto lg:px-0 px-10 pt-10 mt-16 lg:mt-24 lg:py-0 bg-gradient-to-t from-indigo-400 via-purple-400 to-pink-400 lg:justify-between'>
        <div className='flex flex-col justify-center lg:items-center gap-5 lg:pl-10 lg:w-full'>
        
            <h1 className='text-4xl lg:text-6xl font-semibold text-center  font-Lato'>Exclusive Offers For You</h1>
           
            
          <Link to='/women' className='text-center lg:text-left'><button className='lg:w-72 w-40 h-16 rounded-xl bg-red-500 border-none text-2xl font-semibold mt-7 hover:bg-red-700 font-Poppins'>Check Now</button></Link>
        </div>
        <div className='flex items-center justify-end w-full pt-12 '>
            <img src={exc_img} />
        </div>
    </div>
    </motion.div>
  )
}

export default Offers