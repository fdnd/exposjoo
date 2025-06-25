<script>
  import { Close } from '$lib/svgs'
  import { createEventDispatcher } from 'svelte'
  import { generateRandomBorderRadius } from '$lib'
  
  let modal
  export let course

  const emit = createEventDispatcher()

</script>

<dialog closedby="any" class="modal p" data-course={course.class} bind:this={modal} style="--random-border-radius: {generateRandomBorderRadius()}">
  <button
    class="close-button"
    on:click={() => {
      modal.close()
      emit('closingModal')
    }}
  >
    <Close />
    <span class="sr-only">Close modal</span>
  </button>
  <h2 class="medium-heading">{@html course.modal.title}</h2>
  <p class="small-body">{@html course.modal.intro}</p>
  <div class="program-short small-body">
    {@html course.modal.program_short}
  </div>
</dialog>

<style lang="scss">
  .modal {
    margin: auto var(--padding) var(--padding) auto;
    max-width: max(30rem, calc(480 / var(--design-size) * 100vw));
    transform: translateY(calc(70svh + var(--padding)));
    border-radius: var(--random-border-radius);
    @media (max-width: 750px) {
      width: calc(100% - var(--padding) * 2);
      max-width: 30rem;
    }

    &[open] {
      transform: translateY(0);
      @starting-style {
        transform: translateY(calc(70svh + var(--padding)));
      }
    }
  }
</style>
