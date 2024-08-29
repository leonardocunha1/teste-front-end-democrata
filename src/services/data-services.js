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

export async function getProductsByCategory(idCategory, priceMin, priceMax) {
  let apiURL = `https://api.escuelajs.co/api/v1/products/?categoryId=${idCategory}`;

  if (priceMin !== null && priceMax !== null) {
    apiURL += `&price_min=${priceMin}&price_max=${priceMax}`;
  }

  try {
    const res = await axios.get(apiURL);
    return res.data;
  } catch (error) {
    throw new Error(`Erro ao buscar os dados da API: ${error.message}`);
  }
}

export async function deleteProduct(idProduct) {
  const apiURL = `https://api.escuelajs.co/api/v1/products/${idProduct}`;

  try {
    const res = await axios.delete(apiURL);
    return res.data;
  } catch (error) {
    throw new Error(`Erro ao deletar o produto: ${error.message}`);
  }
}

export async function createProduct(productData) {
  const apiURL = "https://api.escuelajs.co/api/v1/products";

  const dataCreate = {
    title: productData.title,
    description: productData.description,
    price: productData.price,
    categoryId: productData.category.id,
    images: productData.images,
  };

  try {
    const res = await axios.post(apiURL, dataCreate);
    return res.data;
  } catch (error) {
    throw new Error(`Erro ao criar o produto: ${error.message}`);
  }
}

export async function updateProduct(productData, id) {
  console.log(productData, id);
  const apiURL = `https://api.escuelajs.co/api/v1/products/${id}`;

  const dataEdit = {
    title: productData.title,
    description: productData.description,
    price: productData.price,
    categoryId: productData.category.id,
    images: productData.images,
  };

  try {
    const res = await axios.put(apiURL, dataEdit);
    return res.data;
  } catch (error) {
    throw new Error(`Erro ao atualizar o produto: ${error.message}`);
  }
}
