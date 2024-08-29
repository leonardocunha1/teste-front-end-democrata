import { formatCurrency } from "@/lib/helpers";

function NewArrivalsItem({ product }) {
  return (
    <li className="flex w-44 flex-col rounded-lg border bg-stone-100 shadow-md sm:w-64">
      <img
        src={product.images[0]}
        alt={product.title}
        className="h-44 w-44 rounded-t-lg object-cover object-center sm:h-60 sm:w-full"
      />
      <div className="p-4 text-center">
        <p className="font-semibold">{product.title}</p>
        <p className="mt-1 text-gray-600">{formatCurrency(product.price)}</p>
      </div>
    </li>
  );
}

export default NewArrivalsItem;
