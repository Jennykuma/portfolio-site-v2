import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { type EmblaOptionsType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";

type PropType = {
    slides: Number[];
    options?: EmblaOptionsType;
}

const EmblaCarousel = (props: PropType) => {
    const { slides, options } = props;
    const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi]);


    return (
        <div className="embla" ref={emblaRef}>
            <div className="embla-viewport">
                <div className="embla-container">
                    {slides.map(index => (
                        <div className="embla-slide" key={index.toString()}>Slide {index.toString()}</div>
                    ))}
                </div>
            </div>
            <button className="embla-prev" onClick={scrollPrev}>
                Prev
            </button>
            <button className="embla-next" onClick={scrollNext}>
                Next
            </button>
        </div>
   )
};

export default EmblaCarousel;