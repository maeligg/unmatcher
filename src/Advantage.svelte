<script>
  export let p1Character
  export let p2Character
  export let matchupData
</script>

<div class="advantage">
  {#if p1Character && p2Character}
    {#await matchupData}
      Awaiting win/loss data...
    {:then data}
      {#if !data[p1Character.name] || !data[p1Character.name][p2Character.name]}
        no data
      {:else}
        {#if data[p1Character.name][p2Character.name] >= 60}
          ◀◀
        {:else if data[p1Character.name][p2Character.name] >= 55}
          ◀
        {:else if data[p1Character.name][p2Character.name] > 45}
          no
        {/if}
        advantage
        {#if data[p1Character.name][p2Character.name] <= 40}
          ▶▶
        {:else if data[p1Character.name][p2Character.name] <= 45}
          ▶
        {/if}
      {/if}
    {/await}
  {/if}
</div>

<style>
  .advantage {
    margin-top: 1rem;
    text-align: center;
    text-transform: uppercase;
    line-height: 1;
    font-size: 1rem;
    min-height: 1rem;
    color: var(--c-yellow);
  }

  @media (min-width: 600px) {
    .advantage {
      font-size: 2rem;
      min-height: 2rem;
    }
  }
</style>
