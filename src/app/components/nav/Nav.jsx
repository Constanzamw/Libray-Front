"use client"
import Link from "next/link";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from 'next/navigation';
import { logoutUser } from "@/app/redux/features/user/userActions";
export default function Nav() {
  const [activeLink, setActiveLink] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Estado para verificar si el usuario está loggeado

  // UseEffect para cambiar el estado activo cuando cambie la ruta
  useEffect(() => {
    const path = window.location.pathname;
    setActiveLink(path);
  }, []);


  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogout = () => {
    dispatch(logoutUser());
    router.push('/'); // Redirige al usuario a la página de inicio de sesión después del logout
  };

  return (
    <nav className="bg-transparent py-4 px-4 md:py-8 md:px-8 text-artistfont mb-[1px] bg-red-700">
      <ul className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-8">
        <div className="text-center md:flex md:justify-center">
          <li>
            <Link href="/home">
              <span
                className={`font-rocksalt text-md lg:text-4xl hover:text-pink-600 hover:border-pink-600 border-b-[2px] ${
                  activeLink === "/home" ? "text-pink-600 border-pink-600" : ""
                }`}
                onClick={() => handleLinkClick("/")}
              >
                Middas - Libreria
              </span>
            </Link>
          </li>
        </div>
        <div className="flex items-center gap-x-4 md:gap-x-8">
          <li>
          <button onClick={handleLogout}>Cerrar sesión</button>
          </li>
          <li>
            <Link href="/favorites">
              <span
                className={`font-rocksalt text-md lg:text-4xl hover:text-pink-600 hover:border-pink-600 border-b-[2px] ${
                  activeLink === "/favorites" ? "text-pink-600 border-pink-600" : ""
                }`}
                onClick={() => handleLinkClick("/favorites")}
              >
                Favoritos
              </span>
            </Link>
          </li>
          <li>
            <Link href="/createBook">
              <span
                className={`font-rocksalt text-md lg:text-4xl hover:text-pink-600 hover:border-pink-600 border-b-[2px] ${
                  activeLink === "/createBook" ? "text-pink-600 border-pink-600" : ""
                }`}
                onClick={() => handleLinkClick("/createBook")}
              >
                Crear Libro
              </span>
            </Link>
          </li>
        </div>
      </ul>
    </nav>
  );
}