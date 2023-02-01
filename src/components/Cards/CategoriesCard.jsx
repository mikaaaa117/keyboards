const CategoriesCard = ({ img, title }) => {
  return (
    <div
      className="rounded-sm shadow-sm max-w-max
      hover:cursor-pointer hover:shadow-xl bg-white
      hover:-translate-y-3 transition-all"
    >
      <img
        src={`img/categories/${img}` || 'img/categories/keycaps.jpg'}
        alt="keycaps"
      />
      <h2 className="text-center capitalize px-7 py-7 text-2xl">
        {title || 'Keycaps'}
      </h2>
    </div>
  );
};

export default CategoriesCard;
