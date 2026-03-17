import './Footer.css';
import {IMAGES, LINKS} from '../../Utils/Constants.js'

export function Footer() {


    return(
        <footer className='footer' id='contact'>
            <div className='footer__content'>
                <div className='footer__content_contact'>
                    <h3 className='footer__contact_title'>
                        Contacto:
                    </h3>
                    <p className='footer__contact_text'>
                        Email:
                    </p>
                    <p className='footer__contact_text'>
                        alexanderma1983@gmail.com
                    </p>
                    <p className='footer__contact_text'>
                        WhatsApp: +57 320 963 7937                        
                    </p>
                    <p className='footer__contact_text'>
                        Llamadas: +57 322 953 4786
                    </p>
                </div>
                <div className='footer__content_social'>
                    <a className='footer__social_link' href={LINKS.linkedin} target="_blank">
                        <img className='footer__social_icon' src={IMAGES.linkedin} alt="Linkedin" />
                    </a>
                    <a className='footer__social_link' href={LINKS.github} target="_blank">
                        <img className='footer__social_icon' src={IMAGES.github} alt="Github" />
                    </a>
                    <a className='footer__social_link' href={LINKS.discord} target="_blank">
                        <img className='footer__social_icon' src={IMAGES.discord} alt="Discord" />
                    </a>
                    <a className='footer__social_link' href={LINKS.whatsapp} target="_blank">
                        <img className='footer__social_icon' src={IMAGES.whatsapp} alt="WhatsApp" />
                    </a>
                </div>
            </div>
        </footer>
    )

}