<script>
  import { Building, Close } from "$lib/svgs";
  import { onMount } from "svelte";
  import gsap from "gsap";
  import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
  import Modal from "./Modal.svelte";

  let buildingElement;
  let buttons = [];
  let anchorScope = "";
  let resizeTimeout = null;

  export let courses;

  onMount(() => {
    gsap.registerPlugin(DrawSVGPlugin);
    buttons.forEach((button) => {
      positionButtons(button);
    });
    // only resize if the window is done resizing for 100ms otherwise cancel the timeout and wait for the next resize
    window.addEventListener("resize", () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        positionButtons();
      }, 100); // 100ms
    });
    buttons.forEach((button) => {
      const xTo = gsap.quickTo(button, "x", {
        duration: 0.25,
        ease: "power2.out",
      });
      const yTo = gsap.quickTo(button, "y", {
        duration: 0.25,
        ease: "power2.out",
      });
      const course = button.dataset.course;
      const windowElement = buildingElement.querySelector(
        `svg #${course}-hover`,
      );
      if (!windowElement) return;
      windowElement.addEventListener("mouseenter", (e) => {
        const x = e.clientX - button.offsetWidth / 2;
        const y = e.clientY + button.offsetHeight / 2;
        gsap.set(button, {
          position: "fixed",
          left: 0,
          top: 0,
          x,
          y,
        });
      });

      windowElement.addEventListener("mousemove", (e) => {
        const rect = windowElement.getBoundingClientRect();
        const x = e.clientX + button.offsetWidth / 2;
        const y = e.clientY + button.offsetHeight / 2;
        xTo(x);
        yTo(y);
      });

      windowElement.addEventListener("click", (e) => {
        openModal(course);
      });
    });
  });

  const positionButtons = () => {
    buttons.forEach((button) => {
      if (!button) return;
      const course = button.dataset.course;
      const svgGroup = buildingElement.querySelector(`svg .${course}`);
      if (!svgGroup) return;
      const rect = svgGroup.getBoundingClientRect();
      // get top and bottom and calc center
      const top = rect.top;
      const bottom = rect.bottom;
      const center = (top + bottom) / 2;

      // get left and right and calc center
      const left = rect.left;
      const width = rect.width;
      const centerX = left + width / 2;

      gsap.to(button, {
        position: "absolute",
        top: `${center}px`,
        left: `${centerX}px`,
        transform: "translate(-50%, -50%)",
        duration: 0.15,
      });
    });
  };

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
        ease: "power2.out",
      },
    );
    gsap.from(".building path", {
      drawSVG: 0,
      stagger: {
        amount: -0.25,
      },
    });
  };

  const openModal = (course) => {
    const modal = buildingElement.querySelector(`.modal[data-course="${course}"]`);
    if (!modal) return;
    modal.showModal();
    positionButtons();
  };
</script>

<section
  class="building"
  bind:this={buildingElement}
  style="anchor-scope: {anchorScope};"
>
  <Building />
  {#each courses as course, i}
    <button
      class={`button medium-body ${course.class}`}
      data-course={course.class}
      bind:this={buttons[i]}
      on:click={() => openModal(course.class)}
    >
      {course.name}
    </button>
    <Modal {course} />
  {/each}
</section>

<style lang="scss">
  $courses: mdd, fdnd, cmd, applied-research, job-market, talks;
  @each $course in $courses {
    :global(g.#{$course}) {
      opacity: 0;
      transition: opacity 0.2s ease-in-out;
    }
    :global(.building:has(.button.#{$course}:focus-visible)),
    :global(.building:has(.button.#{$course}:hover)),
    :global(.building:has(.modal[open][data-course="#{$course}"])) {
      :global(g.#{$course}) {
        opacity: 1;
      }
      .button.#{$course} {
        opacity: 1;
      }
    }
    :global(g.#{$course} .hover-rect) {
      pointer-events: all;
    }
    :global(g.#{$course}:hover) {
      opacity: 1;
    }

    :global(.building:has(g.#{$course}:hover)) {
      .button.#{$course} {
        opacity: 1;
      }
    }
    :global(.hover-rect) {
      cursor: pointer;
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
  }

  .button {
    position: absolute;

    width: max-content;
    height: max-content;

    transform-origin: center;
    opacity: 0;
    transition: opacity 0.2s ease-in-out;
    pointer-events: none;
    &:focus-visible {
      opacity: 1;
    }
  }

  
</style>
