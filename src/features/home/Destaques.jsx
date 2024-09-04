import { PuffLoader } from "react-spinners";
import useCategories from "./useCategories";

function Categorias() {
  const { categories = [], isPending } = useCategories();

  // pegando as 3 primeiras categorias
  const tresCategorias = categories.slice(0, 3);

  if (isPending) {
    return <PuffLoader color="#000" size={60} />;
  }

  return (
    <section className="mx-auto p-5">
      <ul className="flex gap-5 sm:flex-row sm:gap-10">
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
