import Navbar from './components/navbar'
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Shop from './Pages/Shop';
import Category from './Pages/Category';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import Login from './Pages/Login';
import Footer from './components/Footer/Footer';
import bannermen from './components/assets/banner_mens.png'
import bannerwomen from './components/assets/banner_women.png'
import bannerkids from './components/assets/banner_kids.png'

function App() {
  

  return (
  
      <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Shop/>}/>
          <Route path='/men' element={<Category category="men" banner={bannermen}/>}/>
          <Route path='/women' element={<Category category="women" banner={bannerwomen}/>}/>
          <Route path='/kids' element={<Category category="kid" banner={bannerkids}/>}/>
          <Route path='/product' element={<Product/>}>
             <Route path=':productId' element={<Product/>}/>
          </Route>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
        <Footer/>
        </BrowserRouter>
    </div>
  )
}

export default App
