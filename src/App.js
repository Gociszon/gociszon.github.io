//import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';

function App() {
  return (
    <>
      <EnterProduct></EnterProduct>
    </>
  );
}

function EnterProduct() {
  const [productList, setProductList] = useState([]);
  const [product, setProduct] = useState("");

  const addProduct = () => {
    setProductList(productList => [...productList, [product]]);
  }

  const changeProduct = (event) => {
    setProduct(event.target.value);
  }

  return (
    <>
      <input type='text' value={product} onChange={changeProduct}/>
      <button onClick={addProduct}>Add</button>

      <ul>
        {productList.map((product, index) => <li key={index}>{product}</li>)}
      </ul>
    </>
  );
}


export default App;
