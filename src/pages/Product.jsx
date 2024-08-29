import { PuffLoader } from "react-spinners";

import useCleanImgUrl from "@/hooks/useCleanImgUrl";
import useProductsByCategory from "@/features/products/useProductsByCategory";

import Paginate from "@/ui/Paginate";
import ProductItem from "@/features/products/ProductItem";
import ProductsOperations from "@/features/products/ProductsOperations";
import TextMd from "@/ui/TextMd";
import usePagination from "@/hooks/usePagination";

function Product() {
  const { data = [], isPending, idCategory } = useProductsByCategory();
  const arr = useCleanImgUrl(data);
  const { paginatedData, totalPages } = usePagination(arr);

  return (
    <section className="flex flex-1 flex-col pb-6">
      <TextMd
        label={`${idCategory == 1 ? "Seção Roupas" : ""}
        ${idCategory == 2 ? "Seção Eletrônicos" : ""}
        ${idCategory == 3 ? "Seção Diversos" : ""}`}
      />

      <div className="mx-auto flex w-full max-w-5xl justify-end px-5 pb-5">
        <ProductsOperations idCategory={idCategory} />
      </div>

      {isPending ? (
        <div className="flex h-64 items-center justify-center">
          <PuffLoader color="#000" size={60} />
        </div>
      ) : arr.length > 0 ? (
        <div className="mx-auto flex w-full max-w-5xl flex-1 flex-col px-5">
          <ul
            className={`grid flex-1 grid-cols-1 place-content-start place-items-center gap-y-5 xl:place-items-start ${data.length > 1 ? "sm:grid-cols-2 lg:grid-cols-3" : ""}`}
          >
            {paginatedData.map((product) => (
              <ProductItem key={product.id} product={product} />
            ))}
          </ul>
          {totalPages > 1 && <Paginate totalPages={totalPages} />}
        </div>
      ) : (
        <h3 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
          Nenhum produto encontrado
        </h3>
      )}
    </section>
  );
}

export default Product;
