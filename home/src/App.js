//import logo from './logo.svg';
import { Routes } from 'react-router-dom';
// import './App.css';
import Home from './components/Home';
import Signup from './components/Signup';
//import Product from './components/product';
import { BrowserRouter, Route } from 'react-router-dom';
// import './css/style.css';
import Contact from './components/Contact';
import Aboutus from './components/Aboutus';
import Contactus from './components/Contactus';
import Contactform from './components/Contactfrom';
import Reachus from './components/Reachus'
import Product from './components/Product'
import Login from './components/Login';
import Data from './components/Data';
import Shoes from './components/Shoes';
import Laptop from './components/Laptop';
import IndividualCartProduct from './components/IndivisualCartProduct';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={< Home />}></Route>
        <Route exact path='/Signup' element={< Signup />}></Route>
        <Route exact path='/Contact' element={< Contact />}></Route>
        <Route exact path='/about-us' element={< Aboutus />}></Route>
        <Route exact path='/contactus' element={< Contactus />}></Route>
        <Route exact path='/contactfrom' element={< Contactform />}></Route>
        <Route exact path='/product' element={< Product />}></Route>
        <Route exact path='/reachus' element={< Reachus />}></Route>
        <Route exact path='/data' element={< Data />}></Route>
        <Route exact path='/shoes' element={< Shoes />}></Route>
        <Route exact path='/laptop' element={< Laptop />}></Route>
        <Route exact path='/signin' element={< Login/>}></Route>
        <Route exact path='/indivisualcart' element={< IndividualCartProduct/>}></Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
