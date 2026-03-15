import { useState, useEffect } from 'react';
import './Header.css';

export function Header() {
    const [openMenu, setOpenMenu] = useState(false);
    const [openLanguage, setOpenLanguage] = useState(false);

    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    };
    const toggleLanguage = (e) =>{
        e.stopPropagation();
        setOpenLanguage(!openLanguage);
    }
    const selectLanguage = () => {
        setOpenLanguage(false);
        setOpenMenu(false);
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
                    <a href='#home'>Inicio</a>
                    <a href='#services'>Servicios</a>
                    <a href='#skills'>Habilidades</a>
                    <a href='#about'>Sobre mí</a>
                    <a href='#contact'>Contacto</a>
                    <div className='language__content'>
                        <button 
                            className='language__content_button'
                            onClick={toggleLanguage}>
                            Idioma
                        </button>
                        <div className={`language__submenu ${openLanguage ? 'show' : ''}`}>
                            <button onClick={() => selectLanguage('es')}>🇪🇸 Español</button>
                            <button onClick={() => selectLanguage('en')}>🇬🇧 Inglés</button>
                            <button onClick={() => selectLanguage('ru')}>🇷🇺 Ruso</button>
                        </div>
                    </div>
                    
                </div>
            </div>
        </header>
    )

}

