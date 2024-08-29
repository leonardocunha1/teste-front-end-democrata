import { useForm } from "react-hook-form";

import FormField from "@/ui/FormField";

function CreateEditFormProducts({
  editProduct = {},
  onCloseModal,
  func,
  isPending,
}) {
  // pegando id do produto caso o produto esteja sendo editado
  const { id: editId, ...editValues } = editProduct;
  const isEditSession = Boolean(editId);

  // usando o hook form para criar o formulário
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: isEditSession ? editValues : {},
  });

  // função para enviar os dados do formulário
  function onSubmit(data) {
    isEditSession
      ? func(
          {
            productData: { ...data },
            id: isEditSession ? editId : null,
          },
          {
            onSuccess: () => {
              reset();
              onCloseModal?.();
            },
          },
        )
      : func(
          {
            productData: { ...data },
          },
          {
            onSuccess: () => {
              reset();
              onCloseModal?.();
            },
          },
        );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 rounded-lg bg-stone-50"
    >
      <FormField label="Nome" id="title" errors={errors}>
        <input
          type="text"
          id="title"
          {...register("title", { required: "Campo obrigatório" })}
          className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-stone-700 shadow focus:outline-none sm:w-72"
          disabled={isPending}
        />
      </FormField>

      <FormField label="Descrição" id="description" errors={errors}>
        <input
          type="text"
          id="description"
          {...register("description", {
            required: "Campo obrigatório",
          })}
          className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-stone-700 shadow focus:outline-none sm:w-72"
          disabled={isPending}
        />
      </FormField>

      <FormField label="Categoria" id="category" errors={errors}>
        <select
          id="category"
          {...register("category.id", { required: "Campo obrigatório" })}
          className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-stone-700 shadow focus:outline-none sm:w-72"
          disabled={isPending}
        >
          <option value="1">Roupas</option>
          <option value="2">Eletrônicos</option>
          <option value="3">Diversos</option>
        </select>
      </FormField>

      <FormField label="Preço" id="price" errors={errors}>
        <input
          type="number"
          id="price"
          {...register("price", {
            required: "Campo obrigatório",
            min: {
              value: 1,
              message: "O preço deve ser maior que 0",
            },
          })}
          className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-stone-700 shadow focus:outline-none sm:w-72"
          disabled={isPending}
        />
      </FormField>

      <FormField label="URL Img" id="image_url" errors={errors}>
        <input
          type="text"
          id="image_url"
          accept="image/*"
          {...register("images[0]", {
            required: isEditSession ? false : "This field is required",
          })}
          className="focus:shadow-outline appearance-none rounded border px-3 py-2 text-sm italic leading-tight text-stone-700 shadow focus:outline-none sm:w-72"
          disabled={isPending}
        />
      </FormField>

      <button
        type="submit"
        className="focus:shadow-outline w-full rounded bg-stone-300 px-4 py-2 font-bold text-stone-700 duration-300 hover:bg-stone-500 hover:text-stone-100 focus:outline-none disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-stone-700 disabled:hover:bg-stone-300"
        disabled={isPending}
      >
        {isEditSession && !isPending && "Editar produto"}
        {isEditSession && isPending && "Editando produto..."}
        {!isEditSession && !isPending && "Criar produto"}
        {!isEditSession && isPending && "Criando produto..."}
      </button>
    </form>
  );
}

export default CreateEditFormProducts;
