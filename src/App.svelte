<script>
	import Modal from 'svelte-simple-modal';
	import CharacterSelection from './CharacterSelection.svelte';
	import BoardSelection from './BoardSelection.svelte';
	import Fight from './Fight.svelte';
	import About from './About.svelte';
	import getWinLoss from './data/getResultsTracking';

	const allSteps = [
		'player1Choses',
		'player2Choses',
		'choseBoard',
		'fight'
	];

	let currentStep = allSteps[0];
	let p1Character;
	let p2Character;
	let selectedBoard;

	const goToNextStep = () => {
		currentStep = allSteps[allSteps.indexOf(currentStep) + 1];
	};

	const resetAll = () => {
		p1Character = null;
		p2Character = null;
		selectedBoard = null;
		currentStep = allSteps[0];
	}

	const updateSelectedCharacter = (character, player2) => {
		if (player2) {
			p2Character = character;
		} else {
			p1Character = character;
		}
	};

	const winLoss = getWinLoss();
</script>

<main>
	<Modal>
		{#if currentStep === 'player1Choses' || currentStep === 'player2Choses'}
			<CharacterSelection currentStep={currentStep} goToNextStep={goToNextStep} updateSelectedCharacter={updateSelectedCharacter} p1Character={p1Character} p2Character={p2Character} winLoss={winLoss} />
		{:else if currentStep === 'choseBoard'}
			<BoardSelection currentStep={currentStep} goToNextStep={goToNextStep} updateSelectedBoard={board => selectedBoard = board} selectedBoard={selectedBoard} />
		{:else}
			<Fight p1Character={p1Character} p2Character={p2Character} selectedBoard={selectedBoard} resetAll={resetAll} winLoss={winLoss} />
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