import './Popup.css';
import { IMAGES } from '../../../Utils/Constants.js'
import { useEffect } from 'react';

export function Popup (props) {
    const {onClose, children} = props;
    
    const handleOverlayClick = (e) => {
        
        if (e.target.classList.contains('popup')) {
            onClose();
        }
    };

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
            <div className="popup__content">
                <div className='popup__container'>
                    {children}
                </div>
            </div>
            <button
                style={{backgroundImage: `url(${IMAGES.close_icon})`}}
                aria-label="Close modal"
                className="popup__close_button"
                type="button"
                onClick={onClose}
            />
        </div>
        
    );
}