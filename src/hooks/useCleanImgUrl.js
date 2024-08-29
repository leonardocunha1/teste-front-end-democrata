function useCleanImgUrl(arr) {
  return arr?.map((product) => {
    const cleanedImages = product.images.map((url) => {
      // encontra o início da URL (a partir de "http") e o fim (antes do último \")
      const start = url.indexOf("http");
      const end = url.lastIndexOf('"');

      // o método substring retorna a parte da string entre os índices especificados onde o end é exclusivo
      return start !== -1 && end !== -1 ? url.substring(start, end) : url;
    });

    return {
      ...product,
      images: cleanedImages, // substitui as URLs antigas pelas URLs limpas
    };
  });
}

export default useCleanImgUrl;
