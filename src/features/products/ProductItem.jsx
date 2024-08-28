import { formatCurrency } from "@/utils/helpers";
import { FaCartArrowDown } from "react-icons/fa6";

function ProductItem({ product }) {
  return (
    <li className="flex w-44 flex-col rounded-lg border bg-stone-100 pb-4 shadow-md sm:w-64">
      <img
        src={product.images[0]}
        alt={product.title}
        className="h-44 w-44 rounded-t-lg object-cover object-center sm:h-60 sm:w-full"
      />
      <div className="h-full p-4 text-center">
        <p className="font-semibold">{product.title}</p>
        <p className="mt-1 text-gray-600">{formatCurrency(product.price)}</p>
      </div>
      <button className="mx-auto flex items-center gap-2 rounded-lg bg-stone-900 px-4 py-1 text-stone-100">
        <FaCartArrowDown />
        <p>Add to cart</p>
      </button>
    </li>
  );
}

export default ProductItem;
