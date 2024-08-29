import { HiOutlineDotsVertical } from "react-icons/hi";

import { formatCurrency } from "@/lib/helpers";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/ui/dropdown-menu";
import { TableCell, TableRow } from "@/ui/table";
import Modal from "@/ui/Modal";
import ConfirmDelete from "@/ui/ConfirmDelete";

import CreateEditFormProducts from "@/features/admin/CreateEditFormProducts";
import useDeleteProduct from "@/features/admin/useDeleteProduct";
import useUpdateProduct from "@/features/admin/useUpdateProduct";

function TableRowAdmin({ product }) {
  const { deleteProduct, isDeleting } = useDeleteProduct();
  const { updateProduct, isUpdating } = useUpdateProduct();

  return (
    <Modal>
      <TableRow key={product.id}>
        <TableCell>
          <img
            src={product.images[0]}
            alt={product.title}
            className="h-20 w-20 object-cover"
          />
        </TableCell>
        <TableCell>{product.title}</TableCell>
        <TableCell>{formatCurrency(product.price)}</TableCell>
        <TableCell className="">
          <DropdownMenu>
            <DropdownMenuTrigger className="rounded-md bg-stone-200 p-2">
              <HiOutlineDotsVertical />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Infos</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Modal.Open opens={`editar`}>
                  <button>Editar</button>
                </Modal.Open>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Modal.Open opens={`deletar`}>
                  <button>Deletar</button>
                </Modal.Open>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </TableCell>
      </TableRow>
      <Modal.Window name={`editar`}>
        <CreateEditFormProducts
          editProduct={product}
          isPending={isUpdating}
          func={updateProduct}
        />
      </Modal.Window>
      <Modal.Window name={`deletar`}>
        <ConfirmDelete
          resourceName={product.title}
          onConfirm={() => deleteProduct(product.id)}
          disabled={isDeleting}
        />
      </Modal.Window>
    </Modal>
  );
}

export default TableRowAdmin;
