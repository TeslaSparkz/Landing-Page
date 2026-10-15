import type { ParentProps } from "solid-js";
import { reveal } from "../hooks/reveal";

export default function Section(props: ParentProps<{ id: string; label: string; title: string }>) {
  return (
    <section id={props.id} class="fl-sec">
      <div class="fl-wrap" ref={reveal}>
        <span class="ds-label">{props.label}</span>
        <h2 class="fl-h2">{props.title}</h2>
        {props.children}
      </div>
    </section>
  );
}
