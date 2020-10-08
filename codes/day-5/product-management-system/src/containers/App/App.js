import React from 'react';
import DashBoard from '../../components/Common/DashBoard/DashBoard';
import ProductContainer from '../Product/ProductContainer';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'
import Home from '../../components/Common/Home/Home'
import AddProduct from '../../components/Product/AddProduct/AddProduct'
import ProductDetail from '../../components/Product/ProductDetail/ProductDetail'


//HTML5 API: historyAPI, pushAPI
//HashRouter: http://localhost:3000/#/products

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <DashBoard />
        <br />
        <Route path='/' exact component={Home} />
        <Route path='/home' component={Home} />
        <Route path='/products' exact component={ProductContainer} />
        <Route path='/products/:id' component={ProductDetail} />
        <Route path='/add' component={AddProduct} />
      </div>
    </BrowserRouter>
  );
}

export default App;
