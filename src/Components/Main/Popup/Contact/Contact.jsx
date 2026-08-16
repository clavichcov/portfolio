import './Contact.css'
import { useState, useCallback, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { useLanguage } from '../../../../Contexts/LanguageContext.jsx';

export function Contact() {
    const form = useRef();
    const [names, setNames] = useState("");
    const [lastnames, setLastnames] = useState("");
    const [whatsapp, setWhatsapp] = useState("");
    const [email, setEmail] = useState("");
    const [serviceType, setServiceType] = useState("Otro");
    const [message, setMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors]= useState({
        names:"",
        lastnames:"",
        whatsapp:"",
        email:"",
        message:"",
        submit:""
    });
    const { t } = useLanguage();
    
    const validateField = useCallback((fieldName, value) => {
    let error = "";
    
    if (!value.trim() && fieldName!="whatsapp") {
      error = t('contact.error-required');
    } else if (fieldName === "names") {
      if (value.length < 2) {
        error = t('contact.error-minLength-2');
      } else if (value.length > 40){
            error = t('contact.error-maxLength-40');
        }
    } else if (fieldName === "lastnames") {
      if (value.length < 2) {
        error = t('contact.error-minLength-2');
      } else if (value.length > 40){
            error = t('contact.error-maxLength-40');
        }
    } else if(fieldName === "email"){
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            error = t('contact.error-invalidEmail');
        }
    } else if(fieldName === "message"){
        if (value.length < 20) {
            error = t('contact.error-minLength-20');
        } else if (value.length > 1000){
            error = t('contact.error-maxLength-1000');
        }
    }
    if(fieldName === "whatsapp"){
        const whatsappRegex = /^\+?[0-9]+$/;
        if(!whatsappRegex.test(value)){
            error = t('contact.error-invalidPhone');
        } else if (value.length < 6) {
            error = t('contact.error-minLength-6');
        } else if (value.length > 30){
            error = t('contact.error-maxLength-30');
        }
    }
    return error;
  },[]);

   
    const handleChange = (e) => {
        const {name, value}= e.target
        if (name === 'names-input'){
            setNames(value);
            setErrors(prev => ({ ...prev, names: validateField("names", value) }));
        } else if(name==='lastnames-input'){
            setLastnames(value);
            setErrors(prev => ({ ...prev, lastnames: validateField("lastnames", value) }));
        } else if(name==='whatsapp-input'){
            setWhatsapp(value);
            setErrors(prev => ({ ...prev, whatsapp: validateField("whatsapp", value) }));
        } else if(name==='email-input'){
            setEmail(value);
            setErrors(prev => ({ ...prev, email: validateField("email", value) }));
        } else if(name=='servicetype-select'){
            setServiceType(value);
        } else if(name=='message-textarea'){
            setMessage(value);
            setErrors(prev => ({ ...prev, message: validateField("message", value) }));
        }
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const namesValid = !validateField("names", names);
        const lastnamesValid = !validateField("lastnames", lastnames);
        const whatsappValid = !validateField("whatsapp", whatsapp);
        const emailValid = !validateField("email", email);
        const messageValid = !validateField("message", message);
        if (!namesValid && !lastnamesValid && !whatsappValid && !emailValid && !messageValid) {
            setErrors(prev => ({ ...prev, 
                submit: t('contact.error-validationSummary') 
            }));
            return;
        };

        setIsLoading(true);
        setErrors(prev => ({ ...prev, submit: "" }));
        
        try {
            const response = await emailjs.sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                form.current,
                
            );
            //cambiar a mensaje en popup
            console.log("Email enviado exitosamente!", response);
            
            form.current.reset();
            setNames("");
            setLastnames("");
            setWhatsapp("");
            setEmail("");
            setMessage("");
            setServiceType("4");
            //cambiar a mensaje en popup
            alert(t('contact.alert'));
            
        } catch (error) {
            console.error(t('contact.error-submitFailed'), error);
            setErrors(prev => ({
                ...prev,
                submit: t('contact.error-submitException')
            }));
        } finally {
            setIsLoading(false);
        }
    };
    const isFormValid = 
    names.trim() !== "" && !errors.names &&
    lastnames.trim() !== "" && !errors.lastnames &&
    email.trim() !== "" && !errors.email &&
    message.trim().length >= 20 && !errors.message &&
    (whatsapp.trim() === "" || !errors.whatsapp);
    useEffect(() => {
        emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
    }, []);
   
    
    return (
        <>
            <form 
            className='contact'
            ref={form}
            onSubmit={handleSubmit}
            >
                <div className='contact__content'>
                    <h3 className='contact__title'>{t('contact.title')}</h3>
                    <label className="contact__wrapper">
                        {t('contact.names')}
                    </label>
                    <input
                        className={`contact__input contact__input_name ${errors.names ?
                            'contact__input_error' : ''}`}
                        id="names-input"
                        value={names}
                        onChange={handleChange}
                        maxLength="100"
                        minLength="2"
                        name="names-input"
                        placeholder={t('contact.names-placeholder')}
                        required
                        type="text"
                    />
                    <span className="contact__error" id="names-error">{errors.names}</span>

                    <label className="contact__wrapper">
                        {t('contact.lastnames')}
                    </label>
                    <input
                        className={`contact__input contact__input_lastnames ${errors.lastnames ?
                            'contact__input_error' : ''}`}
                        id="lastnames-input"
                        value={lastnames}
                        onChange={handleChange}
                        maxLength="100"
                        minLength="2"
                        name="lastnames-input"
                        placeholder={t('contact.lastnames-placeholder')}
                        required
                        type="text"
                    />
                    <span className="contact__error" id="lastnames-error">{errors.lastnames}</span>

                    <label className="contact__wrapper">
                        {t('contact.whatsapp')}
                    </label>
                    <input
                        className={`contact__input contact__input_whatsapp ${errors.whatsapp ?
                            'contact__input_error' : ''}`}
                        id="whatsapp-input"
                        value={whatsapp}
                        onChange={handleChange}
                        maxLength="30"
                        minLength="6"
                        name="whatsapp-input"
                        placeholder={t('contact.whatsapp-placeholder')}
                        type="tel"
                    />
                    <span className="contact__error" id="whatsapp-error">{errors.whatsapp}</span>

                    <label className="contact__wrapper">
                        {t('contact.email')}
                    </label>
                    <input
                        className={`contact__input contact__input_email ${errors.email ?
                            'contact__input_error' : ''}`}
                        id="email-input"
                        value={email}
                        onChange={handleChange}
                        maxLength="60"
                        minLength="5"
                        name="email-input"
                        placeholder={t('contact.email-placeholder')}
                        required
                        type="email"
                    />
                    <span className="contact__error" id="email-error">{errors.email}</span>

                    <label className="contact__wrapper">
                        {t('contact.select-title')}
                    </label>
                    <select className="contact__select"
                        id="servicetype-select"
                        name="servicetype-select"
                        value={serviceType}
                        onChange={handleChange}
                    >
                        <option className='' value="Desarrollo web">{t('contact.select-line0')}</option>
                        <option className='' value="Soporte TI">{t('contact.select-line1')}</option>
                        <option className='' value="Electricidad">{t('contact.select-line2')}</option>
                        <option className='' value="Consultoría">{t('contact.select-line3')}</option>
                        <option className='' value="Otro">{t('contact.select-line4')}</option>
                    </select>

                    <label className="contact__wrapper">
                       {t('contact.message')}
                    </label>
                    <textarea
                        className="contact__textarea contact__textarea_message"
                        className={`contact__textarea contact__textarea_message ${errors.message ?
                            'contact__input_error' : ''}`}
                        id="message-textarea"
                        value={message}
                        onChange={handleChange}
                        maxLength="1000"
                        minLength="20"
                        name="message-textarea"
                        placeholder={t('contact.message-placeholder')}
                        required
                    />
                    <span className="contact__error" id="message-error">{errors.message}</span>

                    <span className="contact__error" id="submit-error">{errors.submit}</span>
                    <button 
                    className="contact__submit" 
                    type="submit"
                    disabled={!isFormValid}>
                       {isLoading ? t('contact.button-sending') : t('contact.button')} 
                    </button>
                </div>
                

            </form>
        </>
    );
}