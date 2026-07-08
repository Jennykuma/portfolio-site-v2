import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import { projects } from '../data/projects';
import { type Project as projectItem } from '../types/types';
import { renderDescriptionWithBold } from './Experience/helpers';
import { DotIcon, ExternalLinkIcon } from './icons/SiteIcons';
import 'yet-another-react-lightbox/styles.css';

const Projects = () => {
	const [lightboxOpen, setLightboxOpen] = useState(false);
	const [slides, setSlides] = useState<{ src: string; alt: string }[]>([]);
	const [currentIndex, setCurrentIndex] = useState(0);

	const openLightbox = (
		screenshotList: { src: string; thumbSrc?: string; alt: string }[],
		startIndex: number,
	) => {
		setSlides(
			screenshotList.map((img) => ({
				src: img.src,
				alt: img.alt,
			})),
		);
		setCurrentIndex(startIndex);
		setLightboxOpen(true);
	};

	return (
		<section id='projects' className='projects' aria-labelledby='projects-heading'>
			<h2 className='font-serif-display text-4xl text-sage' id='projects-heading'>
				projects
			</h2>
			<div className='mt-2 space-y-6'>
				{projects.map((project: projectItem) => (
					<div className='project' key={project.title}>
						<div className='flex justify-between items-center'>
							<h3 className='font-serif-display text-lg text-sage mr-2'>
								{project.title}
							</h3>
							<span className='date'>{project.period}</span>
						</div>
						<div className='flex gap-xs mt-1 text-sm'>
							<a
								aria-label={`${project.title} GitHub repository`}
								href={project.github}
								target='_blank'
								rel='noopener noreferrer'
								className='
								flex items-center gap-1 text-zinc-600
								hover:text-sage hover:underline
								dark:text-gray-300 dark:hover:text-sage
								underline-offset-2 transition-colors duration-200'
							>
								<svg
									aria-hidden='true'
									className='w-4 h-4 fill-current'
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 256 256'
								>
									<path d='M208.31,75.68A59.78,59.78,0,0,0,202.93,28,8,8,0,0,0,196,24a59.75,59.75,0,0,0-48,24H124A59.75,59.75,0,0,0,76,24a8,8,0,0,0-6.93,4,59.78,59.78,0,0,0-5.38,47.68A58.14,58.14,0,0,0,56,104v8a56.06,56.06,0,0,0,48.44,55.47A39.8,39.8,0,0,0,96,192v8H72a24,24,0,0,1-24-24A40,40,0,0,0,8,136a8,8,0,0,0,0,16,24,24,0,0,1,24,24,40,40,0,0,0,40,40H96v16a8,8,0,0,0,16,0V192a24,24,0,0,1,48,0v40a8,8,0,0,0,16,0V192a39.8,39.8,0,0,0-8.44-24.53A56.06,56.06,0,0,0,216,112v-8A58.14,58.14,0,0,0,208.31,75.68ZM200,112a40,40,0,0,1-40,40H112a40,40,0,0,1-40-40v-8a41.74,41.74,0,0,1,6.9-22.48A8,8,0,0,0,80,73.83a43.81,43.81,0,0,1,.79-33.58,43.88,43.88,0,0,1,32.32,20.06A8,8,0,0,0,119.82,64h32.35a8,8,0,0,0,6.74-3.69,43.87,43.87,0,0,1,32.32-20.06A43.81,43.81,0,0,1,192,73.83a8.09,8.09,0,0,0,1,7.65A41.72,41.72,0,0,1,200,104Z'></path>
								</svg>
								github
							</a>
							{project.demo && (
								<>
									<DotIcon className='w-3 h-3 text-sage' />
									<a
										aria-label={`${project.title} live demo`}
										href={project.demo}
										target='_blank'
										rel='noopener noreferrer'
										className='
										flex items-center gap-1 text-zinc-600
										hover:text-sage hover:underline
										dark:text-gray-300 dark:hover:text-sage
										underline-offset-2 transition-colors duration-200'
									>
										<ExternalLinkIcon className='w-3.5 h-3.5' />
										demo
									</a>
								</>
							)}
						</div>
						<ul className='mt-2 pl-5 list-disc text-base text-zinc-700 dark:text-gray-300'>
							{project.description.map((point: string, i: number) => (
								<li key={i} className='mt-2'>
									{renderDescriptionWithBold(point)}
								</li>
							))}
						</ul>
						<div className='skills flex flex-wrap gap-2 mt-2'>
							{project.skills.map((skill: string, i: number) => (
								<span
									key={i}
									className='
										px-2 py-0.5 text-sm
										rounded-full text-sage-dark bg-sage/15 dark:bg-sage/15
										dark:text-sage border border-sage/20'
								>
									{skill}
								</span>
							))}
						</div>
						{project.screenshots?.length ? (
							<div className='mt-3 flex flex-nowrap gap-2'>
								{project.screenshots.map((image, idx) => (
									<button
										key={idx}
										className='flex-1 min-w-0 max-w-[150px]'
										type='button'
										onClick={() => {
											openLightbox(project.screenshots!, idx);
										}}
									>
										<img
											src={image.thumbSrc ?? image.src}
											alt={image.alt}
											className='h-20 w-full rounded border border-gray-200 dark:border-zinc-600 cursor-pointer object-cover'
										/>
									</button>
								))}
							</div>
						) : null}
					</div>
				))}
			</div>
			<Lightbox
				open={lightboxOpen}
				index={currentIndex}
				slides={slides}
				close={() => setLightboxOpen(false)}
			/>
		</section>
	);
};

export default Projects;
