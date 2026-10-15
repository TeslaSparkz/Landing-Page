import { For } from "solid-js";
import { SOCIALS } from "../data/content";
import Section from "./Section";

export default function Contact() {
  return (
    <Section id="contact" label="Contact" title="Get involved">
      <div class="ds-card fl-contact">
        <p class="fl-lead">
          New to open source? Come to any event, ask questions, and make your first
          contribution with us.
        </p>
        <a class="ds-btn" href="#">Email us</a>
        <div class="fl-socials">
          <For each={SOCIALS}>{(s) => <a href={s.href} class="fl-social">{s.label}</a>}</For>
        </div>
      </div>
    </Section>
  );
}
