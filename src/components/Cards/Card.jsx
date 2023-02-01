import * as React from 'react';
import AddButton from '../AddButton/AddButton';
import { useState, useEffect, useContext } from 'react';
import { Context } from '../../AppContext';
import truncateString from '../../helpers/truncateString';

const Card = ({ item }) => {
  const [active, setActive] = useState(false);
  const { cartItems, patchCartItems } = useContext(Context);
  useEffect(() => {
    const state = cartItems.some(obj => obj.id === item.id);
    setActive(state);
  }, [cartItems, item.id]);

  return (
    <div
      className="flex flex-col justify-between max-w-fit mx-auto border border-slate-50 rounded-sm p-3
      transition-all shadow-sm hover:shadow-lg hover:-translate-y-1"
    >
      <img
        className="w-64 mx-auto"
        src={`img/products/${item.img}` || 'img/products/keychron-v1.webp'}
        alt="Keyboard"
      />
      <div className="flex flex-col">
        <span className="text-xl leading-6 overflow-hidden">
          {truncateString(item.title, 50) || 'Keychron V1'}
        </span>
        <div className="flex justify-between items-end">
          <span className="text-lg">{`$${item.price}` || '$99'}</span>
          <AddButton
            active={active}
            onclick={() => patchCartItems(active, item)}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
