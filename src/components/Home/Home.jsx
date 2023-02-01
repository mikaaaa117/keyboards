import * as React from 'react';
import Footer from '../Footer/Footer';
import CategoriesMenu from '../CategoriesMenu/CategoriesMenu';
import AppRouter from '../AppRouter/AppRouter';

const Home = () => {
  return (
    <div className="flex max-w-5xl justify-between w-full min-h-screen gap-8 mx-auto bg-white rounded-md px-10 py-12 flex-col">
      <div className="flex flex-col gap-8">
        <CategoriesMenu />
        <AppRouter />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
