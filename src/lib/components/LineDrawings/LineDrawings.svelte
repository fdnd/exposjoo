<script>
  import gsap from 'gsap'
  import { onMount } from 'svelte'

  import * as svgs from './svgs'

  export let line
  export let duration = '0.4s'
  let lineElement

  let pathInfos = []

  onMount(() => {
    if (lineElement) {
      const paths = lineElement.querySelectorAll('.draw-me')
      paths.forEach((path) => {
        const pathInfo = {
          path,
          pathLength: path.getTotalLength(),
        }
        pathInfos.push(pathInfo)
        gsap.set(path, {
          strokeDasharray: pathInfo.pathLength,
          '--total-length': pathInfo.pathLength,
        })
      })
    }
  })
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
    opacity: 0;
    :global(.draw-me) {
      transition: stroke-dashoffset var(--duration) ease-out,
        opacity 0s var(--duration) ease-out;
      stroke-dashoffset: var(--total-length);
    }
    :global(g[mask]:nth-child(2) .draw-me) {
      --delay: 0.1s;
      transition-delay: var(--delay);
    }
    :global(g[mask]:nth-child(3) .draw-me) {
      --delay: 0.2s;
      transition-delay: var(--delay);
    }
    :global(g[mask]:nth-child(4) .draw-me) {
      --delay: 0.3s;
      transition-delay: var(--delay);
    }
  }
  :global(a:hover .line-drawing),
  :global(a.is-active .line-drawing),
  :global([id]:target .line-drawing) {
    opacity: 1;
  }
  :global(a:hover .draw-me),
  :global(a.is-active .draw-me) {
    stroke-dashoffset: 0 !important;
    transition: stroke-dashoffset 0.5s ease-out;
  }
  :global([id]:target .draw-me) {
    animation: draw var(--duration) calc(var(--delay) + var(--duration)) ease-out both;
  }

  @keyframes draw {
    0% {
      opacity: 0;
      stroke-dashoffset: var(--total-length);
    }
    1% {
      opacity: 1;
    }
    100% {
      opacity: 1;
      stroke-dashoffset: 0;
    }
  }
</style>
