import { getProductsByCategory } from "@/services/data-services";
import { useQuery } from "@tanstack/react-query";
import { useParams, useSearchParams } from "react-router-dom";

function useProductsByCategory() {
  const { idCategory } = useParams();
  const [searchParams] = useSearchParams();

  // preço minimo
  const priceMin = searchParams.get("priceMin") || null;

  // preço máximo
  const priceMax = searchParams.get("priceMax") || null;

  const { data, isPending } = useQuery({
    // toda vez que os valores de idCategory, priceMin ou priceMax mudarem, a query é re-execut
    queryKey: ["products", idCategory, priceMin, priceMax],
    queryFn: () => getProductsByCategory(idCategory, priceMin, priceMax),
    refetchInterval: 5000,
  });

  return { data, isPending, idCategory };
}

export default useProductsByCategory;
