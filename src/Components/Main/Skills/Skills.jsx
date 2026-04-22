import './Skills.css'
import { useLanguage } from '../../Contexts/LanguageContext.jsx';

export function Skills() {
    const { t } = useLanguage();
    return(
        <section className='skills' id='skills'>
            <div className='skills__content'>
                <h2 className='skills__content_title'>
                    {t('skills.title')}
                </h2>
            </div>
        </section>
    )
}