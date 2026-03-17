import { IMAGES } from '../../../Utils/Constants'
import './About.css'

export function About() {

    return(
        <section className='about' id='about'>
            <div className='about__content'>
                <h2 className='about_description_title'>
                        Sobre mi
                    </h2>
                
                <div className='about__description'>
                    <img className='about__image' src={IMAGES.myphoto}/>
                    <p className='about__description_text'>
                        Aqui sera una breve descripción.
                    </p>
                </div>
            </div>
        </section>
    )
}