<script>
  import { Logo, HvA } from "$lib/svgs";
  import { beforeNavigate } from '$app/navigation';
  import { isClientNavigation } from '$lib/stores/navigation';

  beforeNavigate(() => {
    isClientNavigation.set(true);
  });
</script>

<header class="header">
  <nav>
    <a href="/" class="logo">
      <span class="sr-only">Exposjoo</span>
      <Logo />
    </a>
    <ul>
      <li>
        <a href="/schedule" class="small-body">
          Schedule
        </a>
      </li>
      <li>
        <a href="/location" class="small-body">
          Location
        </a>
      </li>
    </ul>
  </nav>
  <a href="https://hva.nl" class="hva">
    <HvA />
  </a>
</header>

<main>
  <slot />
</main>

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

      list-style-type: '';
      gap: var(--gap);
      padding: 0;
    }
    
    a {
      text-decoration: none;
      font-weight: 500;
      text-transform: lowercase;
    }
    .logo {
      width: max(6rem, calc(180/var(--design-size) * 100vw));
    }
    .hva {
      width: max(6rem, calc(180/var(--design-size) * 100vw));
    }
  }
</style>
