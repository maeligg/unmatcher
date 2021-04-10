<script>
    import boards from './data/boards';
    import Picker from './Picker.svelte';

    export let currentStep;
    export let goToNextStep;
    export let updateSelectedBoard;
    export let selectedBoard;
</script>

<h1>Select your board</h1>

<div class="preview">
    {#if selectedBoard}
        <img src="{selectedBoard.image}" alt="{selectedBoard.name}" >
        <h2>{selectedBoard.name}</h2>
        <h3>{selectedBoard.set}</h3>
    {:else}
        <div class="board-preview-placeholder">?</div>
    {/if}
</div>

<Picker items={boards} currentStep={currentStep} goToNextStep={goToNextStep} updateSelectedItem={updateSelectedBoard} />

<style>
    .preview {
        min-height: 275px;
        text-align: center;
    }

    .preview img {
        height: 150px;
    }

    .board-preview-placeholder {
        height: 150px;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 100px;
	}
</style>