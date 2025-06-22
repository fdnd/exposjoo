<script>
  import { Logo, HvA, MenuTrigger, Close } from "$lib/svgs";
  import RegisterForm from "$lib/components/RegisterForm.svelte";
  import { beforeNavigate } from "$app/navigation";
  import { isClientNavigation } from "$lib/stores/navigation";
  import { base } from "$app/paths";
  import { page } from "$app/stores";
  import LineDrawings from "$lib/components/LineDrawings/LineDrawings.svelte";
  import { openRegisterForm, closeRegisterForm } from "$lib/index.js";
  

  let lineDrawings = $state([]);

  let isOpen = $state(false);
  let navItems = [
    {
      name: 'Schedule',
      href: `${base}/schedule`,
      line: 'Underline1',
      duration: '0.4s',
    },
    {
      name: 'Catering',
      href: `${base}/catering`,
      line: 'Underline2',
      duration: '0.4s',
    },
    {
      name: 'About',
      href: `${base}/about`,
      line: 'Underline3',
      duration: '0.4s',
    },
    {
      name: 'Contact',
      href: `${base}/contact`,
      line: 'Underline4',
      duration: '0.4s',
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
    <button class="button is-desktop" onclick={openRegisterForm}> Register </button>
    <a class="button is-mobile" href="https://assets-eur.mkt.dynamics.com/7c8e8ad8-52ca-ed11-aece-0022489e3349/digitalassets/standaloneforms/4fbea2b4-af4a-f011-877a-000d3ab670f1?readableEventId=Exposjoo_20253465078783" target="_blank"> Register </a>
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
<RegisterForm />


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
      @media (max-width: 900px) {
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
      width: auto;
      height: clamp(1.5rem, calc(36 / var(--design-size) * 100vw), 2.5rem);
      :global(svg) {
        fill: currentColor;
        width: auto;
        height: 100%;
      }
    }
    .button {
      padding: 0.5em 1em;
      color: var(--accent-color);
      border-color: currentColor;
      font-weight: 700;
      transition:
        background-color 0.2s ease-in-out,
        color 0.2s ease-in-out,
        box-shadow 0.2s ease-in-out;
      background-color: #fff;
      &:hover {
        background-color: #fff;
        color: #000;
      }
      @media (max-width: 900px) {
        position: fixed;
        bottom: var(--padding);
        z-index: 10;
        left: 50%;
        transform: translateX(-50%);
      }
    }
    .trigger {
      padding: 0;
      background: none;
      border: none;
      display: none;
      cursor: pointer;
      transform-box: fill-box;
      &:global(.is-open) {
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
      @media (max-width: 900px) {
        display: block;
      }
    }
  }
</style>
