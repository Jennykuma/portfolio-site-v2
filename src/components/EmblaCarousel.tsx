import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { type EmblaOptionsType } from "embla-carousel";
import type { Slide } from "../types/types";
import "../styles/emblaCarousel.scss"
 
type PropType = {
    slides: Array<Slide>;
    // options?: EmblaOptionsType;
}

const EmblaCarousel = (props: PropType) => {
    // const { slides, options } = props;
    const { slides } = props;
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi]);


    return (
        <div className="embla">
            <div className="embla-viewport" ref={emblaRef}>
                <div className="embla-container">
                    {slides.map((slide: Slide, index: number) => (
                        <div className="embla-slide" key={index}>
                            <img
                                src={`/images/${index + 1}.jpg`}
                                alt={slide.altText}
                            />
                        </div>
                    ))}
                </div>
            </div>
            <div className="embla-buttons">
                <button className="embla-prev" onClick={scrollPrev}>
                    Prev
                </button>
                <button className="embla-next" onClick={scrollNext}>
                    Next
                </button>
            </div>
        </div>
   )
};

export default EmblaCarousel;