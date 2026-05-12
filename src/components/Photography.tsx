import EmblaCarousel from './EmblaCarousel';
import type { Slide } from '../types/types';

const SLIDES: Array<Slide> = [
	{
		imagePath: '/images/web/1.JPG',
		altText: 'laundry drying',
	},
	{
		imagePath: '/images/web/2.JPG',
		altText: 'alley at night',
	},
	{
		imagePath: '/images/web/3.JPG',
		altText: 'bamboo forest',
	},
	{
		imagePath: '/images/web/4.jpg',
		altText: 'restaurant by the river',
	},
	{
		imagePath: '/images/web/5.JPG',
		altText: 'cherry blossoms',
	},
	{
		imagePath: '/images/web/6.JPG',
		altText: 'traditional cafe',
	},
	{
		imagePath: '/images/web/7.JPG',
		altText: 'more blossoms',
	},
	{
		imagePath: '/images/web/8.JPG',
		altText: 'temple through the trees',
	},
	{
		imagePath: '/images/web/9.JPG',
		altText: 'sunlight hitting the alley and plants',
	},
];

const Photography = () => {
	return (
		<section id='photography'>
			<h2 className='font-serif-display text-4xl text-sage'>photography</h2>
			<EmblaCarousel slides={SLIDES} />
		</section>
	);
};

export default Photography;
