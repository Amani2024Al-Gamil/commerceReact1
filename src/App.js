import Header from "./components/header/Header";
import './App.css'
import Footer from "./components/footer/footer";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from "./pages/home-page/Home";
import Cart from "./pages/cart/Cart";
import Products from './pages/products/Products';
import SingleProduct from './pages/single-product/SingleProduct';
import SpecialOfferPage from './pages/specialofferpage/SpecialOfferPage'

function App() {
 
  return (
    <Router >

      <Header />
      <Routes>
        <Route  path="/"element={<Home />} />
        <Route  path="/Cart"element={<Cart />} />
        <Route  path="/Products"element={<Products />} />
        <Route  path="/products/:id"element={<SingleProduct />} />
        <Route  path="/special-offer/:id"element={<SpecialOfferPage />} />




      </Routes>
      
      <Footer />


    </Router>
  );
}

export default App;
