import { onCleanup } from "solid-js";

export function reveal(el: HTMLElement) {
  el.classList.add("fl-reveal");
  const io = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        el.classList.add("is-in");
        io.disconnect();
      }
    },
    { threshold: 0.12 },
  );
  io.observe(el);
  onCleanup(() => io.disconnect());
}
