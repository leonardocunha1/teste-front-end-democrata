function HeroImg({ src, srcSm, alt }) {
  return (
    <div className="flex justify-center">
      <img
        src={src}
        alt={alt}
        className="hidden h-[296px] object-fill sm:block"
      />
      <img src={srcSm} alt={alt} className="h-[424px] object-fill sm:hidden" />
    </div>
  );
}

export default HeroImg;
