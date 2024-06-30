import PageWrapper from "../components/layout/PageWrapper";

const LayananKorporasi = () => {
  return (
    <PageWrapper customClass={"flex"}>
      <aside className="sticky right-0 w-96 h-screen bg-red-600"></aside>
      <section className="flex-1  px-20 py-10">
        <div className="py-10 pb-20 border-b-2  border-slate-300">
          <h1 className="text-3xl pb-5 font-semibold text-red-500 ">
            Let’s Collaborate!{" "}
          </h1>
          <p>
            Apa anda siap untuk mewujudkan visualisasi produk anda ke bentuk
            yang anda inginkan? Atau, anda masih butuh informasi lain mengenai
            produk serta layanan kami? Kirim pesan anda kepada kami dan kami
            akan segera menghubungi anda.
          </p>
        </div>
        <div></div>
        <div></div>
        <div></div>
      </section>
    </PageWrapper>
  );
};

export default LayananKorporasi;
