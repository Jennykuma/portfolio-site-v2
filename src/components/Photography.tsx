import EmblaCarousel from './EmblaCarousel';
import type { Slide } from '../types/types';

const IMAGE_SIZES = '(max-width: 640px) 84vw, (max-width: 1024px) 42vw, 340px';

const createSlide = (
	id: string,
	extension: 'JPG' | 'jpg',
	altText: string,
	width = 680,
	height = 1020,
): Slide => ({
	imagePath: `/images/web/${id}.${extension}`,
	imageSrcSet: [
		`/images/web/optimized/${id}-420.webp 420w`,
		`/images/web/optimized/${id}-680.webp 680w`,
		`/images/web/optimized/${id}-960.webp 960w`,
	].join(', '),
	sizes: IMAGE_SIZES,
	altText,
	width,
	height,
});

const SLIDES: Array<Slide> = [
	createSlide('1', 'JPG', 'laundry drying', 680, 453),
	createSlide('2', 'JPG', 'alley at night'),
	createSlide('3', 'JPG', 'bamboo forest'),
	createSlide('4', 'jpg', 'restaurant by the river'),
	createSlide('5', 'JPG', 'cherry blossoms'),
	createSlide('6', 'JPG', 'traditional cafe'),
	createSlide('7', 'JPG', 'more blossoms'),
	createSlide('8', 'JPG', 'temple through the trees'),
	createSlide('9', 'JPG', 'sunlight hitting the alley and plants'),
];

const Photography = () => {
	return (
		<section id='photography' aria-labelledby='photography-heading'>
			<h2 id='photography-heading' className='font-serif-display text-4xl text-sage'>
				photography
			</h2>
			<EmblaCarousel slides={SLIDES} />
		</section>
	);
};

export default Photography;
