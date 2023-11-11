import Navbar from './components/navbar'
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Shop from './Pages/Shop';
import Category from './Pages/Category';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import Login from './Pages/Login';

function App() {
  

  return (
  
      <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Shop/>}/>
          <Route path='/men' element={<Category category="men"/>}/>
          <Route path='/women' element={<Category category="women"/>}/>
          <Route path='/kids' element={<Category category="kids"/>}/>
          <Route path='/product' element={<Product/>}>
             <Route path=':productId' element={<Product/>}/>
          </Route>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
