import './App.css';
import Content from './Pages/Content';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ProductDetail from './Pages/ProductDetail';
import { useState, useEffect } from 'react';
import { Context } from './context/CartContext';
import Cart from './Pages/Cart';
import CheckOut from './Pages/CheckOut';

function App() {

  let [products, setProducts] = useState([])

  useEffect(() =>{
    getProducts()
}, [])

let getProducts = async () =>{
  let response = await fetch('http://127.0.0.1:8000/api/products',{
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  })
  let data = await response.json()

  if(response.status === 200){
    setProducts(data)
  }
}

  return (
    <div className="App">
      <Context>
      <Router>
        <Routes>
          <Route element={<Content products={products}/>} path='/'></Route>
          <Route element={<ProductDetail products={products}/>} path='/product/:id'></Route>
          <Route element={<Cart />} path='/cart'></Route>
          <Route element={<CheckOut />} path='/checkout-session'></Route>
        </Routes>
      </Router>
      </Context>
    </div>
  );
}

export default App;

// 