import { formatCurrency } from "@/lib/helpers";
import { FaCartArrowDown } from "react-icons/fa6";
import { toast } from "react-toastify";
import { useCart } from "@/contexts/CartContext";

import ButtonStyled from "@/ui/ButtonStyled";

function ProductItem({ product }) {
  const { cart, dispatch } = useCart();

  const cartItem = cart.find((item) => item.id === product.id);

  function handleAddToCart() {
    const itemCart = {
      id: product.id,
      title: product.title,
      price: product.price,
      quantity: 1,
    };

    dispatch({ type: "cart/add", payload: itemCart });

    toast.success("Produto adicionado ao carrinho");
  }

  function handleIncrement() {
    dispatch({ type: "cart/increment", payload: { id: product.id } });
  }

  function handleDecrement() {
    if (cartItem.quantity === 1) {
      dispatch({ type: "cart/remove", payload: { id: product.id } });
    }
    dispatch({ type: "cart/decrement", payload: { id: product.id } });
  }

  return (
    <li className="flex h-full w-44 flex-col rounded-lg border bg-stone-100 pb-4 shadow-md sm:w-64">
      <img
        src={product.images[0]}
        alt={product.title}
        className="h-44 w-44 rounded-t-lg object-cover object-center sm:h-60 sm:w-full"
      />
      <div className="h-full p-4 text-center">
        <p className="font-semibold">{product.title}</p>
        <p className="mt-1 text-gray-600">{formatCurrency(product.price)}</p>
      </div>
      {cartItem ? (
        <div className="flex items-center justify-center gap-2">
          <ButtonStyled
            size="small"
            variation="primary"
            onClick={handleDecrement}
            extraClasses="px-4 "
          >
            -
          </ButtonStyled>
          <p className="text-center">{cartItem.quantity}</p>
          <ButtonStyled
            size="small"
            variation="primary"
            onClick={handleIncrement}
            extraClasses="px-4 "
          >
            +
          </ButtonStyled>
        </div>
      ) : (
        <button
          className="mx-auto flex items-center gap-2 rounded-lg bg-stone-900 px-4 py-1 text-stone-100 duration-200 hover:bg-stone-700"
          onClick={handleAddToCart}
        >
          <FaCartArrowDown />
          <p>Add to cart</p>
        </button>
      )}
    </li>
  );
}

export default ProductItem;
