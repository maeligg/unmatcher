<script>
    export let p1Character;
    export let p2Character;
    export let winLoss;
</script>

<div class="advantage">
{#if p1Character && p2Character}
    {#await winLoss}
        Awaiting win/loss data...
    {:then data}
        {#if !data[p1Character.name][p2Character.name]}
            ?
        {:else if data[p1Character.name][p2Character.name] >= 60}
            ◀◀
        {:else if data[p1Character.name][p2Character.name] >= 55}
            ◀
        {:else if data[p1Character.name][p2Character.name] <= 45}
            ▶
        {:else if data[p1Character.name][p2Character.name] <= 40}
            ▶▶
        {:else}
            =
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
        font-size: 3rem;
        min-height: 3rem;
        color: var(--c-yellow);
    }

    @media (min-width: 600px) {
        .advantage {
            font-size: 4rem;
            min-height: 4rem;
        }
    }
</style>
