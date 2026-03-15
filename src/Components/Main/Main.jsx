import './Main.css';
import { Hero } from './Hero/Hero.jsx';
import {Services} from './Services/Services.jsx'
import {Skills} from './Skills/Skills.jsx'
import {Experience} from './Experience/Experience.jsx'
import {About} from './About/About.jsx'

export function Main() {


    return(
        <>
            <Hero className='hero'/>
            <Services className='services' />
            <Skills className='skills' />
            <Experience className='experience' />
            <About className='about' />
            
        </>
    )

}
