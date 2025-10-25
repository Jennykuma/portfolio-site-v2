const About = () => {
  return (
    <section id="about">
      <span className="font-serif-display text-4xl text-sage">about me</span>
      <p>
        Hey there! I’m a UI developer at Cisco who loves building clean, thoughtful interfaces.
        I’m equally curious about the UX side—digging into design choices, sitting in on user interviews,
        and exploring tools like Google Analytics to see what’s clicking (and what’s not 🤭).
        I’m always looking for ways to make things better, from refining code to improving performance
        and making sure everything’s backed by solid tests.
      </p>
      <p className="mt-3">
        Outside of work, you’ll usually find me crocheting something cute, baking, vibing at a concert,
        getting lost in a video game, or planning my next adventure. I love finding cozy cafés and
        hidden gems wherever I go—and I care about the little details, whether it’s a button hover
        state or a perfectly golden cookie!
      </p>
      <img src="/images/river.jpg" className="mt-5" />
    </section>
  );
};

export default About;
