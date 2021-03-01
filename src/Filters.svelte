<script>
    export let items;
    export let inactiveItemNames;
    export let updateInactiveItemNames;

    const sets = [...new Set(items.map(item => item.set))];
</script>

{#each sets as set}
    <h3>{set}</h3>
    <ul>
        {#each items as item}
            {#if item.set === set}
                <li class="item">
                    <label><input type="checkbox" checked={inactiveItemNames.indexOf(item.name) === -1} on:change={() => updateInactiveItemNames(item.name)}> {item.name}</label>
                </li>
            {/if}
        {/each}
    </ul>
{/each}

<style>
    ul {
        margin: 0;
        padding: 1rem;
        list-style: none;
    }

    .item {
        margin-left: 20px;
    }
</style>