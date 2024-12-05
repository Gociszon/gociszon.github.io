import React, { useState } from 'react';
import { useLocalStorage } from "@uidotdev/usehooks";
import './App.css';

function App() {
  return (
    <div>
      <EnterProduct></EnterProduct>
    </div>
  );
}

function EnterProduct() {
  const [productList, setProductList] = useLocalStorage("productList", []);
  const [product, setProduct] = useState("");
  const [purchased, setPurchased] = useLocalStorage("purchased", []);
  const [active, setActive] = useState(-1);

  const addProduct = () => {
    if (product.length !== 0)setProductList(productList => [...productList, [product]]);
    setProduct("");
  }

  const changeProduct = (event) => {
    setProduct(event.target.value);
  }

  const changePurchased = (index) => {
    if (purchased.includes(index)) setPurchased((prev) => prev.filter((i) => i !== index));
    else setPurchased((prev) => [...prev, index]);
  }

  const deleteProduct = (productToDelete, index) => {
    const updatedProducts = productList.filter(product => product !== productToDelete);
    setProductList(updatedProducts);

    const updatedPurchased = purchased
      .filter((i) => i !== index)
      .map((i) => (i > index ? i - 1 : i));
    setPurchased(updatedPurchased);
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
          <button onClick={() => deleteProduct(product, index)} style={{display: active === index ? "inline" : "none"}}>RM</button>
          </p>
          </li>)}
      </ol>
    </>
  );
}


export default App;
