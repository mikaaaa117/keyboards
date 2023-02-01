import * as React from 'react';
import { useContext } from 'react';
import { Context } from '../../AppContext';
import CartIcon from '../CartIcon/CartIcon';
import total from '../../helpers/total';
import { Link } from 'react-router-dom';

const Header = ({ setDrawerActive }) => {
  const { cartItems } = useContext(Context);
  return (
    <header>
      <div className="flex max-w-5xl px-6 lg:px-0 w-full mx-auto py-5 items-center justify-between">
				<Link to="/">
					<h1 className="text-4xl font-semibold">CBoards</h1>
				</Link>
        <div
          onClick={() => setDrawerActive(prev => !prev)}
          className="flex gap-3 items-center justify-between hover:cursor-pointer"
        >
          <CartIcon />
          <p className="flex items-center justify-center leading-none text-lg">
            ${total(cartItems)}
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
