import type { EmblaOptionsType } from "embla-carousel";
import EmblaCarousel from "./EmblaCarousel";

const OPTIONS: EmblaOptionsType = {};
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const Photos = () => {
  return (
    <section id="photos" className="mt-20">
      <span className="font-serif-display text-4xl text-sage">photos</span>
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </section>
  );
};

export default Photos;
