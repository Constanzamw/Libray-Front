"use client"

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFavorites } from "../redux/features/favorites/favoriteActions";

const FavoritesPage = () => {
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.favorites.favorites); // Accede a los favoritos del estado de Redux

  useEffect(() => {
    dispatch(getFavorites()); // Despacha la acción para obtener los favoritos del usuario al montar el componente
  }, [dispatch]);

  return (
    <div>
      <h1>Tus favoritos</h1>
      <ul>
        {favorites.map(favorite => (
          <li key={favorite._id}>{favorite.title}</li> // Ajusta esto según la estructura de tus favoritos
        ))}
      </ul>
    </div>
  );
};

export default FavoritesPage;
// import Link from "next/link";
// import Nav from "../../components/nav/Nav";
// import axios from 'axios';
// import { useRouter } from 'next/navigation';
// import { useState, useEffect } from "react";
// //import { RiHeartLine,RiHeartFill } from "react-icons/ri";
// //<RiHeartLine /> <RiHeartFill />



// export default function Favorites() { 
  
//   const [favs, setFavs] = useState([]);
 

//   useEffect(() => {
//       const fetchFavorites = async () => {
//           try {
//               const response = await axios.get('http://localhost:3000/favorites/');
//               setFavs(response.data);
//           } catch (error) {
//               console.error('Error fetching books:', error);
//           }
//       };

//       fetchFavorites();
//   }, []);


//   return (
//     <div>
//       <Nav/>
//         <h2 className="text-3xl font-bold mb-4">Libros</h2>
//         <div className="grid grid-cols-4 gap-8">
//             {favs.map(book => (
//                 <div key={book._id} className="border border-gray-300 rounded p-4">
//                   <Link href={`/book/${book._id}`}>
//                     <h3 className="text-md font-semibold mb-2 text-white">{book.title}</h3>
//                     <p className="text-sm">Autor: {book.author}</p>
//                     </Link>
//                 </div>
//             ))}
//         </div>
//     </div>
// );
// };

//
