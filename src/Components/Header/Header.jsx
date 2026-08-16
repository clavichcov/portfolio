import { useState, useEffect, useContext } from 'react';
import { Popup } from '../Main/Popup/Popup.jsx'
import { useNavigate, useLocation} from "react-router-dom";
import { useLanguage } from '../../Contexts/LanguageContext.jsx';
import { IMAGES } from '../../Utils/Constants.js';
import UserContext from '../../Contexts/UserContext.jsx';
import './Header.css';

export function Header({onLogout, isName, currentPath}) {
    const navigate = useNavigate();
    const location = useLocation();
    const { isLoggedIn, user } = useContext(UserContext);
    const [openMenu, setOpenMenu] = useState(false);
    const [openLanguage, setOpenLanguage] = useState(false);
    const { language, setLanguage, t } = useLanguage();
    const [popup, setPopup] = useState(null);
    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    };
    const toggleLanguage = (e) =>{
        e.stopPropagation();
        setOpenLanguage(!openLanguage);
    }
    const selectLanguage = (lang) => {
        setLanguage(lang);
        setOpenLanguage(false);
        setOpenMenu(false);
    }
    const handleOpenLogin = () => {
        navigate('/signin');
        
    }
    const handleOpenRegister = () => {
        navigate('/signup');
        
    }
    function handleClosePopup() {
    setPopup(null);
    }
    function handleOpenAdmin() {
        /*navigate('/admin');*/
    }
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.closest('.header__content')) {
                setOpenMenu(false);
                setOpenLanguage(false);
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, []);
    return(
        <header className='header'>
            <div className='header__content' >
                <h2 className='header__content--logo'>Alexander Medina Artemiev</h2>
                <button className={`header__menu ${openMenu ? 'open' : ''}`} 
                    onClick={toggleMenu}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <div className={`header__content_buttons ${openMenu ? 'show' : ''}`}>
                    <a href='#home'>{t('nav.home')}</a>
                    <a href='#services'>{t('nav.services')}</a>
                    <a href='#skills'>{t('nav.skills')}</a>
                    <a href='#about'>{t('nav.about')}</a>
                    <a href='#contact'>{t('nav.contact')}</a>
                    <div className='header__command_buttons'>
                        {isLoggedIn ? (
                            <>
                                <button className='button__logout'
                                onClick={onLogout}
                            >
                                {user.name}
                                <img 
                                            src={IMAGES.logout_black} 
                                            alt="Icono de cerrar sesión" 
                                            className="header__logout--icon"
                                        />
                            </button>
                            {user.role === 'admin' && (
                                <button className='button__admin'
                                    onClick={handleOpenAdmin}
                                >
                                    {t('nav.admin')}
                                </button>
                            )}
                            </>
                            
                        ):(
                            <>
                                <button className='button__login'
                                onClick={handleOpenLogin}
                            >
                                {t('nav.login')}
                            </button>
                            <button className='button__register'
                                onClick={handleOpenRegister}
                            >
                                {t('nav.register')}
                            </button>
                            </>
                        )}
                    </div>
                    <div className='language__content'>
                        <button 
                            className='language__content_button'
                            onClick={toggleLanguage}>
                            {language === 'es' ? '🇪🇸 Español' : language === 'en' ? '🇬🇧 English' : '🇷🇺 Русский'}
                        </button>
                        <div className={`language__submenu ${openLanguage ? 'show' : ''}`}>
                            <button onClick={() => selectLanguage('es')}>🇪🇸 Español</button>
                            <button onClick={() => selectLanguage('en')}>🇬🇧 English</button>
                            <button onClick={() => selectLanguage('ru')}>🇷🇺 Русский</button>
                        </div>
                    </div>
                    
                </div>
            </div>
            {popup && (
                <Popup onClose={handleClosePopup} popupType="command" >
                    {popup.children}
                </Popup>
            )}
        </header>
    )

}

