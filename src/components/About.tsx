import { For } from "solid-js";
import { PILLARS } from "../data/content";
import Section from "./Section";

export default function About() {
  return (
    <Section id="about" label="About" title="What we're about">
      <p class="fl-lead">
        FOSS IIIT Kalyani is a student-run club that promotes free and open-source software
        through workshops, projects and community events.
      </p>
      <div class="fl-grid fl-grid--3">
        <For each={PILLARS}>
          {(p) => (
            <article class="ds-card fl-lift">
              <span class="fl-icon" aria-hidden="true">{p.icon}</span>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </article>
          )}
        </For>
      </div>
    </Section>
  );
}
