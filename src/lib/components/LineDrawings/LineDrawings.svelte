<script>
  import gsap from "gsap";
  import { onMount } from "svelte";

  import * as svgs from "./svgs";
  import { getPositionOnPath } from "gsap/utils/paths";

  export let line;
  export let duration
  let lineElement;

  let pathInfos = [];

  onMount(() => {
    if (lineElement) {
      const paths = lineElement.querySelectorAll(".draw-me");
      paths.forEach((path) => {
        const pathInfo = {
          path,
          pathLength: path.getTotalLength(),
        };
        pathInfos.push(pathInfo);
        gsap.set(path, {
          strokeDasharray: pathInfo.pathLength,
          "--total-length": pathInfo.pathLength,
        });
      });
    }
  });
</script>

<span class="line-drawing" style="--duration: {duration}" bind:this={lineElement}>
  <svelte:component
    this={svgs[line]}
    inert
  ></svelte:component>
</span>

<style lang="scss">
  .line-drawing {
    width: 100%;
    height: 100%;
    color: var(--accent-color);
    :global(svg) {
      width: 100%;
      height: auto;
    }
    :global(.draw-me) {
      transition: stroke-dashoffset var(--duration) ease-out,
        opacity 0s var(--duration) ease-out;
      stroke-dashoffset: var(--total-length);
    }
    :global(g[mask]:nth-child(2) .draw-me) {
      transition-delay: 0.1s;
    }
    :global(g[mask]:nth-child(3) .draw-me) {
      transition-delay: 0.2s;
    }
    :global(g[mask]:nth-child(4) .draw-me) {
      transition-delay: 0.3s;
    }
  }
  :global(a:hover .line-drawing),
  :global(a.is-active .line-drawing) {
    opacity: 1;
  }
  :global(a:hover .draw-me),
  :global(a.is-active .draw-me) {
    stroke-dashoffset: 0 !important;
    transition: stroke-dashoffset 0.5s ease-out;
  }
</style>
