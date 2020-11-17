import logo from './logo.svg';
import './App.css';
import React, { Component } from "react";
import data from "./data.json"
import Products from './components/Products';
 
class App extends Component {

  constructor(){
    super();
    
    this.state = {
      products: data.products,
      size: "",
      sort: ""
    }
  }

  render(){
    return(
      <div className="grid-container">
        <header>
          <a href="/">Shopping Cart</a>
        </header>
        <main>
          <div className="content">
            <div className="main">
              <Products products={this.state.products}></Products>
            </div>
            <div className="sidebar">
              Cart
            </div>
          </div>
        </main>
        <footer>
          About
        </footer>
      </div>
    )
  }  
}
 
export default App;