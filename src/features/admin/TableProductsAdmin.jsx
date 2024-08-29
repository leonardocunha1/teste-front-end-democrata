import { PuffLoader } from "react-spinners";

import useProducts from "@/features/home/useProducts";
import useCleanImgUrl from "@/hooks/useCleanImgUrl";
import usePagination from "@/hooks/usePagination";

import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/ui/table";

import Paginate from "@/ui/Paginate";
import ProductRow from "@/features/admin/TableRowAdmin";
import Empty from "@/ui/Empty";

function TableProductsAdmin() {
  const { products, isPending } = useProducts();

  // filtrando os produtos apenas das categorias 1, 2 e 3
  const filteredProducts = products?.filter(
    (product) =>
      product.category.id === 1 ||
      product.category.id === 2 ||
      product.category.id === 3,
  );

  // limpando a url das imagens dos produtos
  const arr = useCleanImgUrl(filteredProducts);

  // pegando os dados paginados e o total de páginas
  const { paginatedData, totalPages } = usePagination(arr);

  return (
    <>
      {isPending ? (
        <div className="flex h-64 items-center justify-center">
          <PuffLoader color="#000" size={60} />
        </div>
      ) : arr?.length > 0 ? (
        <div className="mx-auto flex w-full max-w-5xl flex-1 flex-col">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Imagem</TableHead>
                <TableHead>Nome</TableHead>
                <TableHead>Preço</TableHead>
                <TableHead>Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginatedData?.map((product) => (
                <ProductRow key={product.id} product={product} />
              ))}
            </TableBody>
          </Table>
          <Paginate totalPages={totalPages} />
        </div>
      ) : (
        <Empty>Nenhum produto encontrado</Empty>
      )}
    </>
  );
}

export default TableProductsAdmin;
