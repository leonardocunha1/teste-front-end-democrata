import { ITEMS_PER_PAGE } from "@/lib/constants";
import { useSearchParams } from "react-router-dom";

function usePagination(arr) {
  const [searchParams] = useSearchParams();

  const page = Number(searchParams.get("page")) || 1;
  const totalPages = Math.ceil(arr?.length / ITEMS_PER_PAGE);
  const paginatedData = arr?.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE,
  );

  return { paginatedData, totalPages };
}

export default usePagination;
