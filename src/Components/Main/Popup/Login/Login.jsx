import './Login.css';
import { useState, useCallback, useContext } from 'react';
import { Routes, Route, Navigate, useNavigate, useLocation } from "react-router-dom";
import { useLanguage } from '../../../../Contexts/LanguageContext.jsx';
import UserContext from '../../../../Contexts/UserContext.jsx';

export function Login() {
    const { t } = useLanguage();
    const navigate = useNavigate();
    const { handleLogin } = useContext(UserContext);
    const [isLoading, setIsLoading] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("user");
    const [errors, setErrors]= useState({
        email:"",
        password:"",
        submit:""
    });

    const validateField = useCallback((fieldName, value) => {
        let error = "";
        
        if (!value.trim()) {
          error = t('login.error-required');
        } else  if(fieldName === "email"){
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                error = t('login.error-invalidEmail');
            }
        } else if (fieldName === "password") {
          if (value.length < 2) {
            error = t('login.error-minLength-2');
          } else if (value.length < 6){
                error = t('login.error-minLength-6');
            }
        }
        
        return error;
    },[t]);
    
    const handleChange = (e) => {
        const {name, value}= e.target
        if(name==='email-input'){
            setEmail(value);
            setErrors(prev => ({ ...prev, email: validateField("email", value) }));
        } else if (name === 'password-input'){
            setPassword(value);
            setErrors(prev => ({ ...prev, password: validateField("password", value) }));
        } 
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const passwordValid = !validateField("password", password);
        const emailValid = !validateField("email", email);
        if (!passwordValid && !emailValid) {
            setErrors(prev => ({ ...prev, 
                submit: t('login.error-validationSummary') 
            }));
            return;
        };
        const success = handleLogin( email, password, role );
        if(success){
            navigate('/');
            setErrors(prev => ({ ...prev, submit: "" }));
        } else {
            setErrors(prev => ({ ...prev, submit: "Error al iniciar sesión" }));
        }
        
        setErrors(prev => ({ ...prev, submit: "" }));
        /*
        try {
            const response = '0';
                
            
        } catch (error) {
            console.error(t('login.error-submitFailed'), error);
            setErrors(prev => ({
                ...prev,
                submit: t('login.error-submitException')
            }));
        } finally {
            setIsLoading(false);
        }*/
    };
    const isFormValid = 
    password.trim() !== "" && !errors.password &&
    email.trim() !== "" && !errors.email
    return (
        <form 
            className='login'
            onSubmit={handleSubmit}
        >
            <div className='login__content'>
                <h3 className='login__title'>{t('login.title')}</h3>
                <label className="login__wrapper">
                        {t('login.email')}
                </label>
                <input
                        className={`login__input login__input_email ${errors.email ?
                            'login__input_error' : ''}`}
                        id="email-input"
                        value={email}
                        onChange={handleChange}
                        maxLength="60"
                        minLength="5"
                        name="email-input"
                        placeholder={t('login.email-placeholder')}
                        required
                        type="email"
                    />
                    <span className="login__error" id="email-error">{errors.email}</span>
                    <label className="login__wrapper">
                        {t('login.password')}
                    </label>
                    <input
                        className={`login__input login__input_password ${errors.password ?
                            'login__input_error' : ''}`}
                        id="password-input"
                        value={password}
                        onChange={handleChange}
                        maxLength="100"
                        minLength="2"
                        name="password-input"
                        placeholder={t('login.password-placeholder')}
                        required
                        type="password"
                    />
                    <span className="login__error" id="password-error">{errors.password}</span>
                    <select className="login__select"
                        id="logintype-select"
                        name="logintype-select"
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                    >
                        <option className='' value="user">{t('login.select-line0')}</option>
                        <option className='' value="admin">{t('login.select-line1')}</option>
                        
                    </select>
                    <button 
                        className="login__submit" 
                        type="submit"
                        disabled={!isFormValid}>
                        {isLoading ? t('login-sending') : t('login.button')} 
                    </button>
            </div>

        </form>
    );
}