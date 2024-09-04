import { useState } from "react";

import { Link, NavLink } from "react-router-dom";

import { FaCartPlus } from "react-icons/fa";
import { RiMenu3Fill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";

const menuItems = [
  { title: "Home", url: "/home" },
  { title: "Roupas", url: "/product/1" },
  { title: "Eletrônicos", url: "/product/2" },
  { title: "Diversos", url: "/product/3" },
  { title: "Admin", url: "/admin" },
  { title: <FaCartPlus className="h-6 w-6" />, url: "/cart" },
];

function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="relative z-30 mx-auto flex w-full max-w-5xl justify-between px-10 py-10 text-base">
        <Link to="/home">
          <img src="/logo.png" alt="Logo site" className="h-10 w-10" />
        </Link>
        <ul
          className={`absolute top-28 flex w-full flex-col gap-5 bg-stone-100 px-6 pb-6 pt-10 duration-300 sm:static sm:w-auto sm:flex-row sm:items-center sm:bg-transparent sm:p-0 lg:gap-10 ${isOpen ? "left-0" : "left-[100vw]"}`}
        >
          {menuItems.map((item) => (
            <li key={item.url}>
              <NavLink
                to={item.url}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  isActive ? "font-bold" : "duration-200 hover:text-stone-500"
                }
              >
                {item.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <div className="absolute right-10 top-10 z-40 sm:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <IoMdClose className="h-8 w-8" />
          ) : (
            <RiMenu3Fill className="h-8 w-8" />
          )}
        </button>
      </div>
    </>
  );
}

export default Menu;
