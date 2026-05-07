import { type Experience as ExperienceItem, experience, otherSkills } from '../data/experience';

const Experience = () => {
	return (
		<section id='experience'>
			<span className='font-serif-display text-4xl text-sage'>experience</span>
			<div className='timeline'>
				{experience.map((job: ExperienceItem) => (
					<div key={`${job.company}-${job.period}`} className='node'>
						<div className='details'>
							<b className='company'>{job.company}</b>
							<span className='date'> ({job.period})</span>
							<p className='role'>
								<i>{job.role}</i>
							</p>
							<ul className='description'>
								{job.description.map((item, i) => (
									<li
										key={i}
										className='mt-2 text-sm text-zinc-700 dark:text-gray-300'
									>
										- {item}
									</li>
								))}
							</ul>
							<div className='skills flex flex-wrap gap-2 mt-2'>
								{job.skills.map((skill: string, i: number) => (
									<span
										key={i}
										className='
											px-2 py-0.5 text-sm
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
					</div>
				))}
			</div>
			<div className='other-skills'>
				<div className='font-serif-display text-xl text-sage'>other skills</div>
				<div className='other-skills-grid'>
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
