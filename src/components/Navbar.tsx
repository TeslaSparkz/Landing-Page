import { createSignal, For } from "solid-js";
import { NAV } from "../data/content";

export default function Navbar() {
  const [open, setOpen] = createSignal(false);
  const close = () => setOpen(false);

  return (
    <header class="fl-nav" classList={{ "is-open": open() }}>
      <div class="fl-wrap fl-nav__row">
        <a class="fl-brand" href="#top" onClick={close}>
          <span class="fl-mark" aria-hidden="true">{"{..}"}</span>
          FOSS IIIT Kalyani
        </a>

        <button type="button" class="fl-burger" aria-label="Toggle menu" aria-expanded={open()} onClick={() => setOpen((o) => !o)}>
          <span /><span /><span />
        </button>

        <nav class="fl-links" aria-label="Primary">
          <For each={NAV}>{(n) => <a href={`#${n.toLowerCase()}`} onClick={close}>{n}</a>}</For>
          <a class="ds-btn fl-join" href="#contact" onClick={close}>Join us</a>
        </nav>
      </div>
    </header>
  );
}
