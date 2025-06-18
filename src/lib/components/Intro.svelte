<script>
  import { ErrorLine } from '$lib/svgs'
  import { onMount, createEventDispatcher } from 'svelte'
  import gsap from 'gsap'
  import { CustomEase } from 'gsap/CustomEase'
  import { isClientNavigation } from '$lib/stores/navigation'

  const emit = createEventDispatcher()
  
  let intro
  let titleCount = 6
  let orientation = 'landscape' // Default value
  let isVisible = true
  let sizes = {
    smallerPercentage: 40,
    largerPercentage: 60,
    visiblePart: 100 / titleCount,
    smallVisiblePart: 0,
    smallerClip: 0,
    largerClip: 0,
    largerVisiblePart: 0,
    largerStartIndex: 3,
    largerEndIndex: 4,
    largerItems: [':nth-child(3)', ':nth-child(4)'],
  }
  
  onMount(() => {
    const mm = gsap.matchMedia()
    // Only skip intro on client navigation
    if ($isClientNavigation) {
      emit('introComplete')
      isVisible = false
      return
    }
    mm.add('(prefers-reduced-motion: reduce)', () => {
      emit('introComplete')
      isVisible = false
      return
    })

    gsap.registerPlugin(CustomEase)
    let gentleEase = CustomEase.create(
      'custom',
      'M0,0 C0.397,0 0.44,1.219 1,1',
    )

    orientation = getRatio()

    recalcSizes()
    window.addEventListener('resize', () => {
      recalcSizes()
    })
    const tl = gsap.timeline()
    tl.to('h1', {
      y: 0,
      duration: 1,
      stagger: -0.05,
      ease: gentleEase,
    })
    tl.to(
      'h1 .intro__title',
      {
        y: orientation === 'landscape' ? '65%' : '20%',
        duration: 1,
        stagger: -0.05,
        ease: 'power2.inOut',
      },
      '<',
    )
    tl.to(`h1:not(${sizes.largerItems[0]}, ${sizes.largerItems[1]})`, {
      clipPath: `inset(${sizes.smallerClip / 2}svh 0)`,
      y: (i) => `${getTranslate(i)}svh`,
      duration: 1,
      stagger: -0.05,
      ease: 'power2.inOut',
    })
    tl.to(
      `h1:not(${sizes.largerItems[0]}, ${sizes.largerItems[1]}) .intro__title`,
      {
        y: orientation === 'landscape' ? '70%' : '50%',
        duration: 1,
        ease: 'power2.inOut',
      },
      '<',
    )
    tl.to(
      `h1${sizes.largerItems[0]}, h1${sizes.largerItems[1]}`,
      {
        clipPath: `inset(${sizes.largerClip / 2}svh 0)`,
        y: (i) => {
          let translate = 0
          if (i == 0) {
            translate = -sizes.largerClip / 2 - sizes.smallerClip * 2
          }
          if (i == 1) {
            translate = -sizes.largerClip / 2
          }
          return `${translate}svh`
        },
        duration: 1,
        ease: 'power2.inOut',
      },
      '<',
    )
    tl.to(
      `h1${sizes.largerItems[0]} .intro__title`,
      {
        y: '40%',
        duration: 1,
        ease: 'power2.inOut',
      },
      '<',
    )
    tl.to(
      `h1${sizes.largerItems[1]} .intro__title`,
      {
        y: orientation === 'landscape' ? '-110%' : '-80%',
        duration: 1,
        ease: 'power2.inOut',
      },
      '<',
    )
    tl.to(
      'h1',
      {
        y: 0,
        clipPath: 'inset(0svh 0)',
        duration: 1,
        ease: 'power2.inOut',
      },
      '+=0.5',
    )
    tl.to(
      'h1 .intro__title',
      {
        y: orientation === 'landscape' ? '65%' : '20%',
        duration: 1,
        ease: 'power2.inOut',
      },
      '<',
    )
    tl.to('h1:nth-child(odd) .intro__title', {
      x: '115%',
      duration: 1,
      ease: 'power2.inOut',
    })
    tl.to(
      'h1:nth-child(even) .intro__title',
      {
        x: '-115%',
        duration: 1,
        ease: 'power2.inOut',
        onComplete: () => {
          emit('introComplete')
          isVisible = false
        },
      },
      '<',
    )
  })

  const getRatio = () => {
    return window.innerWidth / window.innerHeight > 1
      ? 'landscape'
      : 'portrait'
  }

  const getTranslate = (i) => {
    let translate = 0
    if (i == 0) {
      translate = -sizes.smallerClip / 2
    } else if (i == titleCount - 3) {
      translate = sizes.smallerClip / 2
    } else if (i == 1) {
      translate = -sizes.smallerClip * 1.5
    } else {
      const distanceFromLarger = Math.min(
        Math.abs(i - (sizes.largerStartIndex - 1)),
        Math.abs(i - sizes.largerEndIndex),
      )
      const multiplier = 1.5 + distanceFromLarger * 0.5
      translate = sizes.smallerClip * multiplier
    }
    return translate
  }
  const recalcSizes = () => {
    orientation = getRatio()
    sizes.smallerPercentage = orientation === 'landscape' ? 50 : 60
    sizes.largerPercentage = orientation === 'landscape' ? 50 : 40
    sizes.visiblePart = 100 / titleCount
    sizes.smallVisiblePart = sizes.smallerPercentage / (titleCount - 2)
    sizes.largerVisiblePart = sizes.largerPercentage / 2

    sizes.smallerClip = sizes.visiblePart - sizes.smallVisiblePart
    sizes.largerClip = sizes.visiblePart - sizes.largerVisiblePart
  }
</script>

{#if isVisible}
  <div
    class="intro"
    style="--title-count: {titleCount}"
    bind:this={intro}
  >
    {#each Array(titleCount) as _, i (i)}
      <h1 class="xlarge-heading" style="--index: {titleCount - 1 - i};">
        <span class="intro__title">
          <span class="inner">
            <span>exposjoo</span>
            <ErrorLine />
          </span>
        </span>
      </h1>
    {/each}
  </div>
{/if}

<style lang="scss">
  .intro {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 11;

    width: 100%;
    height: 100%;
    background: #fff;
    min-height: 100svh;
    display: flex;
    flex-wrap: wrap;
    align-content: end;
    justify-content: center;
    overflow: hidden;
    background-color: var(--background);
    h1 {
      --height: calc(100svh / var(--title-count));
      height: var(--height);
      clip-path: inset(0 0);
      transform: translateY(calc(var(--height) * var(--index))) translateZ(1px);
      line-height: var(--height);
      margin-left: -0.1em;
      will-change: clip-path, transform;

      .intro__title {
        display: block;
        height: min-content;
        transform: translateY(200%) translateZ(1px);
        .inner {
          position: relative;
        }
      }
      :global(svg) {
        position: absolute;
        bottom: 0.05em;
        left: 0;
        width: 105%;
        overflow: visible;
      }
    }
  }
</style>
