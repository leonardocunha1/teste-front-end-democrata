function InfosItem({ icon: Icon, title, description, hasBorder }) {
  return (
    <div
      className={`flex w-60 max-w-full flex-1 flex-col items-center rounded-lg px-2 py-3 ${
        hasBorder ? "border-b sm:border-b-0 sm:border-r" : ""
      }`}
    >
      <Icon className="h-8 w-8 sm:h-10 sm:w-10" />
      <h3 className="font-semibold">{title}</h3>
      <p className="mt-2 text-center">{description}</p>
    </div>
  );
}

export default InfosItem;
