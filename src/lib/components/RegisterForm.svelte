<script>
  import Close from "../svgs/Close.svelte";
  import { closeRegisterForm } from "$lib/index.js";
</script>

<dialog class="register-form">
  <button class="close-button" onclick={closeRegisterForm}>
    <Close />
    <span class="sr-only">Close popup</span>
  </button>
  <iframe
    src="https://assets-eur.mkt.dynamics.com/7c8e8ad8-52ca-ed11-aece-0022489e3349/digitalassets/standaloneforms/4fbea2b4-af4a-f011-877a-000d3ab670f1?readableEventId=Exposjoo_20253465078783"
    frameborder="0"
    title="Register for the Exposjoo"
  ></iframe>
</dialog>

<style lang="scss">
  .register-form {
    width: clamp(300px, 100%, 600px);
    height: clamp(300px, 100%, 1000px);
    max-width: calc(100vw - var(--padding) * 2);
    padding: 1rem;
    overflow: hidden;
    @media (max-width: 750px) {
      padding: 0;
    }
    iframe {
      width: 100%;
      height: 100%;
    }
  }
</style>
