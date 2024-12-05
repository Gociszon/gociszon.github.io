//import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';

function App() {
  return (
    <>
      <EnterProduct></EnterProduct>
      <DisplayProductList></DisplayProductList>
    </>
  );
}

var productList = [];

function EnterProduct() {
  const [product, setProduct] = useState("");

  const addProduct = () => {
    productList.push(product);
  }

  const changeProduct = (event) => {
    setProduct(event.target.value);
  }

  return (
    <>
      <input type='text' value={product} onChange={changeProduct}/>
      <button onClick={addProduct}>Add</button>
    </>
  );
}

function DisplayProductList() {
  const products = productList.map((product, index) => <li key={index}>{product}</li>)

  return (
    <>
      <ul>
        {products}
      </ul>
    </>
  );
}

export default App;
