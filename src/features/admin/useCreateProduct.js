import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createProduct as createProductAPI } from "@/services/data-services";
import { toast } from "react-toastify";

function useCreateProduct() {
  const queryClient = useQueryClient();

  const { mutate: createProduct, isPending: isCreating } = useMutation({
    mutationFn: ({ productData }) => createProductAPI(productData),
    onSuccess: () => {
      toast.success("Produto criado com sucesso.");
      queryClient.invalidateQueries({
        queryKey: ["products"],
      });
    },
    onError: (error) => {
      toast.error("Não foi possível criar o produto");
      console.log(error);
    },
  });

  return { createProduct, isCreating };
}

export default useCreateProduct;
