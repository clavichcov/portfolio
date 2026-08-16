import './Register.css';
import { useState, useCallback } from 'react';
import { useLanguage } from '../../../../Contexts/LanguageContext.jsx';

export function Register() {
    const { t } = useLanguage();
    const [names, setNames] = useState("");
    const [lastnames, setLastnames] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const [isLoading, setIsLoading] = useState(false);
    const [registerType, setRegisterType] = useState("Usuario");
    const [errors, setErrors]= useState({
        names:"",
        lastnames:"",
        email:"",
        password:"",
        submit:""
    });

    const validateField = useCallback((fieldName, value) => {
        let error = "";
        
        if (!value.trim()) {
          error = t('register.error-required');
        } else  if (fieldName === "names") {
            if (value.length < 2) {
                error = t('register.error-minLength-2');
            } else if (value.length > 40){
                error = t('register.error-maxLength-40');
            }
        } else if (fieldName === "lastnames") {
            if (value.length < 2) {
                error = t('register.error-minLength-2');
            } else if (value.length > 40){
                error = t('register.error-maxLength-40');
            }
        } else if(fieldName === "email"){
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                error = t('register.error-invalidEmail');
            }
        } else if (fieldName === "password") {
          if (value.length < 2) {
            error = t('register.error-minLength-2');
          } else if (value.length < 6){
                error = t('register.error-minLength-6');
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
        } else if(name==='email-input'){
            setEmail(value);
            setErrors(prev => ({ ...prev, email: validateField("email", value) }));
        } else if (name === 'password-input'){
            setPassword(value);
            setErrors(prev => ({ ...prev, password: validateField("password", value) }));
        } 
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const namesValid = !validateField("names", names);
        const lastnamesValid = !validateField("lastnames", lastnames);
        const passwordValid = !validateField("password", password);
        const emailValid = !validateField("email", email);
        if (!namesValid && !lastnamesValid && !passwordValid && !emailValid) {
            setErrors(prev => ({ ...prev, 
                submit: t('register.error-validationSummary') 
            }));
            return;
        };

        setIsLoading(true);
        setErrors(prev => ({ ...prev, submit: "" }));
        
        try {
            await new Promise(resolve => setTimeout(resolve, 1500));
            console.log("Registro exitoso");    
            
        } catch (error) {
            console.error(t('register.error-submitFailed'), error);
            setErrors(prev => ({
                ...prev,
                submit: t('register.error-submitException')
            }));
        } finally {
            setIsLoading(false);
        }
    };
    const isFormValid = 
    names.trim() !== "" && !errors.names &&
    lastnames.trim() !== "" && !errors.lastnames &&
    password.trim() !== "" && !errors.password &&
    email.trim() !== "" && !errors.email
    return (
        <form 
            className='register'
            onSubmit={handleSubmit}
        >
            
            <div className='register__content'>
                <h3 className='register__title'>{t('register.title')}</h3>
                <label className="register__wrapper">
                    {t('register.names')}
                </label>
                <input
                    className={`register__input register__input_name ${errors.names ?
                        'register__input_error' : ''}`}
                    id="names-input"
                    value={names}
                    onChange={handleChange}
                    maxLength="100"
                    minLength="2"
                    name="names-input"
                    placeholder={t('register.names-placeholder')}
                    required
                    type="text"
                />
                <span className="register__error" id="names-error">{errors.names}</span>

                <label className="register__wrapper">
                    {t('register.lastnames')}
                </label>
                <input
                    className={`register__input register__input_lastnames ${errors.lastnames ?
                        'register__input_error' : ''}`}
                    id="lastnames-input"
                    value={lastnames}
                    onChange={handleChange}
                    maxLength="100"
                    minLength="2"
                    name="lastnames-input"
                    placeholder={t('register.lastnames-placeholder')}
                    required
                    type="text"
                />
                <span className="register__error" id="lastnames-error">{errors.lastnames}</span>
                <label className="register__wrapper">
                        {t('register.email')}
                </label>
                <input
                        className={`register__input register__input_email ${errors.email ?
                            'register__input_error' : ''}`}
                        id="email-input"
                        value={email}
                        onChange={handleChange}
                        maxLength="60"
                        minLength="5"
                        name="email-input"
                        placeholder={t('register.email-placeholder')}
                        required
                        type="email"
                    />
                    <span className="register__error" id="email-error">{errors.email}</span>
                    <label className="register__wrapper">
                        {t('register.password')}
                    </label>
                    <input
                        className={`register__input register__input_password ${errors.password ?
                            'register__input_error' : ''}`}
                        id="password-input"
                        value={password}
                        onChange={handleChange}
                        maxLength="100"
                        minLength="2"
                        name="password-input"
                        placeholder={t('register.password-placeholder')}
                        required
                        type="password"
                    />
                    <span className="register__error" id="password-error">{errors.password}</span>
                    <select className="register__select"
                        id="registertype-select"
                        name="registertype-select"
                        value={registerType}
                        onChange={handleChange}
                    >
                        <option className='' value="Usuario">{t('register.select-line0')}</option>
                        <option className='' value="Administrador">{t('register.select-line1')}</option>
                        
                    </select>
                    <button 
                        className="register__submit" 
                        type="submit"
                        disabled={!isFormValid}>
                        {isLoading ? t('register.button-sending') : t('register.button')} 
                    </button>
            </div>

        </form>
    );
}