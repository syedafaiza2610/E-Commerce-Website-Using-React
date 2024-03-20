import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import HomeSlider from './Pages/Home';
import About from './Pages/About';
import Register from './Pages/Register';
import Login from './Pages/Login';
import Product from './Pages/Products';
import Contact from './Pages/Contact';
import ErrorPage from './Pages/Error';



function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeSlider/>}/>
        <Route path='/home' element={<HomeSlider/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/products' element={<Product/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='*' element={<ErrorPage/>}/>
        
      </Routes>
      </BrowserRouter>

    
    </div>
  );
}

export default App;
