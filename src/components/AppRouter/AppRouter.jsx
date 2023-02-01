import { Routes, Route } from 'react-router-dom';
import ProductsList from '../ProductsList/ProductsList';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<ProductsList />} />
      <Route path="/:category" element={<ProductsList />} />
    </Routes>
  );
};

export default AppRouter;
