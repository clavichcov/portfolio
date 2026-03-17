import { IMAGES } from '../../../Utils/Constants'
import './About.css'

export function About() {

    return(
        <section className='about' id='about'>
            <div className='about__content'>
                <h2 className='about__content_title'>
                        Sobre mi
                </h2>
                
                <div className='about__content_description'>
                    <img className='about__image' src={IMAGES.myphoto}/>
                    <p className='about__description_text'>
                        <li className='about__description_line'>Soy Alexander Medina Artemiev, un profesional con más de 9 años de 
                        experiencia combinando el mundo industrial y tecnológico.</li>
                        <li className='about__description_line'>Mi trabajo une tres áreas: electricidad (residencial, comercial 
                        e industrial), soporte TI (mantenimiento de equipos, redes y periféricos) 
                        y desarrollo web full stack con React, Node.js y MongoDB.</li>
                        <li className='about__description_line'>Disfruto resolver problemas complejos y ofrecer soluciones prácticas, 
                        ya sea instalando un tablero eléctrico, reparando una impresora o 
                        desarrollando una aplicación web.</li>
                    </p>
                </div>
            </div>
        </section>
    )
}