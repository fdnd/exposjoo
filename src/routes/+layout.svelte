<script>
  import { Logo, HvA, LocationPin, Calendar, MenuTrigger } from "$lib/svgs";
  import { beforeNavigate } from "$app/navigation";
  import { isClientNavigation } from "$lib/stores/navigation";
  import { base } from "$app/paths";
  import { page } from "$app/stores";
  import LineDrawings from "$lib/components/LineDrawings/LineDrawings.svelte";

  let lineDrawings = [];
  let locationLine;
  let isOpen = $state(false);
  let navItems = [
    {
      name: "Schedule",
      href: `${base}/schedule`,
      line: "Underline1",
      duration: "0.4s",
    },
    {
      name: "Location",
      href: `${base}/location`,
      line: "Underline2",
      duration: "0.8s",
    },
    {
      name: "Catering",
      href: `${base}/catering`,
      line: "Underline3",
      duration: "0.8s",
    },
  ];

  beforeNavigate(() => {
    isClientNavigation.set(true);
  });
</script>

<header class="header">
  <nav>
    <a href="{base}/" class="logo">
      <span class="sr-only">Exposjoo</span>
      <Logo />
    </a>
    <ul class:is-open={isOpen}>
      {#each navItems as item, i}
        <li>
          <a
            href={item.href}
            class="medium-body"
            class:is-active={item.href === $page.url.pathname}
            onclick={() => {
              isOpen = false;
            }}
          >
            {item.name}
            <LineDrawings
              line={item.line}
              duration={item.duration}
              bind:this={lineDrawings[i]}
            />
          </a>
        </li>
      {/each}
    </ul>
  </nav>
  <div class="right">
    <a href="https://hva.nl" class="hva">
      <HvA />
    </a>
    <button
      class="trigger"
      class:is-open={isOpen}
      onclick={() => {
        isOpen = !isOpen;
      }}
    >
      <MenuTrigger />
    </button>
  </div>
</header>

<main>
  <slot />
</main>

<footer>
  <p class="xsmall-body">
    <a href={`${base}/`} class="logo">
      <span class="sr-only">Exposjoo</span>
      <Logo />
    </a>
    <a class="icon-link" href="#aanmelden" target="_blank">
      <Calendar />
      2 juli 2025 - 17.00h - 21.00h
    </a>
    <a class="icon-link" href="https://maps.app.goo.gl/R6NSiGg9Qx6RXmuT6" target="_blank">
      <LocationPin />
      <span> Theo Thijssenhuis Amsterdam </span>
    </a>
  </p>
  <a href="#aanmelden" class="button" target="_blank"> Let us know you're coming </a>
</footer>

<style lang="scss">
  .header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;
    padding: var(--padding);
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    nav {
      display: flex;
      flex-wrap: wrap;
      gap: var(--gap);
      align-items: center;
    }
    ul {
      display: flex;
      flex-wrap: wrap;

      list-style-type: "";
      gap: var(--gap);
      padding: 0;
      @media (max-width: 750px) {
        position: absolute;
        top: 4rem;
        right: var(--padding);
        flex-direction: column;
        min-width: 10rem;
        align-items: center;
        padding: var(--padding);
        border: 2px solid #000;
        background: #fff;
        visibility: hidden;
        opacity: 0;
        transform: translateY(30%) rotate(-15deg);
        transition:
          transform 0.4s var(--bouncy-ease),
          opacity 0.4s var(--bouncy-ease),
          visibility 0s 0.4s;

        &.is-open {
          visibility: visible;
          opacity: 1;
          transform: translateY(0) rotate(0);
          transition:
            transform 0.4s var(--bouncy-ease),
            opacity 0.4s var(--bouncy-ease),
            visibility 0s;
        }
      }
    }

    li a {
      position: relative;
      text-decoration: none;
      font-weight: 500;
      text-transform: lowercase;
      :global(svg) {
        position: absolute;
        bottom: -45%;
        left: 0;
        width: 100%;
        pointer-events: none;
      }
    }
    .logo {
      width: max(6rem, calc(180 / var(--design-size) * 100vw));
    }
    .right {
      display: flex;
      align-items: center;
      gap: var(--padding);
    }
    .hva {
      width: max(6rem, calc(180 / var(--design-size) * 100vw));
      :global(svg) {
        fill: currentColor;
      }
    }
    .trigger {
      padding: 0;
      background: none;
      border: none;
      display: none;
      cursor: pointer;
      transform-box: fill-box;
      &.is-open {
        :global(path:nth-of-type(1)) {
          transform: rotate(-45deg);
        }
        :global(path:nth-of-type(2)) {
          opacity: 0;
        }
        :global(path:nth-of-type(3)) {
          transform: rotate(45deg);
        }
      }
      :global(svg) {
        width: 1.5em;
        height: 1.5em;
      }
      :global(path) {
        transform-origin: 76% 47%;
        fill: #000;
        transition:
          transform 0.4s var(--bouncy-ease),
          opacity 0.4s var(--bouncy-ease);
      }
      @media (max-width: 750px) {
        display: block;
      }
    }
  }
  footer {
    text-transform: lowercase;
    position: fixed;
    background-color: #fff;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 10;
    padding: var(--padding);
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    border-top: 2px solid #000;
    @media (max-width: 750px) {
      justify-content: center;
      background: none;
      border: none;
    }
    p {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 1.5em;
      & > span {
        font-weight: 600;
      }
      @media (max-width: 750px) {
        display: none;
      }
    }
    a,
    span {
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      gap: 0.5em;
      :global(svg) {
        height: 1.25em;
        transition: transform 0.4s ease-in-out;
      }
    }
    .icon-link:hover {
      :global(svg) {
        transform: rotate(-10deg);
      }
    }
    .button {
      padding: 0.5em 1em;
      color: var(--accent-color);
      border-color: currentColor;
      font-weight: 700;
      transition: all 0.2s ease-in-out;
      &:hover {
        background-color: #fff;
        color: #000;
      }
    }
  }
</style>
