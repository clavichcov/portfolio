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
                <ul className='skills__content_list'>
                    <li className='skills__item'>
                        <h3 className='skills__item_title'>{t('skill1')}</h3>
                        <div className='skills__item_chips'>
                            <span className='skills__chip'>{t('skill1.chip1')}</span>
                            <span className='skills__chip'>{t('skill1.chip2')}</span>
                            <span className='skills__chip'>{t('skill1.chip3')}</span>
                            <span className='skills__chip'>{t('skill1.chip4')}</span>
                            <span className='skills__chip'>{t('skill1.chip5')}</span>
                            <span className='skills__chip'>{t('skill1.chip6')}</span>
                            <span className='skills__chip'>{t('skill1.chip7')}</span>
                        </div>
                    </li>
                    
                    <li className='skills__item'>
                        <h3 className='skills__item_title'>{t('skill2')}</h3>
                        <div className='skills__item_chips'>
                            <span className='skills__chip'>{t('skill2.chip1')}</span>
                            <span className='skills__chip'>{t('skill2.chip2')}</span>
                            <span className='skills__chip'>{t('skill2.chip3')}</span>
                        </div>
                    </li>
                    <li className='skills__item'>
                        <h3 className='skills__item_title'>{t('skill3')}</h3>
                        <div className='skills__item_chips'>
                            <span className='skills__chip'>{t('skill3.chip1')}</span>
                            <span className='skills__chip'>{t('skill3.chip2')}</span>
                            <span className='skills__chip'>{t('skill3.chip3')}</span>
                        </div>
                    </li>
                    <li className='skills__item'>
                        <h3 className='skills__item_title'>{t('skill4')}</h3>
                        <div className='skills__item_chips'>
                            <span className='skills__chip'>{t('skill4.chip1')}</span>
                            <span className='skills__chip'>{t('skill4.chip2')}</span>
                            <span className='skills__chip'>{t('skill4.chip3')}</span>
                            <span className='skills__chip'>{t('skill4.chip4')}</span>
                            <span className='skills__chip'>{t('skill4.chip5')}</span>
                            <span className='skills__chip'>{t('skill4.chip6')}</span>
                        </div>
                    </li>
                    <li className='skills__item'>
                        <h3 className='skills__item_title'>{t('skill5')}</h3>
                        <div className='skills__item_chips'>
                            <span className='skills__chip'>{t('skill5.chip1')}</span>
                            <span className='skills__chip'>{t('skill5.chip2')}</span>
                            <span className='skills__chip'>{t('skill5.chip3')}</span>
                            <span className='skills__chip'>{t('skill5.chip4')}</span>
                            <span className='skills__chip'>{t('skill5.chip5')}</span>
                            <span className='skills__chip'>{t('skill5.chip6')}</span>
                        </div>
                    </li>
                    <li className='skills__item'>
                        <h3 className='skills__item_title'>{t('skill6')}</h3>
                        <div className='skills__item_chips'>
                            <span className='skills__chip'>{t('skill6.chip1')}</span>
                            <span className='skills__chip'>{t('skill6.chip2')}</span>
                            <span className='skills__chip'>{t('skill6.chip3')}</span>
                            <span className='skills__chip'>{t('skill6.chip4')}</span>
                            <span className='skills__chip'>{t('skill6.chip5')}</span>
                            <span className='skills__chip'>{t('skill6.chip6')}</span>
                            <span className='skills__chip'>{t('skill6.chip7')}</span>
                            <span className='skills__chip'>{t('skill6.chip8')}</span>
                        </div>
                    </li>
                    <li className='skills__item'>
                        <h3 className='skills__item_title'>{t('skill7')}</h3>
                        <div className='skills__item_chips'>
                            <span className='skills__chip'>{t('skill7.chip1')}</span>
                            <span className='skills__chip'>{t('skill7.chip2')}</span>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}