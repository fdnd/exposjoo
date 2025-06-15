<script>
  import { Close } from "$lib/svgs";
  import { data } from "../../routes/data";
  import { createEventDispatcher } from "svelte";

  let modal;
  export let course;

  const emit = createEventDispatcher();
</script>

<dialog class="modal p" data-course={course.class} bind:this={modal}>
  <button
    class="close-button"
    on:click={() => {
      modal.close();
      emit("closingModal");
    }}
  >
    <Close />
  </button>
  <h2 class="medium-heading">{@html course.modal.title}</h2>
  <p class="small-body">{@html course.modal.intro}</p>
  <div class="program-short small-body">
    {@html course.modal.program_short}
  </div>
</dialog>

<style lang="scss">
  .modal {
    display: none;
    position: fixed;
    z-index: 11;
    align-content: center;
    margin: auto var(--padding) var(--padding) auto;

    max-width: max(30rem, calc(480 / var(--design-size) * 100vw));
    padding: calc(var(--padding) * 2) var(--padding);
    background-color: #fff;
    transition-behavior: allow-discrete;
    transition:
      transform 0.5s var(--bouncy-ease),
      display 1s allow-discrete,
      overlay 1s allow-discrete;

    transform: translateY(calc(100% + var(--padding)));
    &::backdrop {
      opacity: 0;
      transition: opacity 0.5s var(--bouncy-ease);
      background-color: rgba(0, 0, 0, 0.5);
    }
    &[open] {
      display: block;
      transform: translateY(0);
      &::backdrop {
        opacity: 1;
      }
      @starting-style {
        transform: translateY(calc(100% + var(--padding)));
      }
    }

    :global(svg) {
      width: 1.25rem;
      height: 1.25rem;
    }
    .close-button {
      position: absolute;
      top: 0;
      right: 0;
      background: none;
      border: none;
      padding: var(--padding);
      margin: 0;
      cursor: pointer;
    }
  }
</style>
