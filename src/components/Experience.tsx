import { type Experience, experience } from "../data/experience";

const Experience = () => {
    return (
        <section id="experience" className="mt-10">
            <span className="font-serif-display text-4xl text-sage">experience</span>
            <div className="timeline">
                {experience.map((job: Experience) => (
                    <div className="node">
                        <div className="details">
                            <b className="company">{job.company}</b>
                            <span className="date"> ({job.period})</span>
                            <p>
                                <i>{job.role}</i>
                            </p>
                            <ul>
                                {job.description.map((item, i) => (
                                    <li key={i}>- {item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
