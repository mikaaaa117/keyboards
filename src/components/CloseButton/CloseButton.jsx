import './CloseButton.scss';

const CloseButton = ({ onclick }) => {
  return (
    <div
      onClick={() => onclick()}
      className="close-button flex items-center justify-center 
    w-7 h-7 rounded-md border-2 border-[#a9b2b0] hover:cursor-pointer
    hover:scale-110 transition-transform"
    />
  );
};

export default CloseButton;
