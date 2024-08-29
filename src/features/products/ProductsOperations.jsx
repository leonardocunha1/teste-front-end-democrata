import { useState, useEffect } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/ui/select";
import { useSearchParams } from "react-router-dom";

function ProductsOperations({ idCategory }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedValue, setSelectedValue] = useState("anyValue");

  // reseta o valor do select ao mudar de categoria no menu
  useEffect(() => {
    setSelectedValue("anyValue");
  }, [idCategory]);

  function handleFilterByValue(value) {
    setSelectedValue(value);

    if (value === "1-30") {
      searchParams.set("priceMin", 1);
      searchParams.set("priceMax", 30);
    } else if (value === "30+") {
      searchParams.set("priceMin", 31);
      searchParams.set("priceMax", 1000000000);
    } else if (value === "anyValue") {
      searchParams.delete("priceMin");
      searchParams.delete("priceMax");
    }

    searchParams.set("page", 1);
    setSearchParams(searchParams);
  }

  return (
    <div className="flex flex-col items-center gap-4 sm:flex-row">
      <Select value={selectedValue} onValueChange={handleFilterByValue}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Filtrar por valor" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="1-30">Valor R$1 - R$30</SelectItem>
          <SelectItem value="30+">Valor acima R$30</SelectItem>
          <SelectItem value="anyValue">Qualquer valor</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}

export default ProductsOperations;
