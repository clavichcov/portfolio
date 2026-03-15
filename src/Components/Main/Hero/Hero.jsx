import './Hero.css';
import { useEffect } from 'react';
import { IMAGES } from '../../../Utils/Constants.js'

export function Hero() {

    useEffect(()=>{
        
    });

    return(
        <hero className='hero' id='home'>
            <div className='hero__content'>
                <div className='hero__content_description'>
                    <h1 className='hero__description_title'>
                        Soluciones técnicas integrales
                    </h1>
                    <p className='hero__description_text'>
                        Técnico Electricista | Especialista TI | Desarrollador Full Stack
                    </p>
                </div>
                
                <div className='hero__content_photos'>
                    <img className='hero__photos_image' src={IMAGES.web} alt=''></img>
                    <p className='hero__photos_description'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non quisquam, voluptatum 
                        ullam fuga rerum vero praesentium labore cum ab magnam voluptates ad quae hic. 
                        Eligendi explicabo et ducimus possimus libero.
                    </p>
                </div>
            </div>
        </hero>
    )

}
