import Destaques from "@/features/home/Destaques";
import NewArrivals from "@/features/home/NewArrivals";
import Hero from "@/features/home/Hero";
import OurStory from "@/features/home/OurStory";
import OurBlog from "@/features/home/OurBlog";
import Infos from "@/features/home/Infos";

function Home() {
  return (
    <>
      <Hero />
      <Infos />
      <NewArrivals />
      <section className="mx-auto flex max-w-5xl flex-col gap-1 px-5 py-10 sm:flex-row">
        <OurStory />
        <OurBlog />
      </section>
      <Destaques />
    </>
  );
}

export default Home;
