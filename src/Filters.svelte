<script>
  import { inactiveItemsStore } from './stores/inactiveItems'

  export let items
  export let updateInactiveItemNames

  const sets = [...new Set(items.map((item) => item.set))]
</script>

{#each sets as set}
  <label class="set"
    ><input
      type="checkbox"
      checked={items
        .filter((item) => item.set === set)
        .every((item) => $inactiveItemsStore.indexOf(item.name) === -1)}
      on:change={() => {
        items
          .filter((item) => item.set === set)
          .forEach((item) => updateInactiveItemNames(item.name))
      }}
    />{set}</label
  >
  <ul>
    {#each items as item}
      {#if item.set === set}
        <li class="item">
          <label
            ><input
              type="checkbox"
              checked={$inactiveItemsStore.indexOf(item.name) === -1}
              on:change={() => updateInactiveItemNames(item.name)}
            />
            {item.name}</label
          >
        </li>
      {/if}
    {/each}
  </ul>
{/each}

<style>
  .set {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1.5rem;
  }

  ul {
    margin: 0.5rem 0 1rem 0;
    padding: 0rem;
    list-style: none;
  }

  .item {
    margin-left: 20px;
  }
</style>
