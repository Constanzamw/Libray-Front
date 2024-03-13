"use client"
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { UseSelector } from 'react-redux';

import { updateBook } from '@/app/redux/features/create/createActions';
import { useDispatch } from 'react-redux';

const BookDetail = ({ params }) => {
    const router = useRouter();
    //const { params } = router;
    const { id } = params; 
    const [book, setBook] = useState(null);
    const [editedBook, setEditedBook] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [successMessage, setSuccessMessage] = useState(null);
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchBook = async () => {
            try {
                if (id) {
                    const response = await axios.get(`http://localhost:3000/books/${id}`);
                    setBook(response.data);
                    setEditedBook(response.data);
                }
            } catch (error) {
                console.error('Error fetching book:', error);
            }
        };

        fetchBook();
    }, [id, successMessage]); 

    const handleClose = () => {
        router.push('/home');
    };

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSaveChanges = async () => {
        try {
            await dispatch(updateBook(editedBook));
            setSuccessMessage('¡Cambios guardados exitosamente!');
            setIsEditing(false);
          
        } catch (error) {
            console.error('Error updating book:', error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedBook({
            ...editedBook,
            [name]: value
        });
    };

    useEffect(() => {
        if (successMessage) {
            const timer = setTimeout(() => {
                setSuccessMessage(null);
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [successMessage]);

    return (
        <div>
            <div>
                <button onClick={handleClose} className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded">X</button>
            </div>
            {book && (
                <div key={book._id} className="border border-gray-300 rounded p-4">
                    {!isEditing ? (
                        <>
                            <h2 className="text-3xl font-bold mb-4 text-white">{book.title}</h2>
                            <img src={book.image} alt={book.title} className="w-64 h-auto mb-4" />
                            <p className="text-lg text-white">Autor: {book.author}</p>
                            <p className="text-lg text-white">Género: {book.genre}</p>
                            <p className="text-lg text-white">Año de publicación: {book.year}</p>
                            <button onClick={handleEdit} className="bg-blue-500 text-white px-4 py-2 rounded mt-4">Editar</button>
                        </>
                    ) : (
                        <>
                        <label>Titulo:
                            <input type="text" name="title" className='text-black' value={editedBook.title} onChange={handleInputChange} />
                            </label>
                            <label>Autor:
                            <input type="text" name="author"  className='text-black'value={editedBook.author} onChange={handleInputChange} />
                            </label>
                           
                            <label>Año de publicación:
                            <input type="text" name="year"  className='text-black'value={editedBook.year} onChange={handleInputChange} />
                            </label>
                            <label>Género:
                            <input type="text" name="genre"  className='text-black'value={editedBook.genre} onChange={handleInputChange} />
                            </label>
                            <button onClick={handleSaveChanges} className="bg-green-500 text-white px-4 py-2 rounded mt-4">Guardar cambios</button>
                        </>
                    )}
                </div>
            )}
            {successMessage && (
                <div className="mt-4 text-green-500">{successMessage}</div>
            )}
        </div>
    );
}

export default BookDetail;