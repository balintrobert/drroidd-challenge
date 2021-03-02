import React from 'react';
import { Link } from 'react-router-dom';

const ItemList = ({ items }) => {
  return (
    <div className='items--container'>
      {items.map((item) => (
        <div className='item' key={item.id}>
          <Link to={`/items/${item.id}`}>
            <img src={item.image} alt='' />
            <span className='item--price'>{`${item.price} $`}</span>
            <h3 className='item--title'>{item.title}</h3>
            <p className='item--description'>{item.description}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
