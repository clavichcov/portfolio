import './Experience.css'
import { useLanguage } from '../../Contexts/LanguageContext.jsx';

export function Experience() {
    const { t } = useLanguage();
    return(
        <section className='experience'>
            <div className='experience__content'>
                <h2 className='experience__content_title'>
                    {t('experience.title')}
                </h2>
            </div>
        </section>
    )
}