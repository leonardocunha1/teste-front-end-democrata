import ButtonStyled from "@/ui/ButtonStyled";
import { formatCurrency } from "@/lib/helpers";

function CartItem({ item, onIncrement, onDecrement }) {
  return (
    <li className="flex flex-col justify-between gap-2 border-b p-2 sm:flex-row sm:gap-0">
      <div className="space-y-2">
        <h4 className="font-semibold">{item.title}</h4>
        <div className="flex gap-3">
          <p>{item.quantity}x</p>
          <p className="italic opacity-60">{formatCurrency(item.price)}</p>
          <p>{formatCurrency(item.price * item.quantity)}</p>
        </div>
      </div>
      <div className="flex items-center">
        <ButtonStyled
          variation="secondary"
          size="small"
          onClick={() => onDecrement(item.id, item.quantity)}
        >
          -
        </ButtonStyled>
        <span className="mx-2">{item.quantity}</span>
        <ButtonStyled
          onClick={() => onIncrement(item.id)}
          variation="secondary"
          size="small"
        >
          +
        </ButtonStyled>
      </div>
    </li>
  );
}

export default CartItem;
