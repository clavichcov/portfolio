import './Popup.css';
import { IMAGES } from '../../../Utils/Constants.js'
import { useEffect } from 'react';

export function Popup (props) {
    const {onClose, popupType, children} = props;
    
    const handleOverlayClick = (e) => {
        
        if (e.target.classList.contains('popup')) {
            onClose();
        }
    };

    function handlePopupType(type) {
        if (type === "documents"){
            return "popup__content_documents"
        } else if (type === "contact") {
            return "popup__content_contact"
        } else if (type === "command" || type === "register") {
            return "popup__content_command"
        } else {
            return "popup__content_other"
        }
    }
    
    const handleEscKey = (e) => {
        if (e.key === 'Escape') {
            onClose();
        }
    };

    useEffect(() => {
        document.addEventListener('keydown', handleEscKey);
        document.body.style.overflow = 'hidden';
        return () => {
            document.removeEventListener('keydown', handleEscKey);
            document.body.style.overflow = 'auto';
        };
    }, []);
    
    return (
        <div className='popup' onClick={handleOverlayClick}>
            <div className={handlePopupType(popupType)}>
                <div className='popup__container'>
                    {children}
                </div>
                <button
                    style={{backgroundImage: `url(${IMAGES.close_icon})`}}
                    aria-label="Close modal"
                    className="popup__close_button"
                    type="button"
                    onClick={onClose}
                />
            </div>
            
        </div>
        
    );
}