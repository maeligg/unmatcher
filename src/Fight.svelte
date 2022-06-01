<script>
    import Advantage from './Advantage.svelte'

    export let p1Character;
    export let p2Character;
    export let selectedBoard;
    export let resetAll;
    export let matchupData;
</script>

<h1>Fight !</h1>

<div class="wrapper">
    <div class="players">
        <div class="player-preview">
            <img src="{p1Character.image}" alt="{p1Character.name}" class="preview-image">
            <h2>{p1Character.name}</h2>
        </div>
        <div class="middle-section">
            <img src="/img/vs.svg" alt="versus" class="versus">
            <Advantage matchupData={matchupData} p1Character={p1Character} p2Character={p2Character} />
        </div>
        <div class="player-preview">
            <img src="{p2Character.image}" alt="{p2Character.name}" class="preview-image">
            <h2>{p2Character.name}</h2>
        </div>
    </div>
    <div class="center">
        <div class="in">in</div>
        <img src="{selectedBoard.image}" alt="{selectedBoard.name}" class="preview-board">
        <h2>{selectedBoard.name}</h2>
        <div class="actions">
            <a href="https://www.umleague.net/newmatch" target="_blank" rel="noopener noreferrer" class="button-primary">Log results on UM league</a>
            <button on:click={resetAll} class="button-secondary">Rematch</button>
        </div>
    </div>
</div>

<style>
    .wrapper {
		width: 100%;
		display: flex;
		flex-direction: column;
	}

    .players {
		display: flex;
		justify-content: space-around;
        gap: 20px;
    }

    .preview-image {
        margin: 0 auto;
        max-width: 100%;
        max-height: 300px;
        border-radius: 4px;
    }

	.player-preview {
		width: calc(50% - 60px);
		text-align: center;
	}

    h2 {
        text-align: center;
    }

    .middle-section {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    @media (min-width: 600px) {
        .middle-section {
            min-width: 250px;
        }
    }

    .versus {
        width: 60px;
    }

    @media (min-width: 600px) {
        .versus {
            width: 120px;
	    }
    }

    .center {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .in {
        margin-bottom: 1rem;
        font-size: 2rem;
        font-style: italic;
    }

    .preview-board {
        height: 150px;
    }

    .actions {
        margin: 30px 0;
        display: flex;
        flex-direction: column;
    }
</style>