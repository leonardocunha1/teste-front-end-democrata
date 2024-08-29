import { useSearchParams } from "react-router-dom";

function Paginate({ totalPages }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentPage = Number(searchParams.get("page")) || 1;

  function nextPage() {
    const next = currentPage === totalPages ? totalPages : currentPage + 1;
    searchParams.set("page", next);
    setSearchParams(searchParams);
  }

  function prevPage() {
    const prev = currentPage === 1 ? 1 : currentPage - 1;
    searchParams.set("page", prev);
    setSearchParams(searchParams);
  }

  return (
    <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
      <div>
        <button
          onClick={prevPage}
          className={`bg-stone-100 px-4 py-2 text-sm text-stone-800 hover:bg-stone-200 ${currentPage === 1 ? "cursor-not-allowed hover:bg-stone-100" : ""}`}
          disabled={currentPage === 1}
        >
          Anterior
        </button>
        <button
          onClick={nextPage}
          className={`bg-stone-100 px-4 py-2 text-sm text-stone-800 hover:bg-stone-200 ${currentPage === totalPages ? "cursor-not-allowed hover:bg-stone-100" : ""}`}
          disabled={currentPage === totalPages}
        >
          Próximo
        </button>
      </div>
      <span className="text-stone-800">
        página {`${currentPage} de ${totalPages}`}
      </span>
    </div>
  );
}

export default Paginate;
