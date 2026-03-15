import './Main.css';
import { Hero } from './Hero/Hero.jsx';
import {Services} from './Services/Services.jsx'
import {Skills} from './Skills/Skills.jsx'
import {Experience} from './Experience/Experience.jsx'
import {About} from './About/About.jsx'

export function Main() {


    return(
        <main className='main'>
            <Hero />
            <Services />
            <Skills />
            <Experience />
            <About />
            
        </main>
    )

}
