import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../services/data-services";

function useProducts() {
  const {
    data: products,
    error,
    isPending,
  } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  return { products, error, isPending };
}

export default useProducts;
