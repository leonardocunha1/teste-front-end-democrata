import { getProductsByCategory } from "@/services/data-services";
import { useQuery } from "@tanstack/react-query";
import { useParams, useSearchParams } from "react-router-dom";

function useProductsByCategory() {
  const { idCategory } = useParams();
  const [searchParams] = useSearchParams();

  // paginação
  const page = searchParams.get("page") || 1;

  // preço minimo
  const priceMin = searchParams.get("priceMin") || null;

  // preço máximo
  const priceMax = searchParams.get("priceMax") || null;

  // título
  const title = searchParams.get("title") || null;

  const { data, isPending, error } = useQuery({
    queryKey: ["products", idCategory, page, priceMin, priceMax, title],
    queryFn: () =>
      getProductsByCategory(idCategory, page, priceMin, priceMax, title),
    refetchInterval: 5000, // 5 segundos de intervalo para refetch
  });

  return { data, isPending, error };
}

export default useProductsByCategory;
