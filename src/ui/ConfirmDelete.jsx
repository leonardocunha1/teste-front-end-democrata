import ButtonStyled from "./ButtonStyled";

function ConfirmDelete({ resourceName, onConfirm, disabled, onCloseModal }) {
  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-center text-2xl font-bold text-stone-900 sm:text-start">
        Excluir {resourceName}
      </h2>
      <p className="text-center text-stone-700 sm:text-start">
        Tem certeza que deseja excluir{" "}
        <span className="font-bold">{resourceName} </span> permanentemente?{" "}
      </p>
      <div className="flex gap-4">
        <ButtonStyled
          variation="danger"
          size="medium"
          onClick={onConfirm}
          disabled={disabled}
          extraClasses="flex-1 tracking-wide md:text-base font-semibold uppercase"
        >
          Excluir
        </ButtonStyled>
        <ButtonStyled
          size="medium"
          onClick={onCloseModal}
          extraClasses="flex-1 tracking-wide md:text-base font-semibold uppercase"
          disabled={disabled}
        >
          Cancelar
        </ButtonStyled>
      </div>
    </div>
  );
}

export default ConfirmDelete;
