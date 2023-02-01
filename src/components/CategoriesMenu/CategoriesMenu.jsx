import CategoriesCard from '../Cards/CategoriesCard';
import { Link } from 'react-router-dom';
import { lang } from '../../dictionary';
import { useContext } from 'react';
import { Context } from '../../AppContext';

const CategoriesMenu = () => {
  const { language } = useContext(Context);

  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-3xl capitalize">{lang(language, 'categories')}</h1>
      <div className="flex justify-between">
        <Link to="/keycaps">
          <CategoriesCard img="keycaps.jpg" title={lang(language, 'keycaps')} />
        </Link>

        <Link to="/keyboards">
          <CategoriesCard
            img="keyboards.jpg"
            title={lang(language, 'keyboards')}
          />
        </Link>

        <Link to="/switches">
          <CategoriesCard
            img="switches.jpg"
            title={lang(language, 'switches')}
          />
        </Link>

        <Link to="/plates">
          <CategoriesCard img="plates.jpg" title={lang(language, 'plates')} />
        </Link>
      </div>
    </div>
  );
};

export default CategoriesMenu;
