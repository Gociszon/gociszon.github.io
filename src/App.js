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
  const [style, setStyle] = useState("product");

  const addProduct = () => {
    setProductList(productList => [...productList, [product]]);
  }

  const changeProduct = (event) => {
    setProduct(event.target.value);
  }

  const deleteProduct = () => {

  }

  const changePurchased = () => {
    if (style !== 'purchased') setStyle("purchased");
    else setStyle("product");
  }

  return (
    <>
      <input type='text' value={product} onChange={changeProduct}/>
      <button onClick={addProduct}>Add</button>

      <ul>
        {productList.map((product, index) => <li key={index}>
          <p><span onClick={changePurchased} className={style}>{product}</span>
          <button style={{backgroundColor: "red", width: "25px", height: "25px"}} onClick={deleteProduct}></button>
          </p>
          </li>)}
      </ul>
    </>
  );
}


export default App;
