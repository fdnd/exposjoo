<script>
  import { Logo, HvA, LocationPin } from "$lib/svgs";
  import { beforeNavigate } from "$app/navigation";
  import { isClientNavigation } from "$lib/stores/navigation";
  import { base } from "$app/paths";
  import { page } from "$app/stores";
  import LineDrawings from "$lib/components/LineDrawings/LineDrawings.svelte";

  let lineDrawings = [];
  let locationLine;
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
    <ul>
      {#each navItems as item, i}
        <li>
          <a href={item.href} class="medium-body" class:is-active={item.href === $page.url.pathname}>
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
  <a href="https://hva.nl" class="hva">
    <HvA />
  </a>
</header>

<main>
  <slot />
</main>

<footer>
  <p class="xsmall-body">
    <span> Exposjoo </span>
    <span> 2 juli 2025 - 17.00h - 21.00h </span>
    <a href="https://maps.app.goo.gl/R6NSiGg9Qx6RXmuT6" target="_blank">
      <LocationPin />
      <span> Theo Thijssenhuis Amsterdam </span>
    </a>
  </p>
  <a href="#aanmelden" class="button" target="_blank"> I want to attend </a>
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
    .hva {
      width: max(6rem, calc(180 / var(--design-size) * 100vw));
    }
  }
  footer {
    position: fixed;
    background-color: #fff;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 10;
    padding: var(--padding);
    display: flex;
    justify-content: space-between;
    border-top: 2px solid #000;
    p {
      display: flex;
      align-items: center;
      gap: 1.5em;
      & > span {
        font-weight: 600;
      }
    }
    a {
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      gap: 0.5em;
      :global(svg) {
        width: 1em;
        transition: transform 0.4s ease-in-out;
      }
      &:hover {
        :global(svg) {
          transform: rotate(-10deg);
        }
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
