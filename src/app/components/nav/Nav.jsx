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
    <nav className="bg-transparent py-4 px-4 md:py-8 md:px-8 text-artistfont mb-[1px] ">
      <ul className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-8">
        <div className="text-center md:flex md:justify-center">
        <img src="/middaslogo.png" alt="Middas Logo" className="h-10 w-auto mr-3" />
          <li>
            <Link href="/home">
              <span
                className={`text-xl hover:text-primary hover:border-primary border-b-[2px]  ${
                  activeLink === "/home" ? "text-primary border-primary" : ""
                }`}
                
              >
                Middas 
              </span>
            </Link>
          </li>
        </div>
        <div className="flex items-center gap-x-4 md:gap-x-8">
          
          <li>
            <Link href="/favorites">
              <span
                className={` text-xl hover:text-primary hover:border-primary border-b-[2px] ${
                  activeLink === "/favorites" ? "text-primary border-primary" : ""
                }`}
                
              >
                Favoritos
              </span>
            </Link>
          </li>
          <li>
            <Link href="/createBook">
              <span
                className={` text-xl hover:text-primary hover:border-primary border-b-[2px] ${
                  activeLink === "/createBook" ? "text-primary border-primary" : ""
                }`}
                              >
                Crear Libro
              </span>
            </Link>
          </li>
        </div>
        <li>
          <button onClick={handleLogout} className="text-sm hover:text-primary hover:border-primary border-b-[2px]">Cerrar sesión</button>
          </li>
      </ul>
    </nav>
  );
}