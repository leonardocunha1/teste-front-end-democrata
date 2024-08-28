import axios from "axios";

export async function getProducts() {
  const apiURL = "https://api.escuelajs.co/api/v1/products";

  try {
    const res = await axios.get(apiURL);
    return res.data;
  } catch (error) {
    throw new Error(`Erro em buscar os dados da API: ${error}`);
  }
}

export async function getCategories() {
  const apiURL = "https://api.escuelajs.co/api/v1/categories";

  try {
    const res = await axios.get(apiURL);
    return res.data;
  } catch (error) {
    throw new Error(`Erro em buscar os dados da API: ${error}`);
  }
}

export async function getProductsByCategory(
  idCategory,
  page,
  priceMin,
  priceMax,
  title,
) {
  let apiURL = `https://api.escuelajs.co/api/v1/products/?categoryId=${idCategory}`;

  if (priceMin !== null && priceMax !== null) {
    apiURL += `&price_min=${priceMin}&price_max=${priceMax}`;
  }

  if (title) {
    apiURL += `&title=${title}`;
  }

  try {
    const res = await axios.get(apiURL);
    return res.data;
  } catch (error) {
    throw new Error(`Erro ao buscar os dados da API: ${error.message}`);
  }
}
