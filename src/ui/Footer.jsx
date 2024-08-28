import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <div className="flex h-20 items-center justify-center bg-stone-900 text-stone-50">
        <p className="text-center">
          &copy; {new Date().getFullYear()} - Todos os direitos reservados
        </p>
        <a href="https://wa.me/5516988753083" target="_blank" rel="noreferrer">
          <FaWhatsapp className="ml-2 h-6 w-6" />
        </a>

        <a
          href="https://www.linkedin.com/in/leonardo-cunha-8a6170263/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin className="ml-2 h-6 w-6" />
        </a>

        <a
          href="https://www.instagram.com/leohcunha/"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram className="ml-2 h-6 w-6" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
