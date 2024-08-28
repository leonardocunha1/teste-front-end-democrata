import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { PuffLoader } from "react-spinners";
import useProductsByCategory from "@/features/home/useProductsByCategory";
import Paginate from "@/features/products/Paginate";
import ProductItem from "@/features/products/ProductItem";
import ProductsOperations from "@/features/products/ProductsOperations";

const ITEMS_PER_PAGE = 5;

function Product() {
  const [page, setPage] = useState(1);

  const { data = [], isPending } = useProductsByCategory(); // Garantir que data é um array
  const { idCategory } = useParams();

  useEffect(() => {
    setPage(1);
  }, [idCategory]);

  if (isPending) {
    return (
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center justify-center bg-stone-100">
        <PuffLoader color="#000" size={60} />
      </div>
    );
  }

  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);
  const paginatedData = data.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE,
  );

  return (
    <section className="flex flex-1 flex-col">
      <h3 className="mb-4 text-center text-2xl font-bold md:text-4xl">
        {idCategory == 1 && "Seção Roupas"}
        {idCategory == 2 && "Seção Eletrônicos"}
        {idCategory == 3 && "Seção Diversos"}
      </h3>
      <div className="mx-auto max-w-5xl flex-1">
        <div className="flex justify-end pb-5">
          <ProductsOperations />
        </div>
        <ul className="grid grid-cols-1 place-items-center gap-4 sm:grid-cols-2 sm:gap-20 lg:grid-cols-3">
          {paginatedData.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </ul>
      </div>

      <Paginate
        page={page}
        totalPages={totalPages}
        onPageChange={(newPage) => setPage(newPage)}
      />
    </section>
  );
}

export default Product;
