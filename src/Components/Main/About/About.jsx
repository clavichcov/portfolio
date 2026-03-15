import { IMAGES } from '../../../Utils/Constants'
import './About.css'

export function About() {

    return(
        <section className='about' id='about'>
            <div className='about__content'>
                <img className='about__image' src={IMAGES.myphoto}/>
                <div className='about__description'>
                    <h2 className='about_description_title'>
                        Sobre mi
                    </h2>
                    <p className='about__description_text'>
                        Aqui sera una breve descripción.
                    </p>
                </div>
            </div>
        </section>
    )
}