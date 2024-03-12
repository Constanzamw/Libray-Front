"use client"
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createBook } from "../redux/features/create/createActions";
import { useRouter } from 'next/navigation';

const CreateBookForm = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.books.loading);
  const error = useSelector((state) => state.books.error);

  const [formData, setFormData] = useState({
    title: '',
    author: '',
    genre: '',
    year: '',
    image: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createBook(formData))
      .then(() => {
        // Limpiar campos del formulario
        setFormData({
          title: '',
          author: '',
          genre: '',
          year: '',
          image: ''
        });
      })
      .catch((error) => {
        console.error('Error al crear el libro:', error);
      });
  };

  



  const router = useRouter();
  const handleGoHome = () => {
    router.push('/home');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Título:
        <input type="text" name="title" className='text-black' value={formData.title} onChange={handleChange} />
        </label>
        <label> Autor:
        <input type="text" name="author"  className='text-black' value={formData.author} onChange={handleChange} />
        </label>
        <label> Genero:
        <input type="text" name="genre"  className='text-black' value={formData.genre} onChange={handleChange} />
        </label>
        <label> Año de publicación:
        <input type="text" name="year"  className='text-black' value={formData.year} onChange={handleChange} />
        </label> 
        <label>Imagen:
        <input type="text" name="image"  className='text-black' value={formData.image} onChange={handleChange} />
        </label>
        <button type="submit" disabled={loading}>Guardar</button>
      </form>
      {loading && <p>Cargando...</p>}
      {error && <p>Error al crear el libro: {error}</p>}
      <button onClick={handleGoHome}>Volver a Inicio </button>
    </div>
  );
};

export default CreateBookForm;