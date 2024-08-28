function TextMd({ label }) {
  return (
    <h3 className="font-calistoga mb-6 px-5 text-center text-3xl font-semibold tracking-wider sm:text-4xl">
      {label}
      <span className="text-primary-500"> !</span>
    </h3>
  );
}

export default TextMd;
