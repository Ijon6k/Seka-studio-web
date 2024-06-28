import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import TentangKami from "./pages/TentangKami";
import Produk from "./pages/Produk";
import Portofolio from "./pages/Portofolio";
import FAQ from "./pages/FAQ";
import HubungiKami from "./pages/HubungiKami";
import LayananKorporasi from "./pages/LayananKorporasi";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tentang-kami" element={<TentangKami />} />
        <Route path="/produk" element={<Produk />} />
        <Route path="/portofolio" element={<Portofolio />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/Hubungi-kami" element={<HubungiKami />} />
        <Route path="/layanan-korporasi" element={<LayananKorporasi />} />
      </Routes>
    </Router>
  );
};

export default App;
