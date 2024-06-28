const Card = ({ title, image }) => {
  return (
    <div className="w-fit h-fit ">
      <div className="w-64 h-72">
        <img src={image} alt="" className="w-full h-full" />
      </div>
      <h1 className="font-bold text-center text-black pt-5">{title}</h1>
    </div>
  );
};

export default Card;
