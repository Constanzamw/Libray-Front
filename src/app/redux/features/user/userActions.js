import {
    getUser,
    getUserFavorites,
    login,
    logout
  } from "./userSlice";
  import axios from "axios";

  const URL_BASE = "http://localhost:3000";

  export const loginUser = (email, password) => async (dispatch) => {
    try {
      const response = await axios.get(`${URL_BASE}/users`);
      const users = response.data;
  
      const user = users.find(u => u.email === email && u.password === password);
      if (user) {
        dispatch(login(user)); // Despacha la acción de login con el usuario encontrado
        alert('Inicio de sesión exitoso');
      } else {
        alert('Credenciales inválidas');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Hubo un problema al procesar tu solicitud');
    }
  };

  export const logoutUser = () => async (dispatch) => {
    try {
     
      dispatch(logout());
      alert('Sesión cerrada exitosamente');
    } catch (error) {
      console.error('Error:', error);
      alert('Hubo un problema al cerrar la sesión');
    }
  };

  export const getFavorites = () => async (dispatch, getState) => {
    try {
      const { user } = getState().auth;
      const response = await axios.get(`${URL_BASE}/users/${user._id}/favorites`);
      const favorites = response.data;
      dispatch({ type: 'SET_FAVORITES', payload: favorites });
    } catch (error) {
      console.error('Error:', error);
    }
  };

//   export const getUser = async () => {
//     try {
//         const response = await axios.get(`${URL_BASE}/users`);
//         const users = response.data;
//         const [access, setAccess] = useState(false);

//         const user = users.find(u => u.email === email && u.password === password);
//         if (user) {
//             setAccess(true)
//             router.push('/home');
//            alert('Inicio de sesión exitoso');
//        } else {
//            setError('Credenciales inválidas');
//        }
//    } catch (error) {
//        console.error('Error:', error);
//        setError('Hubo un problema al procesar tu solicitud');
//    }}




  