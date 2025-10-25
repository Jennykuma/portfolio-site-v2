import type { EmblaOptionsType } from "embla-carousel";
import EmblaCarousel from "./EmblaCarousel";
import type { Slide } from "../types/types";

// const OPTIONS: EmblaOptionsType = {};
// const SLIDE_COUNT = 5;
// const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const SLIDES: Array<Slide> = [
  {
    imagePath: "src/assets/images/1.jpg",
    altText: 'bear'
  },
  {
    imagePath: "src/assets/images/2.jpg",
    altText: 'another bear'
  },
    {
    imagePath: "src/assets/images/3.jpg",
    altText: 'bear'
  },
  {
    imagePath: "src/assets/images/4.jpg",
    altText: 'another bear'
  }
]

const Photos = () => {
  return (
    <section id="photos" className="mt-10">
      <span className="font-serif-display text-4xl text-sage">photos</span>
      <EmblaCarousel slides={SLIDES} />
    </section>
  );
};

export default Photos;
