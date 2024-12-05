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
  const [purchased, setPurchased] = useState("product");
  const [remove, setRemove] = useState({display: 'none'});

  const addProduct = () => {
    setProductList(productList => [...productList, [product]]);
  }

  const changeProduct = (event) => {
    setProduct(event.target.value);
  }

  const deleteProduct = (productToDelete) => {
    const updatedProducts = productList.filter(product => product !== productToDelete);
        setProductList(updatedProducts);
  }

  const changePurchased = () => {
    if (purchased !== 'purchased') setPurchased("purchased");
    else setPurchased("product");
  }

  return (
    <>
      <input type='text' value={product} onChange={changeProduct}/>
      <button onClick={addProduct}>Add</button>

      <ol>
        {productList.map((product, index) => <li key={index}
         onMouseEnter={e => {setRemove({display: 'inline'})}}
         onMouseLeave={e => {setRemove({display: 'none'})}}
         >
          <p><span onClick={changePurchased} className={purchased}>{product}</span>
          <button onClick={() => deleteProduct(product)} style={remove}>RM</button>
          </p>
          </li>)}
      </ol>
    </>
  );
}


export default App;
