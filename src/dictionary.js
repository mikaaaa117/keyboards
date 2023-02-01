const dictionary = {
  en: {
    categories: 'categories',
    allProducts: 'all products',
    keycaps: 'keycaps',
    switches: 'switches',
    plates: 'plates',
    keyboards: 'keyboards',
    footerSubtitle: 'the best mechanical keyboards',
    english: 'english',
    russian: 'russian',
    cartsGoods: "cart's goods",
    total: 'total',
    tax: 'tax'
  },
  ru: {
    categories: 'категории',
    allProducts: 'все товары',
    keycaps: 'клавиши',
    switches: 'свитчи',
    plates: 'плейты',
    keyboards: 'клавиатуры',
    footerSubtitle: 'лучшие механические клавиатуры',
    english: 'английский',
    russian: 'русский',
    cartsGoods: 'все товары',
    total: 'итого',
    tax: 'налог'
  }
};

export const lang = (language, word) => {
  return dictionary[language][word];
};
