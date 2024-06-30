import Footer from "../components/layout/Footer";
import PageWrapper from "../components/layout/PageWrapper";

const TentangKami = () => {
  return (
    <PageWrapper>
      <section className="w-full flex justify-center items-center bg-[url('/images/TentangKamiBG.webp')] text-white h-64 font-bold text-4xl bg-cover bg-[center_top_-110px]">
        <h1>
          T<span className="text-red-600">e</span>ntang Kami{" "}
        </h1>
      </section>
      <section className="px-20 w-full ">
        <div className="flex gap-28 w-max-screen-xl  text-lg items-center justify-between font-semibold">
          <img src="/images/person1.png" alt="person1" />
          <p className=" leading-loose text-xl">
            <span className="font-bold">
              S<span className="text-red-600">E</span>KA STUDIO
            </span>{" "}
            lahir serta tumbuh sebagai Creative Organizer Company yang berfokus
            pada kebutuhan B2B, menawarkan solusi dari kebutuhan kreatif seperti
            Event Organizing, Advertising, hingga Digitial Printing untuk
            memenuhi kebutuhan kegiatan serta instansi. Demi mewujudkan visi
            misi kami, saat ini SEKA STUDIO berdiri bersama PT ALFA MEDIA
            INTEGRASI menawarkan solusi kreatif dengan berkomitmen memberikan
            pelayanan terbaik dari jasa yang kami miliki.
          </p>
        </div>
        <div className="flex gap-28 w-full px-18 text-lg items-center justify-between font-semibold">
          <p className=" leading-loose text-xl">
            Kami menempatkan kepuasan anda sebagai prioritas utama, karena kami
            percaya kerjasama yang erat merupakan kunci kesuksesan yang utama.
            Karena itu juga, kami berusaha untuk tidak hanya mencetak, tetapi
            juga untuk merangkul kreativitas, ketelitian, dan dedikasi dalam
            setiap hasil yang kami kerjakan. Dengan{" "}
            <span className="font-bold">
              S<span className="text-red-600">E</span>KA STUDIO
            </span>
            , anda dapat memahami bahwa kami bukan hanya menjadi penyedia
            jasa,tetapi juga menjadi mitra rekanan yang mendukung pertumbuhan
            serta kesuksesan bisnis anda.
          </p>
          <img src="/images/person2.png" alt="person1" />
        </div>
      </section>
      {/*  */}
      <section className="w-full px-20">
        <h1 className="text-center font-bold text-3xl">
          Mengapa S<span className="text-red-600">e</span>ka Studio
        </h1>
        <div className="grid grid-cols-1 place-items-center py-20  md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/*  */}
          <div className="w-64 ">
            <div className="flex  gap-5 pb-3 ">
              <img src="/icon/cart.png" alt="" />
              <h1 className="text-xl font-bold">Competitive Pricing</h1>
            </div>
            <p className="text-justify">
              Harga kompetitif, dengan kualitas serta penawaran terbaik untuk
              memastikan anggaran anda tetap terjaga dengan sempurna.
            </p>
          </div>
          {/*  */}
          {/*  */}
          <div className="w-64 ">
            <div className="flex  gap-5 pb-3 ">
              <img src="/icon/box.png" alt="" />
              <h1 className="text-xl font-bold">Flexible Quantity</h1>
            </div>
            <p className="text-justify">
              Memudahkan kustomisasi pesanan. Melayani pesanan dengan kuantitas
              yang fleksible sesuai dengan kebutuhan.
            </p>
          </div>
          {/*  */}
          {/*  */}
          <div className="w-64 ">
            <div className="flex  gap-5 pb-3 ">
              <img src="/icon/cells.png" alt="" />
              <h1 className="text-xl font-bold">Fast Service</h1>
            </div>
            <p className="text-justify">
              Solusi cepat dan efisien dengan hasil yang berkualitas tinggi
              untuk kebutuhan yang bersifat mendesak.
            </p>
          </div>
          {/*  */}
          {/*  */}
          <div className="w-64 ">
            <div className="flex  gap-5 pb-3 ">
              <img src="/icon/team.png" alt="" />
              <h1 className="text-xl font-bold">Professional Team</h1>
            </div>
            <p className="text-justify">
              Didukung oleh tim desain serta produksi yang professional untuk
              memastikan setiap rancangan yang dibuat sesuai dengan permintaan.
            </p>
          </div>
          {/*  */}
          {/*  */}
          <div className="w-64 ">
            <div className="flex  gap-5 pb-3 ">
              <img src="/icon/time.png" alt="" />
              <h1 className="text-xl font-bold">One-top Printing</h1>
            </div>
            <p className="text-justify">
              Menawarkan beragam produk cetak dalam satu tempat untuk memenuhi
              semua kebutuhan instansi serta kegiatan anda.
            </p>
          </div>
          {/*  */}
          {/*  */}
          <div className="w-64 ">
            <div className="flex  gap-5 pb-3 ">
              <img src="/icon/crosshair.png" alt="" />
              <h1 className="text-xl font-bold">High Accuracy</h1>
            </div>
            <p className="text-justify">
              Hasil produksi kami memiliki akurasi yang tinggi sesuai dengan
              permintaan. Baik dari segi gambar hingga kualitas warna.
            </p>
          </div>
          {/*  */}
        </div>
      </section>
      <Footer></Footer>
    </PageWrapper>
  );
};

export default TentangKami;
