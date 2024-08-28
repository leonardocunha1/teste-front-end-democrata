import useCategories from "./useCategories";

function Categorias() {
  const { categories = [], isPending } = useCategories();

  const tresCategorias = categories.slice(0, 3);

  if (isPending) {
    return <p>Carregando...</p>;
  }

  return (
    <section className="mx-auto max-w-5xl p-5">
      {/* <TextMd label="Categorias" /> */}
      <ul className="flex items-center justify-around gap-5 sm:flex-row sm:justify-between sm:gap-10">
        {tresCategorias.map((category) => (
          <li className="relative" key={category.id}>
            <img
              src={category.image}
              alt={category.name}
              className="h-20 w-20 object-cover sm:h-36 sm:w-52"
            />
            <p className="text-center font-semibold text-stone-800 lg:text-base">
              {category.name}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Categorias;
