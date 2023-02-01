import { useContext } from 'react';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

import { lang } from '../../dictionary';
import { Context } from '../../AppContext';
import Card from '../Cards/Card';
import CardLoader from '../CardLoader/CardLoader';

const ProductsList = () => {
  const { category } = useParams();
  const { language } = useContext(Context);
  const { isLoading, error, data } = useQuery(
    ['fetchData', category],
    async () => await (await axios.get('http://localhost:5000/products')).data,
    {
      select: data => {
        if (category) return data.filter(item => item.tag === category);

        return data;
      }
    }
  );
  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-3xl capitalize">
        {lang(language, category || 'allProducts')}
      </h1>
      <div className="grid grid-cols-1 gap-x-14 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
        {isLoading &&
          [...Array(6)].map((item, index) => <CardLoader key={index} />)}
        {!isLoading &&
          !error &&
          data.map(item => <Card key={item.id} item={item} />)}
        {!isLoading && error && <h1>Произошла ошибка при загрузке товаров.</h1>}
      </div>
    </div>
  );
};

export default ProductsList;
