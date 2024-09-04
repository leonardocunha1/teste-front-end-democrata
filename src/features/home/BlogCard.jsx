function BlogCard({ image, title }) {
  return (
    <div
      className="relative flex cursor-pointer flex-col items-center duration-200 hover:grayscale"
      onClick={() => alert(`Blog de ${title} aberto!`)}
    >
      <img src={image} alt={title} className="h-64 w-full object-cover" />
      <div className="absolute bottom-1/2 top-1/2">
        <h4 className="text-center text-xl italic">{title}</h4>
      </div>
    </div>
  );
}

export default BlogCard;
