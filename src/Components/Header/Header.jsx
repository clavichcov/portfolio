import { useState } from 'react';
import './Header.css';

export function Header() {
    const [openMenu, setOpenMenu] = useState(false);

    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    };

    return(
        <>
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
                    <button >Inicio</button>
                    <button >Servicios</button>
                    <button >Habilidades</button>
                    <button >Experiencia</button>
                    <button >Sobre mí</button>
                </div>
            </div>
        </>
    )

}

