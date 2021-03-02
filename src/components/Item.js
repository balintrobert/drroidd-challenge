import React from 'react';

const Item = ({ item }) => {
  return (
    <div className='sidebar--cart-item'>
      <span className='number'>{item.price}</span>
      <span className='title'>{item.title}</span>
    </div>
  );
};

export default Item;
