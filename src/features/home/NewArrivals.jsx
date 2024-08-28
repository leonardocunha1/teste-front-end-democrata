import { useState } from "react";
import { PuffLoader } from "react-spinners";

import useProducts from "@/features/home/useProducts";
import NewArrivalsItem from "@/features/home/NewArrivalsItem";

function NewArrivals() {
  const { products = [], isPending } = useProducts();
  const [showMore, setShowMore] = useState(false);

  const visibleProducts = showMore
    ? products.slice(0, 6)
    : products.slice(0, 3);

  function toggleShowMore() {
    setShowMore((prevShowMore) => !prevShowMore);
  }

  if (isPending) {
    return (
      <div className="flex h-[400px] items-center justify-center bg-stone-100">
        <PuffLoader color="#000" size={60} />
      </div>
    );
  }

  return (
    <section className="bg-stone-100 px-4 py-6">
      <div className="mx-auto flex flex-col">
        <h3 className="mb-2 text-center text-xl font-semibold md:text-2xl">
          Novidades
        </h3>
        <div className="mx-auto mb-6 h-1 w-20 bg-stone-900"></div>
        <ul className="mx-auto grid gap-4 sm:grid-cols-2 sm:gap-20 lg:grid-cols-3">
          {visibleProducts.map((product) => (
            <NewArrivalsItem key={product.id} product={product} /> // Usa o novo componente
          ))}
        </ul>
        <button
          onClick={toggleShowMore}
          className="mx-auto mt-6 rounded-full border-2 border-stone-900 px-6 py-2 text-sm text-stone-900"
        >
          {showMore ? "Ver menos" : "Ver mais"}
        </button>
      </div>
    </section>
  );
}

export default NewArrivals;
