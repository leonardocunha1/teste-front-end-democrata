import ButtonStyled from "@/ui/ButtonStyled";
import Modal from "@/ui/Modal";
import CreateEditFormProducts from "@/features/admin/CreateEditFormProducts";
import useCreateProduct from "@/features/admin/useCreateProduct";

function CreateProduct() {
  const { createProduct, isCreating } = useCreateProduct();

  return (
    <div className="mx-auto mt-7 flex max-w-5xl justify-center sm:justify-start">
      <Modal>
        <Modal.Open opens="createProduct">
          <ButtonStyled>Criar Produto</ButtonStyled>
        </Modal.Open>
        <Modal.Window name="createProduct">
          <CreateEditFormProducts func={createProduct} isPending={isCreating} />
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default CreateProduct;
