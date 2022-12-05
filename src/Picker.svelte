<script>
  import Filters from './Filters.svelte'
  import { onDestroy, getContext } from 'svelte'
  import { inactiveItemsStore } from './stores/inactiveItems'

  const { open } = getContext('simple-modal')

  export let items
  export let currentStep
  export let goToNextStep
  export let updateSelectedItem
  export let excludeFromRandomPool

  let randomInterval

  const updateInactiveItemNames = (name) => {
    if ($inactiveItemsStore.includes(name)) {
      $inactiveItemsStore = $inactiveItemsStore.filter(
        (inactiveItemName) => inactiveItemName !== name
      )
    } else {
      $inactiveItemsStore = [...$inactiveItemsStore, name]
    }
  }

  const getRandomItem = () => {
    let pool = items

    if ($inactiveItemsStore.length) {
      pool = pool.filter((item) => !$inactiveItemsStore.includes(item.name))
    }

    if (excludeFromRandomPool) {
      pool = pool.filter((item) => item !== excludeFromRandomPool)
    }

    return pool[Math.floor(Math.random() * pool.length)]
  }

  onDestroy(() => clearInterval(randomInterval))
</script>

<div class="picker-wrapper">
  <ul class="picker">
    <li class="item random">
      <button
        class={currentStep === 'player1Choses'
          ? 'p1'
          : currentStep === 'player2Choses'
          ? 'p2'
          : 'board'}
        on:mouseenter={() => {
          randomInterval = setInterval(() => {
            const item = getRandomItem()
            updateSelectedItem(item, currentStep === 'player2Choses')
          }, 100)
        }}
        on:mouseleave={() => {
          clearInterval(randomInterval)
        }}
        on:click={() => {
          const item = getRandomItem()
          updateSelectedItem(item, currentStep === 'player2Choses')
          clearInterval(randomInterval)
          goToNextStep()
        }}>?</button
      >
    </li>
    {#each items as item}
      {#if $inactiveItemsStore.indexOf(item.name) === -1}
        <li class="item">
          <button
            class={currentStep === 'player1Choses'
              ? 'p1'
              : currentStep === 'player2Choses'
              ? 'p2'
              : 'board'}
            on:click={() => {
              updateSelectedItem(item, currentStep === 'player2Choses')
              goToNextStep()
            }}
            on:mouseover={() => {
              updateSelectedItem(item, currentStep === 'player2Choses')
            }}
          >
            <img src={item.imageSmall || item.image} alt={item.name} />
          </button>
        </li>
      {/if}
    {/each}
  </ul>
  <div>
    {#if currentStep !== 'player1Choses'}
      <button class="button-secondary small" on:click={() => goToNextStep(true)}
        >← Back</button
      >
    {/if}
    <button
      on:click={() => {
        open(Filters, {
          items: items,
          updateInactiveItemNames: updateInactiveItemNames,
        })
      }}
      class="button-primary small">Filter</button
    >
  </div>
</div>

<style>
  .picker-wrapper {
    margin: auto 0 20px;
    text-align: center;
  }

  .picker {
    max-width: 800px;
    margin: 0 auto 20px;
    padding: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  .picker > * {
    margin: 8px;
  }

  .item {
    list-style: none;
  }

  .item button {
    margin: 0;
    padding: 0;
    font-size: 0;
    border: none;
    cursor: pointer;
    border-radius: 3px;
  }

  .item.random button {
    height: 111px;
    width: 80px;
    font-size: 60px;
    background-color: var(--c-grey-700);
    color: var(--c-white);
  }

  .item button.p1:hover {
    outline: 6px solid var(--c-red);
  }

  .item button.p2:hover {
    outline: 6px solid var(--c-blue);
  }

  .item button.board {
    height: 80px;
  }

  .item button.board:hover {
    outline: 6px solid var(--c-white);
  }

  .item img {
    width: 80px;
    border-radius: 3px;
  }
</style>
