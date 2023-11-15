import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import PinterestIcon from '@mui/icons-material/Pinterest';
import logo from "../assets/logo1.png"

const Footer = () =>
{
    return(
        <div className="flex flex-col w-full justify-center h-min bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 text-white lg:pt-6">
        <a href='https://www.amazon.in/ref=nav_logo'><div className='flex justify-center items-center text-2xl my-4 font-semibold'><img src={logo} className='h-14 hover:text-cyan-400'/>FASHION FIESTA</div></a>
            <div className="flex gap-4 justify-evenly mx-6 my-6">
              <a href='https://www.instagram.com/'> <InstagramIcon sx={{ fontSize: 40}} className='hover:text-pink-500'/></a> 
              <a href='"https://www.linkedin.com/"'> <LinkedInIcon sx={{ fontSize: 40 }} className='hover:text-blue-600'/></a>
              <a href="https://twitter.com/"><TwitterIcon sx={{ fontSize: 40 }} className='hover:text-blue-600'/></a>
              <a href='"https://www.facebook.com/'><FacebookIcon sx={{ fontSize: 40 }} className='hover:text-blue-600'/></a> 
              <a href='https://in.pinterest.com/today/'> <PinterestIcon sx={{ fontSize: 40 }} className='hover:text-red-500'/></a>
            </div>
            <hr className=" h-px bg-gray-400 border-none lg:mx-4 lg:mb-2"></hr>
            <div className="w-full flex flex-col items-center">
               <p className="text-center  my-2">© FIESTAINC- All rights reserved</p>
            </div>
        </div>
    )
}

export default Footer