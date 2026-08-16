import React, { useState, useEffect, useContext } from 'react';
import { Routes, Route, Navigate, useNavigate, useLocation } from "react-router-dom";
import UserContext from '../Contexts/UserContext.jsx'
import ProtectedRoute from './ProtectedRoute.jsx';
import {Header} from './Header/Header.jsx'
import {Main} from './Main/Main.jsx'
import {Footer} from './Footer/Footer.jsx'
import { Popup } from './Main/Popup/Popup.jsx';
import { Login } from './Main/Popup/Login/Login.jsx';
import { Register } from './Main/Popup/Register/Register.jsx'
import './App.css'


function App() {
  const { user, isLoggedIn, handleLogin, handleRegister, handleLogout } = useContext(UserContext);
  const [currentPath, setCurrentPath] = useState("/");
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupType, setPopupType] = useState('login');
  const navigate = useNavigate();
  const location = useLocation();

  /*const openLoginPopup = () => {
    setPopupType('login');
    setIsPopupOpen(true);
  };
  const openRegisterPopup = () => {
    setPopupType('register');
    setIsPopupOpen(true);
  };*/
  const openSuccessRegisterPopup = () => {
    setPopupType('successregister');
    setIsPopupOpen(true);
  }
  const closeAllPopups = () => {
    setIsPopupOpen(false);
    setPopupType('login');
    navigate('/');
  };


  /*const handleLogin = ({ email, password }) => {
    if (!email || !password) {
      return;
    }
    
      auth.authorize(email, password)
      .then((data) => {
        if (data.token) {
          setToken(data.token);
          setIsLoggedIn(true);
          setCurrentUser({
            username: email.split('@')[0],
            email: email
          });
          closeAllPopups(); 
        }
      })
      .catch(error => {
          console.error('Error en login:', error);
          alert('Error al iniciar sesión. Verifica tus credenciales.');
      });
    };*/

    const handleSuccessRegister = () => {
      navigate('/signin');
      setPopupType('login');
      
    }

    /*const handleRegister = async ({ email, password, name }) => {
      if (!email || !password || !name) {
        alert('Por favor completa todos los campos');
        return;
      }
        
      try {
        const data = await auth.register(email, password, name);
        openSuccessRegisterPopup();
      } catch (error) {
          console.error("Error en registro:", error);
          let errorMessage = 'Error en el registro';
          if (error.message) {
            errorMessage = error.message;
          } else if (error.response?.data?.message) {
              errorMessage = error.response.data.message;
            } else if (error.status === 409) {
                errorMessage = 'El correo electrónico ya está registrado';
              }
          throw new Error(errorMessage);
        }
    };*/
    
  /*const handleLogout = () => {
    removeToken();
    setIsLoggedIn(false);
    setCurrentUser(null);
    navigate('/');
  };*/
  useEffect(() => {
    if (location.pathname === '/signin') {
      if (popupType !== 'successregister') {
        setPopupType('login');
        setIsPopupOpen(true);
      }
    } else if (location.pathname === '/signup') {
        setPopupType('register');
        setIsPopupOpen(true);
      } else {
          setIsPopupOpen(false);
        }   
    }, [location.pathname]);
    
  return (
    <>
      
          <Routes>
            <Route path="/" 
                  element={
                    <>
                      <Header 
                        isLoggedIn={isLoggedIn}
                        onLogout={handleLogout}
                        currentPath={currentPath}
                      />
                      <Main  />
                      <Footer />
                    </>
                  }
            />
            <Route path="/signin" 
                  element={
                    <>
                      <Header 
                        isLoggedIn={isLoggedIn}
                        onLogout={handleLogout}
                        currentPath={currentPath}
                      />
                      <Main  />
                      <Footer />
                    </>
                  }
            />
            <Route path="/signup" 
                  element={
                    <>
                      <Header 
                        isLoggedIn={isLoggedIn}
                        onLogout={handleLogout}
                        currentPath={currentPath}
                      />
                      <Main  />
                      <Footer />
                    </>
                  }
            />
          </Routes>
          {(location.pathname === '/signin' || location.pathname === '/signup') && (
            <Popup 
                onClose={closeAllPopups} 
                title={ popupType === 'login' ? "Iniciar sesión" :
                popupType === 'register' ? "Inscribirse" :
                popupType === 'successregister' ? "¡El registro se ha completado éxito!" : ""}
            >
              {popupType === 'login' && (
                <Login handleLogin={handleLogin} />
              )}
              {popupType === 'register' && (
                <Register  handleRegister={handleRegister} />
              )}
              {popupType === 'successregister' && (
                <div className="success-message">
                  <p>✓ Tu cuenta ha sido creada exitosamente</p>
                  <button onClick={handleSuccessRegister}>
                      Iniciar sesión
                  </button>
              </div>
              )}
                            
            </Popup>
          )}
      
    </>
  )
}

export default App
