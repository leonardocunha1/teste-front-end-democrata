import { useCart } from "@/contexts/CartContext";

import TextMd from "@/ui/TextMd";
import CartItem from "@/features/cart/CartItem";
import CartSummary from "@/features/cart/CartSummary";
import CartActions from "@/features/cart/CartActions";
import Empty from "@/ui/Empty";

function Cart() {
  const { cart, dispatch } = useCart();

  // Função para incrementar a quantidade de um item no carrinho
  function handleIncrement(id) {
    dispatch({ type: "cart/increment", payload: { id } });
  }

  // Função para decrementar a quantidade ou remover um item do carrinho
  function handleDecrement(id, quantity) {
    if (quantity === 1) {
      dispatch({ type: "cart/remove", payload: { id } });
    } else {
      dispatch({ type: "cart/decrement", payload: { id } });
    }
  }

  return (
    <section className="mx-auto w-full max-w-4xl flex-1 px-5">
      <TextMd label="Carrinho 🛒" />
      {cart.length > 0 ? (
        <>
          <ul className="space-y-2">
            {cart.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                onIncrement={handleIncrement}
                onDecrement={handleDecrement}
              />
            ))}
          </ul>
          <CartSummary cart={cart} />
          <CartActions dispatch={dispatch} />
        </>
      ) : (
        <Empty>Seu carrinho está vazio</Empty>
      )}
    </section>
  );
}

export default Cart;
