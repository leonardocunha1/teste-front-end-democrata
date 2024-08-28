import { FaCarSide } from "react-icons/fa";
import { TbClock24 } from "react-icons/tb";
import { FaMoneyBill1Wave } from "react-icons/fa6";

import InfosItem from "@/features/home/InfosItem";

function Infos() {
  return (
    <section className="mx-auto flex w-full max-w-5xl flex-col items-center justify-between px-5 pb-5 pt-5 sm:flex-row sm:pt-0">
      <InfosItem
        icon={FaCarSide}
        title="Entrega grátis"
        description="Entregamos em todo o Brasil"
        hasBorder={true}
      />
      <InfosItem
        icon={TbClock24}
        title="Suporte 24/7"
        description="Atendimento 24h"
        hasBorder={true}
      />
      <InfosItem
        icon={FaMoneyBill1Wave}
        title="Compra segura"
        description="Pagamento feito pelo PayPal"
        hasBorder={false}
      />
    </section>
  );
}

export default Infos;
