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
        {#if data[p1Character.name][p2Character.name] > 60}
            ◀◀
        {:else if data[p1Character.name][p2Character.name] > 55}
            ◀
        {/if}

        {#if data[p1Character.name][p2Character.name] > 55 || data[p1Character.name][p2Character.name] < 45}
            advantage
        {/if}

        {#if data[p1Character.name][p2Character.name] < 45}
            ▶
        {:else if data[p1Character.name][p2Character.name] < 40}
            ▶▶
        {/if}
    {/await}
{/if}
</div>

<style>
    .advantage {
        margin-bottom: 1rem;
        min-height: 3rem;
        text-align: center;
        text-transform: uppercase;
        font-size: 1.6rem;
        color: var(--c-yellow);
    }

    @media (min-width: 600px) {
        .advantage {
            font-size: 2rem;
        }
    }
</style>