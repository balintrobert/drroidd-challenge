import React, { useState } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import ItemDetails from './components/ItemDetails';

const App = () => {
  const [cart, setCart] = useState([]);
  const [totalCost, setTotalCost] = useState(0);

  const calculateTotal = (cart) => {
    let sum = 0;
    cart.forEach((item) => {
      console.log(item.price);
    });
    return sum;
  };

  const addToCart = (newItem) => {
    const { price } = newItem;
    setCart([...cart, newItem]);
    setTotalCost(totalCost + parseFloat(price));
    console.log(cart);
    console.log('Total cost: ', totalCost);
    // calculateTotal(cart);
  };

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Home
            cart={cart}
            calculateTotal={calculateTotal}
            totalCost={totalCost}
          />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/contact'>
          <Contact />
        </Route>
        <Route path='/items/:id'>
          <ItemDetails
            cart={cart}
            addToCart={addToCart}
            calculateTotal={calculateTotal}
            totalCost={totalCost}
          />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
