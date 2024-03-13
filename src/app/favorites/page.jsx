"use client"

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFavorites } from "../redux/features/favorites/favoriteActions";

const FavoritesPage = () => {
  const dispatch = useDispatch();
  // const userId = localStorage.getItem('userId')
  const userId = typeof localStorage !== 'undefined' ? localStorage.getItem('userId') : null;
  console.log(userId, "idfavo");
  const favorites = useSelector(state => state.favorites.favorites);

  useEffect(() => {
    if (userId) {
      dispatch(fetchFavorites(userId)); // Pasar userId a fetchFavorites para obtener los favoritos del usuario
    }
  }, [dispatch, userId]);

  return (
    <div>
      <h1>Tus favoritos</h1>
      <ul>
        {favorites.map(favorite => (
          <div key={favorite._id}>
            <h2>{favorite.title}</h2>
            </div>
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
