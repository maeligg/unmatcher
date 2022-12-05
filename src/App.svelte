<script>
  import Modal from 'svelte-simple-modal'
  import CharacterSelection from './CharacterSelection.svelte'
  import BoardSelection from './BoardSelection.svelte'
  import Fight from './Fight.svelte'
  import About from './About.svelte'
  import matchupData from '../scripts/matchupData.json'

  const allSteps = ['player1Choses', 'player2Choses', 'choseBoard', 'fight']

  let currentStep = allSteps[0]
  let p1Character
  let p1Preview
  let p2Character
  let p2Preview
  let selectedBoard
  let boardPreview

  const goToNextStep = (reverse) => {
    if (reverse) {
      if (currentStep === 'choseBoard') {
        selectedBoard = null
      } else if (currentStep === 'player2Choses') {
        p2Character = null
      }
    }

    currentStep = reverse
      ? allSteps[allSteps.indexOf(currentStep) - 1]
      : allSteps[allSteps.indexOf(currentStep) + 1]
  }

  const resetAll = () => {
    p1Character = null
    p1Preview = null
    p2Character = null
    p2Preview = null
    selectedBoard = null
    boardPreview = null
    currentStep = allSteps[0]
  }

  const updateSelectedCharacter = (character, player2) => {
    if (player2) {
      p2Character = character
    } else {
      p1Character = character
    }
  }

  const updatePreviewCharacter = (character, player2) => {
    if (player2) {
      p2Preview = character
    } else {
      p1Preview = character
    }
  }
</script>

<main>
  <Modal>
    {#if currentStep === 'player1Choses' || currentStep === 'player2Choses'}
      <CharacterSelection
        {currentStep}
        {goToNextStep}
        {updateSelectedCharacter}
        {updatePreviewCharacter}
        {p1Character}
        {p1Preview}
        {p2Character}
        {p2Preview}
        {matchupData}
      />
    {:else if currentStep === 'choseBoard'}
      <BoardSelection
        {currentStep}
        {goToNextStep}
        updateSelectedBoard={(board) => (selectedBoard = board)}
        updatePreviewBoard={(board) => (boardPreview = board)}
        {selectedBoard}
        {boardPreview}
      />
    {:else}
      <Fight
        {p1Character}
        {p2Character}
        {selectedBoard}
        {resetAll}
        {matchupData}
      />
    {/if}
    <About />
  </Modal>
</main>

<style>
  main {
    min-height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 10px;
  }
</style>
