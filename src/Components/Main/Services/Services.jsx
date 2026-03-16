import './Services.css'
import {IMAGES} from '../../../Utils/Constants.js'
export function Services() {

    return (
        <section className='services' id='services'>
            <div className='services__contain'>
                <div className='services__contain_service'>
                    <img className='services__image' src={IMAGES.web} />
                    <p className='services__text'>
                        Servicios Electricos
                    </p>
                </div>
                <div className='services__contain_service'>
                    <img className='services__image' src={IMAGES.web} />
                    <p className='services__text'>
                        Servicios TI
                    </p>
                </div>
                <div className='services__contain_service'>
                    <img className='services__image' src={IMAGES.web} />
                    <p className='services__text'>
                        Servicios Desarrollo Web
                    </p>
                </div>
            </div>
        </section>
    )
}