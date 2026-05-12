import { Dot, ExternalLinkIcon, MailIcon } from 'lucide-react';
import GitHubIcon from './icons/GitHubIcon';

const About = () => {
	return (
		<section id='about'>
			<h2 className='font-serif-display text-4xl text-sage'>about</h2>
			<div className='flex flex-wrap items-center gap-1 mt-1 mb-1 text-xs'>
				<a
					href='https://docs.google.com/document/d/1HA1GSLI_EDFc2xo64T8sKAP7vPcBgZQG_HNz8qpoDRs/edit?usp=sharing'
					target='_blank'
					rel='noopener noreferrer'
					className='
						flex items-center gap-1 text-zinc-600
						hover:text-sage hover:underline
						dark:text-gray-300 dark:hover:text-sage
						underline-offset-2 transition-colors duration-200
					'
				>
					<ExternalLinkIcon className='w-3.5 h-3.5' />
					resume
				</a>
				<Dot className='text-sage' />
				<a
					href='https://www.linkedin.com/in/jennyle05'
					target='_blank'
					rel='noopener noreferrer'
					className='
						flex items-center gap-1 text-zinc-600
						hover:text-sage hover:underline
						dark:text-gray-300 dark:hover:text-sage
						underline-offset-2 transition-colors duration-200
					'
				>
					<ExternalLinkIcon className='w-3.5 h-3.5' />
					linkedin
				</a>
				<Dot className='text-sage' />
				<a
					href='https://github.com/Jennykuma'
					target='_blank'
					rel='noopener noreferrer'
					className='
						flex items-center gap-1 text-zinc-600
						hover:text-sage hover:underline
						dark:text-gray-300 dark:hover:text-sage
						underline-offset-2 transition-colors duration-200
					'
				>
					<GitHubIcon className='w-4 h-4 fill-current' />
					github
				</a>
				<Dot className='text-sage' />
				<a
					href='mailto:jennyle.dev@gmail.com'
					className='
						flex items-center gap-1 text-zinc-600
						hover:text-sage hover:underline
						dark:text-gray-300 dark:hover:text-sage
						underline-offset-2 transition-colors duration-200
					'
				>
					<MailIcon className='w-3.5 h-3.5' />
					email
				</a>
			</div>
			<p className='text-zinc-700 dark:text-gray-300'>
				Hey there! I’m a UI developer at Cisco who loves building clean, thoughtful
				interfaces. I’m equally curious about the UX side, like digging into design choices,
				sitting in on user interviews, and exploring tools like Google Analytics to see
				what’s clicking (and what’s not 🤭). I’m always looking for ways to make things
				better, from refining code to improving performance and making sure everything’s
				backed by solid tests.
			</p>
			<p className='mt-3 text-zinc-700 dark:text-gray-300'>
				Outside of work, you’ll usually find me crocheting something cute, baking, vibing at
				a concert, getting lost in a video game, reading a spine-chilling murder mystery, or
				planning my next adventure. I love finding cozy cafés and hidden gems wherever I
				go—and I care about the little details, whether it’s a button hover state or a
				perfectly golden cookie!
			</p>
			<img src='/images/river.jpg' alt='River landscape' className='mt-5' />
		</section>
	);
};

export default About;
