<script>
    import characters from './data/characters';
    import Picker from './Picker.svelte';
    import Advantage from './Advantage.svelte'

    export let currentStep;
    export let goToNextStep;
    export let updateSelectedCharacter;
    export let p1Character;
    export let p2Character;
    export let winLoss;
</script>

<h1 class="{currentStep === 'player1Choses' ? 'p1' : 'p2'}">Player {#if currentStep === 'player1Choses'}1{:else}2{/if}: select your fighter</h1>

<div class="preview">
    <div class="player-preview">
        {#if p1Character}
            <img src="{p1Character.image}" alt="{p1Character.name}" class="preview-image">
            <h2>{p1Character.name}</h2>
        {:else}
            <div class="character-preview-placeholder">?</div>
        {/if}
    </div>
    <img src="/img/vs.svg" alt="versus" class="versus">
    <div class="player-preview">
        {#if p2Character}
            <img src="{p2Character.image}" alt="{p2Character.name}" class="preview-image">
            <h2>{p2Character.name}</h2>
        {:else}
            <div class="character-preview-placeholder">?</div>
        {/if}
    </div>
</div>

<Advantage winLoss={winLoss} p1Character={p1Character} p2Character={p2Character} />

<Picker items={characters} currentStep={currentStep} goToNextStep={goToNextStep} updateSelectedItem={updateSelectedCharacter} excludeFromRandomPool={p1Character} />



<style>
    h1.p1 {
		color: var(--c-red);
	}

	h1.p2 {
		color: var(--c-blue);
	}

	.preview {
		width: 100%;
		display: flex;
		justify-content: space-around;
		align-items: center;
	}

    .preview-image {
        margin: 0 auto;
        max-width: 100%;
        background-size: contain;
        mask-image: url(../img/mask.svg);
        -webkit-mask-image: url(../img/mask.svg);
        mask-size: contain;
        -webkit-mask-size: contain;
        mask-repeat: no-repeat;
        -webkit-mask-repeat: no-repeat;
    }

	.character-preview-placeholder {
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 100px;
	}

    @media (min-width: 600px) {
        .character-preview-placeholder {
            height: 320px;
	    }
    }

	.player-preview {
        min-height: 225px;
		width: calc(50% - 60px);
		text-align: center;
	}

    .versus {
        width: 60px;
    }

    @media (min-width: 600px) {
        .versus {
            width: 120px;
	    }
    }
</style>