import { IMAGES } from '../../../Utils/Constants'
import { useLanguage } from '../../Contexts/LanguageContext.jsx';
import './About.css'

export function About() {
    const { t } = useLanguage();
    return(
        <section className='about' id='about'>
            <div className='about__content'>
                <h2 className='about__content_title'>
                        {t('about.title')}
                </h2>
                
                <div className='about__content_description'>
                    <img className='about__image' src={IMAGES.myphoto}/>
                    <p className='about__description_text'>
                        <li className='about__description_line'>{t('about.line1')}</li>
                        <li className='about__description_line'>{t('about.line2')}</li>
                        <li className='about__description_line'>{t('about.line3')}</li>
                    </p>
                </div>
            </div>
        </section>
    )
}