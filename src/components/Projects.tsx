import { For } from "solid-js";
import { PROJECTS } from "../data/content";
import Section from "./Section";

export default function Projects() {
  return (
    <Section id="projects" label="Projects" title="Things we're building">
      <div class="fl-grid fl-grid--2">
        <For each={PROJECTS}>
          {(p) => (
            <a href="#" class="ds-card fl-lift fl-project">
              <h3>{p.name}</h3>
              <p>{p.text}</p>
              <div class="fl-tags">
                <For each={p.stack}>{(s) => <span class="fl-tag">{s}</span>}</For>
              </div>
              <span class="fl-arrow" aria-hidden="true">↗</span>
            </a>
          )}
        </For>
      </div>
    </Section>
  );
}
