<script>
  import boards from './data/boards'
  import Picker from './Picker.svelte'

  export let currentStep
  export let goToNextStep
  export let updateSelectedBoard
  export let updatePreviewBoard
  export let selectedBoard
  export let boardPreview
</script>

<h1>Select your board</h1>

<div class="preview">
  {#if selectedBoard}
    <img src={selectedBoard.image} alt={selectedBoard.name} />
    <h2>{selectedBoard.name}</h2>
    <h3>{selectedBoard.set}</h3>
  {:else if boardPreview}
    <img src={boardPreview.image} alt={boardPreview.name} />
    <h2>{boardPreview.name}</h2>
    <h3>{boardPreview.set}</h3>
  {:else}
    <div class="board-preview-placeholder">?</div>
  {/if}
</div>

<div class="confirm-selection-wrapper">
  {#if selectedBoard}
    <button class="button-primary" on:click={() => goToNextStep()}
      >Confirm selection</button
    >
  {/if}
</div>

<Picker
  items={boards}
  {currentStep}
  {goToNextStep}
  updateSelectedItem={updateSelectedBoard}
  updatePreviewItem={updatePreviewBoard}
/>

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

  .confirm-selection-wrapper {
    min-height: 66px;
  }
</style>
