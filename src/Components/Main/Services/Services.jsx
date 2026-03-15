import './Services.css'
import {IMAGES} from '../../../Utils/Constants.js'
export function Services() {

    return (
        <>
            <div className='services__contain'>
                <div className='services__contain_service'>
                    <img className='service__image' src={IMAGES.web} />
                    <p className='service__text'>
                        Servicios Electricos
                    </p>
                </div>
                <div className='services__contain_service'>
                    <img className='service__image' src={IMAGES.web} />
                    <p className='service__text'>
                        Servicios TI
                    </p>
                </div>
                <div className='services__contain_service'>
                    <img className='service__image' src={IMAGES.web} />
                    <p className='service__text'>
                        Servicios Desarrollo Web
                    </p>
                </div>
            </div>
        </>
    )
}