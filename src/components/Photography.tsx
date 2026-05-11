import EmblaCarousel from './EmblaCarousel';
import type { Slide } from '../types/types';

const SLIDES: Array<Slide> = [
	{
		imagePath: '/images/web/DSCF0373.JPG',
		altText: 'mountain and valley',
	},
	{
		imagePath: '/images/web/DSCF0380.JPG',
		altText: 'cloudy mountain view',
	},
	{
		imagePath: '/images/web/DSCF0474.JPG',
		altText: 'river landscape',
	},
	{
		imagePath: '/images/web/DSCF1206.JPG',
		altText: 'sunset landscape',
	},
	{
		imagePath: '/images/web/DSCF1217.JPG',
		altText: 'mountain panorama',
	},
	{
		imagePath: '/images/web/DSCF1286.JPG',
		altText: 'trail and trees',
	},
	{
		imagePath: '/images/web/4.jpg',
		altText: 'landscape detail',
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
