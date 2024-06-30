import Footer from "../components/layout/Footer";
import PageWrapper from "../components/layout/PageWrapper";
import Accordion from "../components/ui/Accordion";

const faqData = [
  {
    title: "File jenis apa yang harus disiapkan untuk cetak digital",
    desc: "File bisa disiapkan dalam format seperti PDF, PSD, AI, SVG, CDR, JPEG, serta PNG dengan ukuran sesuai dan menggunakan mode untuk hasil terbaik.",
  },
  {
    title: "Apa saya bisa mencetak dalam jumlah kecil?",
    desc: "Ya, tentu saja bisa! Salah satu keunggulan kami adalah fleksibilitas untuk mencetak dalam jumlah kecil hingga besar sesuai kebutuhan anda.",
  },
  {
    title: "Apa kalian menyediakan layanan desain?",
    desc: "Ya, kami memiliki tim desain yang profesional untuk dapat membantu anda dalam membuat atau mengubah desain sesuai kebutuhan cetak anda.",
  },
  {
    title: "Apa ada diskon untuk pemesanan dalam jumlah besar?",
    desc: "Tentu kami memiliki harga khusus untuk pemesanan dalam jumlah besar. Kami juga memmiliki layanan korporasi yang dapat membantu anda untuk mendapatkan penawaran harga khusus sesuai kebutuhan anda.",
  },
  {
    title: "Apa saya bisa mendapatkan sampel sebelum produksi massal?",
    desc: "Tentu, kami dapat menyediakan proof atau sampel untuk memastikan hasil produksi sesuai dengan ekspektasi anda sebelum memulai produksi massal.",
  },
  {
    title: "Apakah kalian menyediakan layanan pengiriman?",
    desc: "Ya kami menyediakan layanan pengiriman. Untuk biaya dan waktu pengiriman akan bergantung pada lokasi tujuan serta dimensi barang yang akan dikirim.",
  },
];
const FAQ = () => {
  return (
    <PageWrapper customClass={""}>
      <div className="flex flex-col mx-auto gap-5 w-[600px] pb-96">
        <h1 className="text-4xl py-20 font-bold mb-4 text-center">
          Frequently Asked Questions
        </h1>
        <div className=" flex flex-col gap-8">
          {faqData.map((faq, index) => (
            <Accordion key={index} title={faq.title} desc={faq.desc} />
          ))}
        </div>
      </div>
      <Footer></Footer>
    </PageWrapper>
  );
};

export default FAQ;
