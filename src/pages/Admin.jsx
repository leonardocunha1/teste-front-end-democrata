import CreateProduct from "@/features/admin/CreateProduct";
import TableProducts from "@/features/admin/TableProductsAdmin";
import TextMd from "@/ui/TextMd";

function Admin() {
  return (
    <section className="px-5 py-5">
      <TextMd label="Produtos" />
      <p className="mb-4 text-center">
        Obs: essa área ficaria visível apenas para setor de gerência do site
        após login e autenticação
      </p>
      <TableProducts />
      <CreateProduct />
    </section>
  );
}

export default Admin;
