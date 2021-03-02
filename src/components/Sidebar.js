import React from 'react';
import Item from './Item';

const Sidebar = ({ totalCost, cart }) => {
  console.log(cart);
  return (
    <div className='sidebar'>
      <div className='sidebar--contact'>
        <h3 className='sidebar--contact-title'>
          <i class='fas fa-address-book'></i>
          Contact
        </h3>
        <div className='sidebar--contact-text'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam purus
          est, placerat sed ante vel, ultrices congue augue.
        </div>
      </div>
      <div className='sidebar--cart'>
        <h3 className='sidebar--cart-title'>
          <i class='fas fa-shopping-cart'></i>
          Cart
        </h3>
        <div className='sidebar--cart-item-container'>
          {cart.length > 0 ? (
            cart.map((item) => <Item item={item} />)
          ) : (
            <p className='empty'>Cart is empty</p>
          )}
        </div>
        <div className='sidebar--cart-total'>
          Total: <strong>{totalCost}</strong> $
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
