import { useState, useEffect } from "react";
import './Services.css'
import {IMAGES, SERVICE_IMAGES} 
    from '../../../Utils/Constants.js'
export function Services() {

    const [electricImages, setElectricImages] = useState([]);
    const [itSupportImages, setItSupportImages] = useState([]);
    const [webDeveloperImages, setWebDeveloperImages] = useState([]);
    const [electricIndex, setElectricIndex] = useState(0);
    const [itSupportIndex, setItsupportIndex] = useState(0);
    const [webDeveloperIndex, setWebDeveloperIndex] = useState(0);
     
    useEffect(() => {
        const loadAllImages = async () => {
            const electricArray = Object.values(SERVICE_IMAGES.electric || {});
            const electricModules = await Promise.all(electricArray.map(fn => fn()));
            setElectricImages(electricModules.map(m => m.default));
            const itsupportArray = Object.values(SERVICE_IMAGES.itsupport || {});
            const itsupportModules = await Promise.all(itsupportArray.map(fn => fn()));
            setItSupportImages(itsupportModules.map(m => m.default));
            const webDeveloperArray = Object.values(SERVICE_IMAGES.webdeveloper || {});
            const webDeveloperModules = await Promise.all(webDeveloperArray.map(fn => fn()));
            setWebDeveloperImages(webDeveloperModules.map(m => m.default));
        };
        
        loadAllImages();
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
        setElectricIndex(prev => (prev + 1) % (electricImages.length || 1));
        setItsupportIndex(prev => (prev + 1) % (itSupportImages.length || 1));
        setWebDeveloperIndex(prev => (prev + 1) % (itSupportImages.length || 1));
        }, 5000);
        return () => clearInterval(interval);
    }, [electricImages.length, itSupportImages.length]);

    return (
        <section className='services' id='services'>
            <h2 className='services__title'>
                        Servicios
            </h2>
            <div className='services__container'>
                <div className='container__service'>
                    {electricImages.length > 0 && (
                        <img 
                            className='container__service_image' 
                            src={electricImages[electricIndex]} 
                            alt="Servicios Eléctricos"
                        />
                    )}
                    <p className='container__service_text'>
                        Servicios Electricos
                    </p>
                </div>
                <div className='container__service'>
                    {itSupportImages.length > 0 && (
                        <img 
                            className='container__service_image' 
                            src={itSupportImages[itSupportIndex]} 
                            alt="Servicios TI"
                        />
                    )}
                    <p className='container__service_text'>
                        Servicios TI
                    </p>
                </div>
                <div className='container__service'>
                    {webDeveloperImages.length > 0 && (
                        <img 
                            className='container__service_image' 
                            src={webDeveloperImages[webDeveloperIndex]} 
                            alt="Servicios TI"
                        />
                    )}
                    <p className='container__service_text'>
                        Servicios Desarrollo Web
                    </p>
                </div>
            </div>
        </section>
    )
}