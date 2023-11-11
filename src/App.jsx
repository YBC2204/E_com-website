import Navbar from './components/navbar'
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {
  

  return (
  
      <div>
      <BrowserRouter>
        <Navbar/>

        </BrowserRouter>
    </div>
  )
}

export default App
