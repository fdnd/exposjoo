<script>
  import { Building } from "$lib/svgs";
  import { onMount } from "svelte";
  import gsap from "gsap";
  import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
  import Modal from "./Modal.svelte";

  let buildingElement;
  let buttons = [];
  let anchorScope = "";
  let resizeTimeout = null;
  let mm;
  export let courses;

  onMount(() => {
    gsap.registerPlugin(DrawSVGPlugin);
    mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: reduce)", () => {
      gsap.set(buildingElement, {
        opacity: 1,
      });
    });

    // only resize if the window is done resizing for 100ms otherwise cancel the timeout and wait for the next resize
    window.addEventListener("resize", () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        positionButtons();
      }, 100); // 100ms
    });
    buttons.forEach((button) => {
      const course = button.dataset.course;
      const windowElement = buildingElement.querySelector(
        `svg #${course}-hover`,
      );
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const xTo = gsap.quickTo(button, "x", {
          duration: 0.25,
          ease: "power2.out",
        });
        const yTo = gsap.quickTo(button, "y", {
          duration: 0.25,
          ease: "power2.out",
        });
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
          const x = e.clientX + button.offsetWidth / 2;
          const y = e.clientY + button.offsetHeight / 2;
          xTo(x);
          yTo(y);
        });
      });

      windowElement.addEventListener("click", () => {
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
    positionButtons();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
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
      gsap.from(".building-svg path", {
        drawSVG: 0,
        stagger: {
          amount: -0.25,
        },
        onComplete: () => {
          playButtons();
        },
      });
    });

    mm.add("(prefers-reduced-motion: reduce)", () => {
      playButtons();
    });
  };

  const playButtons = () => {
    // stop on interaction with elements of windows:
    buttons.forEach((button, i) => {
      const course = button.dataset.course;
      const windowElement = buildingElement.querySelector(`g.${course}`,);
      const tl = gsap.timeline()

      tl.set([button, windowElement], {
        transition: 'none',
      })
      tl.to(button, {
          background: window.innerWidth > 1024 ? null : button.dataset.color,
          color: window.innerWidth > 1024 ? null : button.dataset.textColor,
          duration: 0.25,
          ease: "power1.inOut",
        }, 0.5 * i)
        .to(windowElement, {
          opacity: 1,
          duration: 0.25,
          ease: "power1.inOut",
        }, '<')
        .to(button, {
          background: window.innerWidth > 1024 ? null : "#fff",
          color: window.innerWidth > 1024 ? null : "#000",
          duration: 0.25,
          ease: "power1.inOut",
        }, '+=0.25')
        .to(windowElement, {
          opacity: 0,
          duration: 0.25,
          ease: "power1.inOut",
          onComplete: () => {
            tl.revert();
          }
        }, '<');
    });
  };

  const openModal = (course) => {
    const modal = document.querySelector(
      `.modal[data-course="${course}"]`,
    );
    if (!modal) return;
    if (modal.showModal) {
      modal.showModal();
    } else {
      modal.setAttribute("open", "");
    }
    positionButtons();
  };
</script>

<section
  class="building"
  bind:this={buildingElement}
  style="anchor-scope: {anchorScope};"
>
  <Building />
</section>
<div class="buttons">
  {#each courses as course, i}
    <button
      class={`button course-button medium-body ${course.class}`}
      style="--size: {course.size}; --color: {course.color}; --text-color: {course.textColor}"
      data-color={course.color}
      data-text-color={course.textColor}
      data-course={course.class}
      bind:this={buttons[i]}
      on:click={() => openModal(course.class)}
    >
      {course.name}
    </button>
    <Modal {course} />
  {/each}
</div>

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

    :global(body:has(g.#{$course}:hover)) {
      .course-button.#{$course} {
        opacity: 1;
      }
    }
    :global(.hover-rect) {
      cursor: pointer;
    }
    :global(body:has(.course-button[data-course="#{$course}"]:focus)) {
      :global(g.#{$course}) {
        opacity: 1;
      }
    }
  }


  :global(.building-svg) {
    pointer-events: none;
    overflow: visible;
    max-height: 120svh;
    max-width: 120%;
    width: 100%;
    @media (max-width: 750px) {
      min-width: 140%;
      max-width: unset;
    }
  }

  .building {
    opacity: 0;
    width: 100%;
    height: 100vh;
    height: 100svh;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: end;
    transform-origin: center;
    pointer-events: none;
    @media (max-width: 750px) {
      border-bottom: 70px solid #dbdbdb;
    }
    @media (max-width: 1024px) {
      position: absolute;
      bottom: 0;
      left: 0;
    }
    :global(svg) {
      margin-top: auto;
    }
  }
  .buttons {
    position: absolute;
    top: 0;
    left: 0;
    @media (max-width: 1024px) {
      position: static;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: var(--padding);
      padding: var(--gap) var(--padding) 0;
      max-width: max(30rem, 480 / var(--design-size) * 100vw);
      margin: 0 auto;
    }
  }
  .button {
    position: absolute;
    opacity: 0;
    pointer-events: none;
    width: max-content;
    height: max-content;

    transform-origin: center;
    transition: opacity 0.2s ease-in-out;
    @media (max-width: 1024px) {
      position: static !important;
      transform: none !important;
      opacity: 1;
      grid-column: var(--size);
      width: 100%;
      background-color: #fff;
      color: #000;
      pointer-events: all;
      box-shadow: 0 0 0 0 #000;

      &:hover {
        background-color: var(--color);
        color: var(--text-color);
        box-shadow: 2px 2px 0 0 #000;
      }
    }
    &:focus-visible {
      opacity: 1;
    }
  }
</style>
