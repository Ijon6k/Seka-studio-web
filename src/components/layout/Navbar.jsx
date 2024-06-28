import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="fixed items-center h-16 w-screen flex top-0 max-w-screen-2xl mx-auto border-b-4 border-red-600">
      <ul className="flex gap-5 w-full justify-around">
        <li>Webtitle</li>
        <li>
          <Link to="/">Beranda</Link>
        </li>
        <li>
          <Link to="/tentang-kami">Tentang Kami</Link>
        </li>
        <li>
          <Link to="/produk">Produk</Link>
        </li>
        <li>
          <Link to="/portofolio">Portofolio</Link>
        </li>
        <li>
          <Link to="/faq">FAQ</Link>
        </li>
        <li>
          <Link to="/hubungi-kami">Hubungi Kami</Link>
        </li>
        <li>
          <Link
            to="/layanan-korporasi"
            className="p-3 rounded-xl text-white bg-red-600 shadow-xl"
          >
            Layanan Korporasi
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
