import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <div className="flex h-20 flex-col items-center justify-center gap-2 bg-stone-900 text-stone-50 sm:flex-row">
        <p className="text-center">
          &copy; {new Date().getFullYear()} - Todos os direitos reservados
        </p>
        <div className="flex gap-2">
          <a
            href="https://wa.me/5516988753083"
            target="_blank"
            rel="noreferrer"
          >
            <FaWhatsapp className="h-6 w-6" />
          </a>

          <a
            href="https://www.linkedin.com/in/leonardo-cunha-8a6170263/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin className="h-6 w-6" />
          </a>

          <a
            href="https://www.instagram.com/leohcunha/"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram className="h-6 w-6" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
