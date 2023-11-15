import logo from './assets/logo1.png'
import cartlogo from './assets/cart_icon.png'
import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { ShopContext } from './Context/ShopContext'
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';

const Navbar = () =>
{

    const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const closeDrawer = () => {
    setOpen(false);
  };
    const [uline,setline] = useState("shop")
    //let st="hover:underline decoration-red-500 decoration-4 underline-offset-4"
    //let line=<hr className='border-2 border-red-500 mt-6'/>
    const {totalitems}=useContext(ShopContext)
    return(
     <div className='flex justify-around p-4 gap-6 lg:py-8 shadow-md shadow-black font-Poppins h-26 '>
        <Link to='/'><div className='flex items-center gap-3'>
          <img src={logo} className='h-16'/>
          <p className='font-semibold text-2xl lg:text-4xl'>FASHION FIESTA</p>
        </div></Link>
        <div className='hidden md:flex items-center gap-10 list-none font-medium text-xl cursor-pointer '>  
          
            <li onClick={()=>{setline("shop")}}><Link to='/'>SHOP</Link>{uline==="shop"?<hr className='border-2 border-red-500 mt-6'/>:<></>}</li>
            <li onClick={()=>{setline("men")}}><Link to='/men'>MEN</Link> {uline==="men"?<hr className='border-2 border-red-500 mt-6'/>:<></>}</li>
            <li onClick={()=>{setline("women")}}><Link to='/women'>WOMEN</Link> {uline==="women"?<hr className='border-2 border-red-500 mt-6'/>:<></>}</li>
            <li onClick={()=>{setline("kids")}}><Link to='/kids'>KIDS</Link> {uline==="kids"?<hr className='border-2 border-red-500 mt-6'/>:<></>}</li>
          
        </div>
        <div className='flex gap-6 items-center'>
           <Link to='/login'><button className=' lg:w-28 lg:h-10 lg:border-solid lg:border-2 lg:rounded-xl lg:border-gray-400 lg:text-md lg:font-medium lg:bg-white lg:active:bg-stone-500'>LOGIN</button></Link> 
            <Link to='/cart'><img src={cartlogo} className='h-8 lg:h-full'/></Link> 
            <div className='w-6 h-6 flex justify-center items-center rounded-lg text-sm -mt-8 -ml-10 bg-red-500 text-white'>{totalitems()}</div>
            <div className="md:hidden">
            <IconButton  edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer}>
              {open ? <CloseIcon /> : <MenuIcon  />}
            </IconButton>
          </div>
        </div>
        <Drawer anchor="right" open={open} onClose={toggleDrawer}>
        <div className=" flex flex-col h-screen w-screen">
          <div className=" flex justify-between items-center p-2 pr-4">
            <div></div>
            <IconButton edge="end" color="primary" aria-label="close" onClick={toggleDrawer}>
              <CloseIcon />
            </IconButton>
          </div>
          <List className="mt-10 flex flex-col justify-between items-center gap-10 px-10 ">
              <Link to="/" onClick={closeDrawer}>
                <ListItemText primary="SHOP"/>
              </Link>
              <Link to="/men" onClick={closeDrawer}>
                <ListItemText primary="MEN"/>
              </Link>
              <Link to="/women" onClick={closeDrawer}>
                <ListItemText primary="WOMEN"/>
                </Link>
              <Link to="/kids" onClick={closeDrawer}>
                <ListItemText primary="KIDS"/>
              </Link>
              
          </List>
        </div>
      </Drawer>
     
    </div> 
    )
}

export  default Navbar