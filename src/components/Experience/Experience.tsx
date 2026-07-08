import { experience, otherSkills } from '../../data/experience';
import { type Experience as ExperienceItem } from '../../types/types';
import { renderDescriptionWithBold } from './helpers';
import { ExternalLinkIcon } from '../icons/SiteIcons';

const Experience = () => {
	return (
		<section id='experience' aria-labelledby='experience-heading'>
			<h2 className='font-serif-display text-4xl text-sage' id='experience-heading'>
				experience
			</h2>
			<div className='timeline'>
				{experience.map((job: ExperienceItem) => (
					<div key={`${job.company}-${job.period}`} className='node'>
						<div className='details'>
							<div className='job-header flex flex-col sm:flex-row sm:items-center sm:justify-between'>
								<h3 className='company'>{job.company}</h3>
								<span className='date'>{job.period}</span>
							</div>
							<span className='role'>
								<i>{job.role}</i>
							</span>
							<ul className='description list-disc pl-5'>
								{job.description.map((item, i) => (
									<li
										key={i}
										className='mt-2 text-base text-zinc-700 dark:text-gray-300'
									>
										{renderDescriptionWithBold(item)}
									</li>
								))}
							</ul>
							{job.relatedLink && (
								<a
									href={job.relatedLink.href}
									target='_blank'
									rel='noopener noreferrer'
									className='
									flex items-center gap-1 text-sm mt-2
									text-zinc-600 hover:text-sage hover:underline
									dark:text-gray-300 dark:hover:text-sage
									underline-offset-2 transition-colors duration-200'
								>
									<ExternalLinkIcon className='w-3.25 h-3.25' />
									{job.relatedLink.label}
								</a>
							)}
							<div className='skills flex flex-wrap gap-2 mt-2'>
								{job.skills.map((skill: string, i: number) => (
									<span
										key={i}
										className='
											px-2 py-0.5 text-sm
											rounded-full text-sage-dark bg-sage/15 dark:bg-sage/15
										  dark:text-sage border border-sage/20
										'
									>
										{skill}
									</span>
								))}
							</div>
						</div>
					</div>
				))}
			</div>
			<div className='other-skills'>
				<h2 className='font-serif-display text-4xl text-sage'>other skills</h2>
				<div className='other-skills-grid mt-2'>
					{otherSkills.map((group) => (
						<div key={group.category} className='other-skills-row'>
							<span className='label'>{group.category}</span>
							<span className='value text-zinc-700 dark:text-gray-300'>
								{group.skills.join(', ')}
							</span>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Experience;
