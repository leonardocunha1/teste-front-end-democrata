import BlogCard from "./BlogCard";
import bgOurBlog1 from "/homeimg/bg-our-blog1.jpg";
import bgOurBlog2 from "/homeimg/bg-our-blog2.jpg";
import bgOurBlog3 from "/homeimg/bg-our-blog3.jpg";

function OurBlog() {
  return (
    <div className="grid flex-1 grid-cols-2 gap-1">
      <BlogCard image={bgOurBlog1} title="Moda" />
      <BlogCard image={bgOurBlog2} title="Dicas de Relógios" />
      <div className="relative col-start-1 col-end-3">
        <BlogCard image={bgOurBlog3} title="Lançamentos" />
      </div>
    </div>
  );
}

export default OurBlog;
