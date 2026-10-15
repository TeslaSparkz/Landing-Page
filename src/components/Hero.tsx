export default function Hero() {
  return (
    <section class="fl-hero fl-wrap">
      <div class="fl-hero__text">
        <span class="fl-pill">Open source · Open minds</span>
        <h1>Free software, <span class="fl-accent">built together.</span></h1>
        <p>
          The FOSS community at IIIT Kalyani: students learning, contributing and shipping
          open-source software. Beginners always welcome.
        </p>
        <div class="fl-cta">
          <a href="#contact" class="ds-btn">Join the community</a>
          <a href="#projects" class="ds-btn ds-btn--ghost">Explore projects</a>
        </div>
      </div>

      <div class="fl-term" aria-hidden="true">
        <div class="fl-term__bar"><i /><i /><i /></div>
        <div class="fl-term__body">
          <div><b>$</b> git clone foss-iiitk/hello-world</div>
          <div><b>$</b> git checkout -b my-first-pr</div>
          <div><b>$</b> git commit -m "Hello, open source!"</div>
          <div><b>$</b> git push origin my-first-pr<span class="fl-caret" /></div>
        </div>
      </div>
    </section>
  );
}
