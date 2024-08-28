import { useQuery } from "@tanstack/react-query";
import { getCategories } from "../../services/data-services";

function useCategories() {
  const {
    data: categories,
    error,
    isPending,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });

  return { categories, error, isPending };
}

export default useCategories;
