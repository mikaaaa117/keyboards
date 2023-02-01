import * as React from 'react';
import { useContext } from 'react';
import { Context } from '../../AppContext';
import { lang } from '../../dictionary';

const Footer = () => {
  const { language, setLanguage } = useContext(Context);
  return (
    <div className="flex justify-between mt-16 px-8">
      <div className="flex flex-col gap-2">
        <h4 className="font-medium">&copy; 2022 CBoards</h4>
        <hr />
        <p className="capitalize">{lang(language, 'footerSubtitle')}</p>
      </div>
      <div className="flex items-center">
        <select value={language} onChange={e => setLanguage(e.target.value)}>
          <option className="capitalize" value="en">
            {lang(language, 'english')}
          </option>
          <option className="capitalize" value="ru">
            {lang(language, 'russian')}
          </option>
        </select>
      </div>
    </div>
  );
};

export default Footer;
