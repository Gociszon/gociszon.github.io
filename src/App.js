//import logo from './logo.svg';
import './App.css';

class Item {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }
}

const products = [new Item("Apple", 2.99, 20), new Item("T-Shirt", 15.99, 10), new Item("Jeans", 12.99, 12)];
const productsList = products.map((product) => <li>{product.name} {product.price} {product.quantity}</li>)

function App() {
  return (
    RenderProducts()
  );
}

function RenderProducts() {
  return (
    <ul>{productsList}</ul>
  );
}

export default App;
