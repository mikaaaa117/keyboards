import AddButton from '../AddButton/AddButton';
import truncateString from '../../helpers/truncateString';

const VerticalCard = ({ item, patchCartItems }) => {
  return (
    <div
      className="flex items-center justify-between px-2 w-full border
        border-slate-50 bg-white rounded-lg shadow-md gap-3"
    >
      <img
        className="w-28"
        src={`img/products/${item.img}`}
        alt="Keychron v1"
      />
      <div className="flex flex-col flex-1">
        <h3>{truncateString(item.title, 30)}</h3>
        <p>${item.price}</p>
      </div>
      <AddButton active={true} onclick={() => patchCartItems(true, item)} />
    </div>
  );
};

export default VerticalCard;
