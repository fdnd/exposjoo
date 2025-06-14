<script>
  import { Building } from '$lib/svgs'
  import { onMount } from 'svelte'
  import gsap from 'gsap'
  import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin'
  import { data } from '$lib/data'

  let buildingElement
  let buttons = []
  let anchorScope = ''
  let resizeTimeout = null

  onMount(() => {
    gsap.registerPlugin(DrawSVGPlugin)

    positionButtons()
    // only resize if the window is done resizing for 100ms otherwise cancel the timeout and wait for the next resize
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimeout)
      resizeTimeout = setTimeout(() => {
        positionButtons()
      }, 100) // 100ms
    })
  })

  const positionButtons = () => {
    buttons.forEach((button) => {
      if (!button) return
      const course = button.dataset.course
      const svgGroup = buildingElement.querySelector(`svg .${course}`)
      if (!svgGroup) return
      const rect = svgGroup.getBoundingClientRect()
      // get top and bottom and calc center
      const top = rect.top
      const bottom = rect.bottom
      const center = (top + bottom) / 2
      button.style.top = `${center}px`

      // get left and right and calc center
      const left = rect.left
      const width = rect.width
      const centerX = left + width / 2
      button.style.left = `${centerX}px`

      button.style.transform = 'translate(-50%, -50%)'
    })
  }


  export const startBuildingAnimation = () => {
    // Add your building animation here
    gsap.fromTo(
      buildingElement,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1,
        ease: 'power2.out',
      },
    )
    gsap.from('.building path', {
      drawSVG: 0,
      stagger: {
        amount: -0.25,
      },
    })
  }
</script>

<div
  class="building"
  bind:this={buildingElement}
  style="anchor-scope: {anchorScope};"
>
  <Building />
  {#each data.courses as course, i}
    <button
      class={`button small-body ${course.class}`}
      data-course={course.class}
      bind:this={buttons[i]}
    >
      {course.name}
    </button>
  {/each}
</div>

<style lang="scss">
  $courses: mdd, fdnd, cmd, applied-research, job-market, talks;
  @each $course in $courses {
    :global(g.#{$course}) {
      opacity: 0;
      transition: opacity 0.2s ease-in-out;
    }
    :global(.building:has(.button.#{$course}:focus-within)),
    :global(.building:has(.button.#{$course}:hover)) {
      :global(g.#{$course}) {
        opacity: 1;
      }
    }
    :global(g.#{$course}) {
      pointer-events: auto;
    }
    :global(g.#{$course}:hover) {
      opacity: 1;
    }

    :global(.building:has(g.#{$course}:hover)) {
      .button.#{$course} {
        opacity: 1;
      }
    }
  }

  :global(.building svg) {
    pointer-events: none;
    overflow: visible;
    max-height: 90vh;
    max-width: 130%;
    width: 100%;
  }

  .building {
    opacity: 0;
    width: 100%;
    height: 100svh;
    overflow: hidden;
    opacity: 0;
    display: flex;
    justify-content: center;
    align-items: end;
    transform-origin: center;
    &:focus-within .button {
      opacity: 1;
    }
  }

  .button {
    position: absolute;

    width: max-content;
    height: max-content;

    transform-origin: center;
    opacity: 0;
    transition: opacity 0.2s ease-in-out;
    &:hover {
      opacity: 1;
    }
  }
</style>
