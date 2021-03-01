<script>
    import Advantage from './Advantage.svelte'

    export let p1Character;
    export let p2Character;
    export let selectedBoard;
    export let resetAll;
    export let winLoss;
</script>

<h1>Fight !</h1>

<div class="wrapper">
    <div class="players">
        <div class="player-preview">
            <img src="{p1Character.image}" alt="{p1Character.name}" class="preview-image">
            <h2>{p1Character.name}</h2>
        </div>
        <img src="/img/vs.svg" alt="versus" class="versus">
        <div class="player-preview">
            <img src="{p2Character.image}" alt="{p2Character.name}" class="preview-image">
            <h2>{p2Character.name}</h2>
        </div>
    </div>
    <Advantage winLoss={winLoss} p1Character={p1Character} p2Character={p2Character} />
    <div class="center">
        <div class="in">in</div>
        <img src="{selectedBoard.image}" alt="{selectedBoard.name}" class="preview-board">
        <h2>{selectedBoard.name}</h2>
        <div class="actions">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLScKU4QmkKy3wy26omcov0jtDU5ORb89EeqUlbv9DTjq1X2bMA/viewform" target="_blank" rel="noopener noreferrer" class="button-primary">Log results</a>
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

	.player-preview {
		width: calc(50% - 60px);
		text-align: center;
	}

    h2 {
        margin-bottom: 0;
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
        margin-top: 3rem;
        display: flex;
        flex-direction: column;
    }
</style>