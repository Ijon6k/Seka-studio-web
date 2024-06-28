import Footer from "../components/layout/Footer";
import HeroSection from "../components/layout/HeroSection";
import PageWrapper from "../components/layout/PageWrapper";
import Benefit from "../components/ui/Benefit";
import Card from "../components/ui/Card";
import data from "../ProductInterest.json";

const Home = () => {
  return (
    <PageWrapper customClass={""}>
      <HeroSection></HeroSection>
      <section className="grid mx-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center max-w-screen-xl w-screen  p-10 gap-20 ">
        {data.map((course, index) => (
          <Card key={index} image={course.image} title={course.title} />
        ))}
      </section>
      {/* tentang kami */}
      <section className="bg-black/50 h-fit py-10 w-full flex ">
        <div className="w-fit m-auto px-20 flex justify-center flex-col">
          {" "}
          <h1 className="text-center text-white font-bold text-3xl pb-5">
            T<span className="text-red-600">e</span>ntang Kami
          </h1>
          <p className="text-white font-semibold ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil
            quibusdam nulla quis, fugit libero porro ipsum reprehenderit
            doloribus dolor veniam nostrum voluptas molestias vel, quos quae
            odio. Quia et molestiae ex, placeat, fuga tempore obcaecati aliquid,
            repellendus doloribus perspiciatis impedit ipsa necessitatibus odio
            harum possimus exercitationem minima. Impedit eligendi esse minima
            quasi, perferendis magni itaque sed tenetur adipisci, reiciendis
            unde, sit iusto quibusdam accusamus earum odit veritatis error totam
            aliquid ex vitae ipsum incidunt ratione? Sapiente tempore molestiae
            tempora iusto fugiat commodi, rerum deleniti pariatur voluptates
            minima nesciunt quas praesentium, quidem quis ullam quisquam sit
            doloremque quasi, ea rem eligendi.
          </p>
          <button className="bg-black/50 shadow-md rounded-xl py-2 font-semibold mt-5 px-3 text-white mx-auto">
            Read more
          </button>
        </div>
      </section>
      <section className="flex items-center justify-between max-w-screen-xl w-full mx-auto h-[450px]">
        <Benefit></Benefit>
        <Benefit></Benefit>
        <Benefit></Benefit>
      </section>
      <section className="w-auto h-[500px] bg-red-200"></section>
      <section className="w-full h-[400px] flex flex-col ">
        <h1 className="text-center text-3xl font-bold m-auto">
          Kli<span className="text-red-600">e</span>n kami
        </h1>
      </section>
      <Footer></Footer>
    </PageWrapper>
  );
};

export default Home;
