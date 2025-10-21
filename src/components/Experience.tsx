const Experience = () => {
  return (
    <section id="experience" className="mt-20">
      <span className="font-serif-display text-4xl text-sage">experience</span>
      <div className="timeline">
        <div className="node">
          <div className="details">
            <p>
              <b className="company">Cisco Secure Access</b>{" "}
              <span className="date">(september 2025 - present)</span>
            </p>
            <p className="description">
              Building intuitive React + TypeScript interfaces for Cisco’s Zero Trust platform, with
              a current focus on Endpoint Data Loss Prevention (EDLP). Designing policy creation and
              monitoring workflows, surfacing classification/labels, and crafting incident triage
              and reporting views—prioritizing performance, accessibility, and clean data
              visualizations.
            </p>
          </div>
        </div>

        <div className="node">
          <div className="details">
            <p>
              <b className="company">Cisco Secure Endpoint</b>{" "}
              <span className="date">(january 2020 - september 2025)</span>
            </p>
            <p className="description">
              Engineered and maintained critical UI components using Vue.js and React.js, directly
              contributing to Cisco Secure Endpoint’s success in the MITRE Engenuity ATT&CK
              Evaluation. Played a key role in modernizing legacy pages like the Events page through
              the Magnetizing initiative, adopting a new design framework for a more consistent and
              user-centric experience. Collaborated with cross-functional teams to refine APIs,
              optimize performance, and deliver seamless enterprise security workflows backed by
              React Query and data-driven insights.
            </p>
          </div>
        </div>

        <div className="node">
          <div className="details">
            <p>
              <b className="company">CNOOC International</b>{" "}
              <span className="date">(may 2018 - august 2019)</span>
            </p>
            <p className="description">
              Developed internal web tools to streamline oil well data visualization and reporting
              for geologists and analysts. Delivered production-level dashboards using C#, SQL,
              JavaScript, and Google Charts to centralize exploration results and improve
              efficiency. Conducted UI research and prototyping in Figma to design intuitive,
              data-driven interfaces that enhanced decision-making and reduced manual workloads.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
