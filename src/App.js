import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import HomeSlider from './Pages/Home';
import About from './Pages/About';
import Register from './Pages/Register';
import Login from './Pages/Login';
import Contact from './Pages/Contact';
import ErrorPage from './Pages/Error';
import Footer from './Components/Footer';
import Listing from './Pages/Listing';
import DetailsPage from './Pages/Details';
import Cart from './Pages/Cart';
import Newsletter from './Components/Newsletter';




function App() {
  return (
    <>
    <div>
   
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeSlider/>}/>
        <Route path='/home' element={<HomeSlider/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/listing' element={<Listing/>}/>
        <Route path='/product/details' element={<DetailsPage/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/listing' element={<Listing/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='*' element={<ErrorPage/>}/>
        
      </Routes>
      </BrowserRouter>
      
      <Footer/>

    
    </div>
    </>
  );
}

export default App;
