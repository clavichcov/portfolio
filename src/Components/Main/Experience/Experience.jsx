import './Experience.css'
import { useState } from 'react';
import { useLanguage } from '../../Contexts/LanguageContext.jsx';

export function Experience() {
    const { t } = useLanguage();
    const [openIndex, setOpenIndex] = useState(null);

    const toggleExperience = (index) => {
        if (openIndex === index) {
            setOpenIndex(null);  // Cierra si ya está abierto
        } else {
            setOpenIndex(index); // Abre el que hiciste clic
        }
    };
    return(
        <section className='experience'>
            <div className='experience__content'>
                <h2 className='experience__content_title'>
                    {t('experience.title')}
                </h2>
                <div className='experience__timeline'>
                    <table className='experience__table'>
                        <tbody>
                            {/* Experiencia 1 */}
                            <>
                                <tr className='experience__row'>
                                    <td className='experience__date'>2024 - 2026</td>
                                    <td className='experience__point-cell'>
                                        <button 
                                            className='experience__point' 
                                            onClick={() => toggleExperience(0)}
                                        >
                                            ●
                                        </button>
                                        <span className='experience__line'></span>
                                    </td>
                                    <td className='experience__title'>
                                        <h3>Full Stack Developer</h3>
                                        <span>TripleTen</span>
                                    </td>
                                </tr>
                                {openIndex === 0 && (
                                    <tr className='experience__accordion'>
                                        <td colSpan="3">
                                            <div className='experience__details'>
                                                <p>• Desarrollo de apps con React, Node.js, MongoDB</p>
                                                <p>• News Explorer: API externa + API propia</p>
                                                <p>• Around the US: red social con autenticación</p>
                                            </div>
                                        </td>
                                    </tr>
                                )}
                            </>

                            {/* Experiencia 2 */}
                            <>
                                <tr className='experience__row'>
                                    <td className='experience__date'>2021 - 2025</td>
                                    <td className='experience__point-cell'>
                                        <button 
                                            className='experience__point' 
                                            onClick={() => toggleExperience(1)}
                                        >
                                            ●
                                        </button>
                                        <span className='experience__line'></span>
                                    </td>
                                    <td className='experience__title'>
                                        <h3>Electricista 1A</h3>
                                        <span>Constructora Ariguani SAS</span>
                                    </td>
                                </tr>
                                {openIndex === 1 && (
                                    <tr className='experience__accordion'>
                                        <td colSpan="3">
                                            <div className='experience__details'>
                                                <p>• Mantenimiento eléctrico en plantas, peajes, generadores</p>
                                                <p>• Instalación de redes, racks y CCTV</p>
                                                <p>• Soporte a equipos de cómputo en campo</p>
                                            </div>
                                        </td>
                                    </tr>
                                )}
                            </>

                            {/* Experiencia 3 */}
                            <>
                                <tr className='experience__row'>
                                    <td className='experience__date'>2015 - 2020</td>
                                    <td className='experience__point-cell'>
                                        <button 
                                            className='experience__point' 
                                            onClick={() => toggleExperience(2)}
                                        >
                                            ●
                                        </button>
                                        <span className='experience__line'></span>
                                    </td>
                                    <td className='experience__title'>
                                        <h3>Gerente Administrativo</h3>
                                        <span>ALMEDART SAS</span>
                                    </td>
                                </tr>
                                {openIndex === 2 && (
                                    <tr className='experience__accordion'>
                                        <td colSpan="3">
                                            <div className='experience__details'>
                                                <p>• Dirección de empresa de servicios tecnológicos</p>
                                                <p>• Gestión de clientes y supervisión de personal</p>
                                                <p>• Facturación electrónica DIAN, SiiGO, Alegra</p>
                                            </div>
                                        </td>
                                    </tr>
                                )}
                            </>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    )
}