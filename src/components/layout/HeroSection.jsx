import webLogo from "../../assets/image/LogoSeka.png";
const HeroSection = () => {
  return (
    <div className="w-full h-96 relative  bg-black/50">
      <div className=" p-10 font-semibold text-white">
        <h1 className=" text-3xl font-semibold pb-3">
          Partner handal produksi kebutuhan kreatif untuk
        </h1>
        <h1 className=" text-5xl">
          K<span className="text-red-600">e</span>giatan & Instansi{" "}
          <span className="text-3xl">anda</span>
        </h1>
      </div>
      <img
        src={webLogo}
        alt="logo"
        className="h-20 aspect-auto absolute bottom-10 right-7"
      />
    </div>
  );
};

export default HeroSection;
