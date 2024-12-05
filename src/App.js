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
  const [purchased, setPurchased] = useState([]);
  const [active, setActive] = useState(-1);

  const addProduct = () => {
    setProductList(productList => [...productList, [product]]);
  }

  const changeProduct = (event) => {
    setProduct(event.target.value);
  }

  const changePurchased = (index) => {
    if (purchased.includes(index)) setPurchased((prev) => prev.filter((i) => i !== index));
    else setPurchased((prev) => [...prev, index]);
  }

  const deleteProduct = (productToDelete) => {
    const updatedProducts = productList.filter(product => product !== productToDelete);
        setProductList(updatedProducts);
  }

  return (
    <>
      <input type='text' value={product} onChange={changeProduct}/>
      <button onClick={addProduct}>Add</button>

      <ol>
        {productList.map((product, index) => <li key={index}
         onMouseEnter={() => setActive(index)}
         onMouseLeave={() => setActive(-1)}
         >
          <p><span onClick={() => changePurchased(index)} className={purchased.includes(index) ? "purchased" : "product"}>{product}</span>
          <button onClick={() => deleteProduct(product)} style={{display: active === index ? "inline" : "none"}}>RM</button>
          </p>
          </li>)}
      </ol>
    </>
  );
}


export default App;
