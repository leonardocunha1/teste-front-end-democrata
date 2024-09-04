function OurStory() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center bg-[url('/homeimg/bg-our-story.jpg')] bg-cover bg-center bg-no-repeat p-8 text-stone-600">
      <h3 className="mb-1 text-3xl italic tracking-wide text-stone-800">
        História
      </h3>
      <div className="mb-4 h-1 w-20 bg-stone-800"></div>

      <div className="space-y-4 text-justify">
        <p>
          No coração de um bairro vibrante, nasceu a Street Place, um espaço
          visionário que une moda, tecnologia e inovação. Fundada por Sofia, uma
          jovem empreendedora apaixonada por excelência e diversidade, a loja se
          tornou o destino definitivo para quem busca estilo e qualidade.
        </p>
        <p>
          Desde o início, nosso compromisso sempre foi oferecer uma experiência
          de compra única, onde a moda encontra a tecnologia, e o conforto se
          mistura com a inovação.
        </p>
      </div>
    </div>
  );
}

export default OurStory;
