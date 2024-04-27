import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
import { createContext, useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';



const MyContext = createContext();

function App() {

  const [productData, setproductData] = useState([])
  const [cartItems, setCartItems] = useState([])
  useEffect(() => {
    getData('http://localhost:4000/productData');
    getCartData("http://localhost:4000/cartItems");

  }, [])
 
 
  const getData = async (url) => {
    try {
      await axios.get(url).then((response) => {
        setproductData(response.data);
      }
      )

    } catch (error) {
      console.log(error.message)

    }

  }
  const getCartData = async (url) => {
    try {
        await axios.get(url).then((response) => {
            setCartItems(response.data);
        })

    } catch (error) {
        console.log(error.message);
    }
}
//   const getCartData = async (url) => {
//     try {
//         await axios.get(url).then((response) => {
//             setCartItems(response.data);
//         })

//     } catch (error) {
//         console.log(error.message);
//     }
// }

const addToCart = async (item) => {
  item.quantity = 1;

  try {
    await axios.post("http://localhost:4000/cartItems", item).then((res) => {
      if (res !== undefined) {
        setCartItems([...cartItems, { ...item, quantity: 1 }])
      }
    })
  } catch (error) {
    console.log(error)
  }

}
  const removeItemsFromCart = (id) => {
    const arr = cartItems.filter((obj) => obj.id !== id);
    setCartItems(arr)
  }
  const emptyCart = () => {
    setCartItems([])
  }

  const value = {
    cartItems,
    addToCart,
    removeItemsFromCart,
    emptyCart
  }
  return (
  
     productData.length !== 0 &&

      <BrowserRouter>
      <MyContext.Provider value={value}>
      <Header data={productData} cartItemsCount ={cartItems.length}/>
      <Routes>
        <Route path='/' element={<HomeSlider data={productData}/>}/>
        <Route path='/home' element={<HomeSlider/>}/>
        <Route path='/cart' element={<Cart/>}/>
        {/* <Route path='/cat/:id/:id' element={<Listing/>}/> */}
        <Route exact={true} path="/product/:id" element={<DetailsPage data={productData} />} />
        <Route path='/about' element={<About/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/cat/:id' element={<Listing data={productData} single={true}/>}/>
        <Route path='/cat/:id/:id' element={<Listing data={productData} single={false}/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='*' element={<ErrorPage/>}/>
        
      </Routes>
      <Footer/>
      </MyContext.Provider>
      </BrowserRouter>
    
      
      
      




  );
}

export default App;
export {MyContext}
