import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateProduct as updateProductAPI } from "@/services/data-services";
import { toast } from "react-toastify";

function useUpdateProduct() {
  const queryClient = useQueryClient();

  const { mutate: updateProduct, isPending: isUpdating } = useMutation({
    mutationFn: ({ productData, id }) => updateProductAPI(productData, id),
    onSuccess: () => {
      toast.success("Produto atualizado com sucesso.");
      queryClient.invalidateQueries({
        queryKey: ["products"],
      });
    },
    onError: (error) => {
      toast.error(`Não foi possível atualizar o produto: ${error.message}`);
      console.log(error);
    },
  });

  return { updateProduct, isUpdating };
}

export default useUpdateProduct;
