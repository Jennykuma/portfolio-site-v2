import { type Project as projectItem, projects } from '../data/projects';

const Projects = () => {
	return (
		<section id='projects' className='projects'>
			<span className='font-serif-display text-4xl text-sage'>projects</span>
			{projects.map((project: projectItem) => (
				<div className='project' key={project.title}>
					<div className='flex justify-between items-center'>
						<span className='font-serif-display text-xl text-sage mr-2'>
							{project.title}
						</span>
						<span className='date'>{project.period}</span>
					</div>
					<div className='mt-2 text-sm text-zinc-700 dark:text-gray-300'>
						{project.description}
					</div>
					<div className='skills flex flex-wrap gap-2 mt-2'>
						{project.skills.map((skill: string, i: number) => (
							<span
								key={i}
								className='
									px-2 py-0.5 text-xs
									rounded-full bg-zinc-100
									text-zinc-700 dark:bg-zinc-700
									dark:text-gray-200
									border border-sage/20
								'
							>
								{skill}
							</span>
						))}
					</div>
				</div>
			))}
		</section>
	);
};

export default Projects;
