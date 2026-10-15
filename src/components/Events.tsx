import { For } from "solid-js";
import { EVENTS } from "../data/content";
import Section from "./Section";

export default function Events() {
  return (
    <Section id="events" label="Events & activities" title="Join us at the next one">
      <div class="fl-grid fl-grid--4">
        <For each={EVENTS}>
          {(e) => (
            <article class="ds-card fl-lift">
              <span class="fl-date">{e.date}</span>
              <h3>{e.title}</h3>
              <p>{e.text}</p>
              <span class="fl-tag">{e.tag}</span>
            </article>
          )}
        </For>
      </div>
    </Section>
  );
}
