import { useContext } from 'react';
import { Context } from '../../AppContext';
import total from '../../helpers/total';
import tax from '../../helpers/tax';
import VerticalCard from '../Cards/VerticalCard';
import CloseButton from '../CloseButton/CloseButton';
import { lang } from '../../dictionary';

const Drawer = ({ active, setActive }) => {
  const { cartItems, patchCartItems, language } = useContext(Context);
  return (
    <div className="drawer">
      <div
        onClick={() => setActive(prev => !prev)}
        className={`${
          active ? 'block' : 'hidden'
        } fixed w-full h-screen bg-black opacity-25 top-0
      left-0 hover:cursor-pointer`}
      />
      <div
        className={`${active ? 'flex' : 'hidden'} fixed max-w-sm w-full h-screen
        right-0 top-0 opacity-100 bg-white
        py-4 px-6 justify-between flex-col`}
      >
        <div className="flex flex-col">
          <div className="flex mb-4 justify-between items-center">
            <h1 className="font-semibold capitalize text-2xl">
              {lang(language, 'cartsGoods')}
            </h1>
            <CloseButton onclick={setActive} />
          </div>
          <div className="flex flex-col gap-3 py-4">
            {cartItems &&
              cartItems !== [] &&
              cartItems.map(item => (
                <VerticalCard
                  key={item.id}
                  item={item}
                  patchCartItems={patchCartItems}
                />
              ))}
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex justify-between">
            <h3 className="capitalize">{lang(language, 'total')} :</h3>
            <p>${total(cartItems)}</p>
          </div>
          <div className="border border-dashed border-gray-300 my-2"></div>
          <div className="flex justify-between">
            <h3 className="capitalize">{lang(language, 'tax')} :</h3>
            <p>${tax(total(cartItems), 7.85)}</p>
          </div>
          <div className="flex justify-end mt-4">
            <button
              className="bg-green-500 text-white px-4 py-2
            font-semibold rounded-md hover:scale-105 transition-transform"
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
