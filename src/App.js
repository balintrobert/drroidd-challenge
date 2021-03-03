import React, { useState } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './components/pages/Home/Home';
import About from './components/pages/About/About';
import Contact from './components/pages/Contact/Contact';
import ItemDetails from './components/pages/Home/ItemDetails';

const App = () => {
  const [cart, setCart] = useState([]);
  const [totalCost, setTotalCost] = useState(0);

  const addToCart = (newItem) => {
    const { price } = newItem;
    setCart([...cart, newItem]);
    setTotalCost(totalCost + parseFloat(price));
  };

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Home cart={cart} totalCost={totalCost} />
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
            totalCost={totalCost}
          />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
