import { Outlet } from "react-router-dom";
import Menu from "@/ui/Menu";
import Footer from "@/ui/Footer";

function AppLayout() {
  return (
    <div className="font-roboto relative flex h-screen flex-col overflow-x-hidden bg-stone-50 font-poppins text-sm text-stone-800">
      <Menu />

      <main className="flex flex-1 flex-col">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default AppLayout;
