<script>
    import { getContext } from 'svelte';
    import AboutContent from './AboutContent.svelte'

    const { open } = getContext('simple-modal');
</script>

<button on:click={() => { open(AboutContent) }} class="button-secondary small">About</button>

<style>
    button {
        margin: auto auto 20px;
    }
</style>