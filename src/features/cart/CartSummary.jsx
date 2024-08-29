import { formatCurrency } from "@/lib/helpers";

function CartSummary({ cart }) {
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="mt-4 text-base">
      <h3 className="text-right">
        Total: <span className="font-bold">{formatCurrency(total)}</span>
      </h3>
    </div>
  );
}

export default CartSummary;
