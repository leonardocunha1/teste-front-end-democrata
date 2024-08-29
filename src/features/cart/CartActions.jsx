import ButtonStyled from "@/ui/ButtonStyled";
import { useNavigate } from "react-router-dom";

function CartActions({ dispatch }) {
  const navigate = useNavigate();

  function handleClearCart() {
    dispatch({ type: "cart/clear" });
  }

  function handleCheckout() {
    alert("Compra finalizada com sucesso!");
    dispatch({ type: "cart/clear" });
    navigate("/home");
  }

  return (
    <div className="mt-4 flex justify-end gap-2">
      <ButtonStyled variation="danger" onClick={handleClearCart}>
        Limpar Carrinho
      </ButtonStyled>
      <ButtonStyled onClick={handleCheckout}>Finalizar compra</ButtonStyled>
    </div>
  );
}

export default CartActions;
