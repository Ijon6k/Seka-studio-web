import Footer from "../components/layout/Footer";
import PageWrapper from "../components/layout/PageWrapper";
import InputForm from "../components/ui/InputForm";

const HubungiKami = () => {
  return (
    <PageWrapper>
      <section className="w-full flex justify-center items-center bg-[url('/images/TentangKamiBG.webp')] text-white h-64 font-bold text-4xl bg-cover bg-[center_top_-110px]">
        <h1>
          Hubungi <span className="text-red-600">K</span>ami{" "}
        </h1>
      </section>
      <main className="w-full flex justify-between items-center h-fit p-20  ">
        <div className="text-gray-400 flex flex-col gap-10">
          <h1 className="text-xl font-semibold ">SEKA Studio</h1>
          <p className="w-64 ">
            Jl. H. Djairi No.01W, RT.1 RW.2 Rawa Buaya, Kecamatan Cengkareng
            Kota Jakarta Barat, Jakarta 11740
          </p>
          <p className="w-64 ">
            Senin - Sabtu : 08:15 - 17:00 WIB
            <br />
            contact.sekastudio@gmail.com
            <br />
            0852 - 8000 - 2140
          </p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2751.464074241674!2d106.7416649210166!3d-6.156949137230078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f77dfc2524ab%3A0x8dac09d29a4372aa!2sSeka%20Studio%20Digital%20Printing!5e0!3m2!1sen!2sid!4v1719734007796!5m2!1sen!2sid"
            width="500"
            height="450"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
        <div className="w-96 ">
          <form action="" className="flex flex-col gap-5">
            <h1>Contact Form</h1>
            <InputForm
              label="Your Name"
              type="text"
              placeholder={"Your Name"}
              required={true}
            ></InputForm>
            <InputForm
              label="Your Email"
              type="email"
              placeholder={"example@email.com"}
              required={true}
            ></InputForm>
            <InputForm label="Subject" type="text"></InputForm>
            <label htmlFor="">Your Message</label>
            <textarea
              name="message"
              id=""
              className="mt-1 block w-full max-h-screen px-3 py-2 border border-gray-400 rounded-md  focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
            ></textarea>
            <button className="px-8  py-3 flex text-white text-xl items-center  w-fit gap-3 bg-red-600 shadow-custom-shadow rounded-xl">
              Send{" "}
              <span>
                <img src="/icon/plane.png" alt="" />
              </span>
            </button>
          </form>
        </div>
      </main>
      <Footer></Footer>
    </PageWrapper>
  );
};

export default HubungiKami;
