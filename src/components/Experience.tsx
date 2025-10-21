const Experience = () => {
  return (
    <section id="experience" className="mt-20">
      <span className="font-serif-display text-4xl text-sage">experience</span>
      <div className="timeline">
        <div className="node">
          <div className="details">
            <b>Cisco Secure Access</b>
            <p>september 2025 - present</p>
            <p>put role stuff here</p>
          </div>
        </div>

        <div className="node after:bg-zinc-800">
          <div className="details">
            <b>Cisco Secure Endpoint</b>
            <p>january 2020 - september 2025</p>
            <p>put role stuff here</p>
          </div>
        </div>

        <div className="node">
          <div className="details">
            <b>CNOOC International</b>
            <p>may 2018 - aug 2019</p>
            <p>put role stuff here</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
