import React from 'react';
import useFetch from '../../hooks/useFetch';
import Sidebar from '../../Sidebar';
import ItemList from './ItemList';

const Home = ({ cart, totalCost }) => {
  const { data: items, error, isPending } = useFetch(
    `http://localhost:3001/items`
  );

  return (
    <div className='home'>
      <Sidebar cart={cart} totalCost={totalCost} />
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {items && <ItemList items={items} cart={cart} />}
    </div>
  );
};

export default Home;
