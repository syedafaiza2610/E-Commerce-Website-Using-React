import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import HomeSlider from './Pages/Home';
import About from './Pages/About';
import Register from './Pages/Register';
import Login from './Pages/Login';



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
        
      </Routes>
      </BrowserRouter>

    
    </div>
  );
}

export default App;
