const Footer = () => {
  return (
    <div className="h-fit">
      <div className="bg-black text-white flex items-center  h-72 px-20">
        <img
          src="/public/images/LogoSeka.png"
          alt="Logo Seka"
          className="h-20 aspect-auto object-fit object-center object-cover"
        />
        <div className="flex ml-52 gap-10 w-full justify-between ">
          <div>
            <h1 className="pb-3 text-xl font-bold">Jam Operasional</h1>
            <p>Senin - Sabtu : 08:15 - 17:00 WIB</p>
          </div>
          <div>
            <h1 className="pb-3 text-xl font-bold">Jam Operasional</h1>
            <div className="flex flex-col gap-2">
              <p>Jl. H. Djairi No.01W, RT.1 RW.2</p>
              <p>Rawa Buaya, Kecamatan Cengkareng</p>
              <p>Kota Jakarta Barat, Jakarta 11740</p>
            </div>
          </div>
          <div>
            <h1 className="pb-3 text-xl font-bold">Hubungi Kami</h1>
            <div className="flex flex-col gap-2">
              <p>contact.sekastudio@gmail.com</p>
              <p>0852 - 8000 - 2140</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p>© 2024 Seka Studio. - All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
