<script>
  import { Close } from '$lib/svgs'
  import { createEventDispatcher } from 'svelte'

  let modal
  export let course

  const emit = createEventDispatcher()

  // Generate random border-radius values
  const generateRandomBorderRadius = () => {
    // Original values: 255px 15px 225px 15px / 15px 225px 15px 255px
    const originalValues = [255, 15, 225, 15, 15, 225, 15, 255]
    const values = originalValues.map(original => {
      // Add random variation of ±40px for larger values, ±10px for smaller values
      const variation = original > 100 ? Math.random() * 80 - 40 : Math.random() * 20 - 10
      return Math.max(5, Math.floor(original + variation)) // Ensure minimum of 5px
    })
    return `${values[0]}px ${values[1]}px ${values[2]}px ${values[3]}px / ${values[4]}px ${values[5]}px ${values[6]}px ${values[7]}px`
  }
</script>

<dialog class="modal p" data-course={course.class} bind:this={modal} style="--random-border-radius: {generateRandomBorderRadius()}">
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
    transform: translateY(calc(100% + var(--padding)));
    border-radius: var(--random-border-radius);
    @media (max-width: 750px) {
      width: calc(100% - var(--padding) * 2);
      max-width: 30rem;
    }

    &[open] {
      transform: translateY(0);
      @starting-style {
        transform: translateY(calc(100% + var(--padding)));
      }
    }
  }
</style>
