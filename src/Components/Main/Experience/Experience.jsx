import './Experience.css'
import { useState } from 'react';
import { useLanguage } from '../../Contexts/LanguageContext.jsx';

export function Experience() {
    const { t } = useLanguage();
    const [openIndex, setOpenIndex] = useState(null);

    const toggleExperience = (index) => {
        if (openIndex === index) {
            setOpenIndex(null);
        } else {
            setOpenIndex(index);
        }
    };
    return(
        <>
            <section className='experience'>
                <div className='experience__content'>
                    <h2 className='experience__content_title'>
                        {t('experience.title')}
                    </h2>
                    <div className='experience__timeline'>
                        <table className='experience__table'>
                            <tbody>
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
                                        <h3 className='experience__subtitle'>{t('experience1.title')}</h3>
                                        <p className='experience__text'>{t('experience1.text')}</p>
                                        {openIndex === 0 && (
                                            <div className='experience__accordion'>
                                                <div className='experience__details'>
                                                    <p className='experience__text_line'>• {t('experience1.line1')}</p>
                                                    <p className='experience__text_line'>• {t('experience1.line2')}</p>
                                                    <p className='experience__text_line'>• {t('experience1.line3')}</p>
                                                </div>
                                            </div>
                                        )}
                                    </td>
                                    
                                </tr>
                                
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
                                        <h3 className='experience__subtitle'>{t('experience2.title')}</h3>
                                        <p className='experience__text'>{t('experience2.text')}</p>
                                        {openIndex === 1 && (
                                            <div className='experience__accordion'>
                                                <div className='experience__details'>
                                                    <p className='experience__text_line'>• {t('experience2.line1')}</p>
                                                    <p className='experience__text_line'>• {t('experience2.line2')}</p>
                                                    <p className='experience__text_line'>• {t('experience2.line3')}</p>
                                                </div>
                                                
                                            </div>
                                        )}
                                    </td>
                                </tr>
                                    
                                
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
                                            <h3 className='experience__subtitle'>{t('experience3.title')}</h3>
                                            <p className='experience__text'>{t('experience3.text')}</p>
                                            {openIndex === 2 && (
                                                <div className='experience__accordion'>
                                                    
                                                        <div className='experience__details'>
                                                            <p className='experience__text_line'>• {t('experience3.line1')}</p>
                                                            <p className='experience__text_line'>• {t('experience3.line2')}</p>
                                                            <p className='experience__text_line'>• {t('experience3.line3')}</p>
                                                        </div>
                                                    
                                                </div>
                                            )}
                                        </td>
                                    </tr>
                                    
                                
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
            <section className='dxperience__download'>

            </section>
        </>
        
        
    )
}