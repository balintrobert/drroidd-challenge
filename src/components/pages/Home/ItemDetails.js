import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import Sidebar from '../../Sidebar';

const ItemDetails = ({ cart, addToCart, totalCost }) => {
  const { id } = useParams();
  const { data: item, error, isPending } = useFetch(
    `http://localhost:3001/items/${id}`
  );

  const [added, setAdded] = useState(false);

  const handleAddToCart = (item) => {
    addToCart(item);
    setAdded(true);
  };

  return (
    <div className='home'>
      <Sidebar cart={cart} totalCost={totalCost} />
      <div className='single-item'>
        {isPending && <div>Loading...</div>}
        {error && <div>{error}</div>}
        {item && (
          <>
            <img src={item.image} alt='' />
            <div className='bottom'>
              <div className='left-side'>
                <h2 className='single-item--title'>{item.title}</h2>
                <p className='single-item--description'>{item.description}</p>
              </div>
              <div className='right-side'>
                <button
                  className={added ? 'added' : ''}
                  onClick={() => {
                    handleAddToCart(item);
                  }}
                  disabled={added}
                >
                  {added ? 'Added' : 'Add to Cart'}
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ItemDetails;
