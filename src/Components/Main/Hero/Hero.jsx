import './Hero.css';
import { useEffect, useState,useRef } from 'react';
import { IMAGES } from '../../../Utils/Constants.js'

export function Hero() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slidesRef = useRef(null);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const originalSlides = [
        {
            image: IMAGES.web,
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non quisquam, voluptatum ullam fuga rerum vero praesentium labore cum ab magnam voluptates ad quae hic. Eligendi explicabo et ducimus possimus libero.'        
        },
        {
            image: IMAGES.web,
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non quisquam, voluptatum ullam fuga rerum vero praesentium labore cum ab magnam voluptates ad quae hic. Eligendi explicabo et ducimus possimus libero.'        
        },
        {
            image: IMAGES.web,
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non quisquam, voluptatum ullam fuga rerum vero praesentium labore cum ab magnam voluptates ad quae hic. Eligendi explicabo et ducimus possimus libero.'        
        }
    ];
    const slides = [
        originalSlides[originalSlides.length - 1],
        ...originalSlides,
        originalSlides[0]
    ];
    const totalSlides = slides.length;
    const originalTotal = originalSlides.length;

    useEffect(() => {
        setCurrentSlide(1); 
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            if (!isTransitioning) {
                nextSlide();
            }
        }, 5000);

        return () => clearInterval(interval);
    }, [isTransitioning]);

    const nextSlide = () => {
        if (isTransitioning) return;
        
        setIsTransitioning(true);
        setCurrentSlide((prev) => prev + 1);
    };

    const prevSlide = () => {
        if (isTransitioning) return;
        
        setIsTransitioning(true);
        setCurrentSlide((prev) => prev - 1);
    };

    useEffect(() => {
        if (!isTransitioning) return;

        const timer = setTimeout(() => {
            if (currentSlide === totalSlides - 1) {
                if (slidesRef.current) {
                    slidesRef.current.classList.add('no-transition');
                }
                setCurrentSlide(1);
                
                setTimeout(() => {
                    if (slidesRef.current) {
                        slidesRef.current.classList.remove('no-transition');
                    }
                    setIsTransitioning(false);
                }, 50);
            }
            else if (currentSlide === 0) {
                if (slidesRef.current) {
                    slidesRef.current.classList.add('no-transition');
                }
                setCurrentSlide(originalTotal);
                
                setTimeout(() => {
                    if (slidesRef.current) {
                        slidesRef.current.classList.remove('no-transition');
                    }
                    setIsTransitioning(false);
                }, 50);
            } else {
                setIsTransitioning(false);
            }
        }, 500);

        return () => clearTimeout(timer);
    }, [currentSlide, totalSlides, originalTotal]);

    const goToSlide = (index) => {
        if (isTransitioning) return;
        
        setIsTransitioning(true);
        setCurrentSlide(index + 1);
    };

    const getActiveDotIndex = () => {
        if (currentSlide === 0) return originalTotal - 1;
        if (currentSlide === totalSlides - 1) return 0;
        return currentSlide - 1;
    };

    return(
        <section className='hero' id='home'>
            <div className='hero__content'>
                <div className='hero__content_description'>
                    <h1 className='hero__description_title'>
                        Soluciones técnicas integrales
                    </h1>
                    <p className='hero__description_text'>
                        Técnico Electricista | Especialista TI | Desarrollador Full Stack
                    </p>
                    <p className='hero__description_text'>
                        De la electricidad industrial al código: soluciones integrales 
                        para tu hogar, empresa o proyecto digital
                    </p>
                </div>
                
                <div className='hero__slider'>
                    <div className='hero__slides'
                         ref={slidesRef}
                         style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                    >
                        {slides.map((slide, index) => (
                            <div className='hero__slides_content' key={index}>
                                <img 
                                    className='hero__slides_image' 
                                    src={slide.image} 
                                    alt={`Slide ${index + 1}`} 
                                />
                                <p className='hero__slides_description'>
                                    {slide.description}
                                </p>
                            </div>
                        ))}
                    </div>
                    <button 
                        className='hero__slider_arrow prev' 
                        onClick={prevSlide}
                        disabled={isTransitioning}
                    >
                        ❮
                    </button>
                    <button 
                        className='hero__slider_arrow next' 
                        onClick={nextSlide}
                        disabled={isTransitioning}
                    >
                        ❯
                    </button>
                    <div className='hero__slider_controls'>
                        {originalSlides.map((_, index) => (
                            <button
                                key={index}
                                className={`hero__slider_control ${index === getActiveDotIndex() ? 'active' : ''}`}
                                onClick={() => goToSlide(index)}
                                aria-label={`Go to slide ${index + 1}`}
                                disabled={isTransitioning}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )

}
