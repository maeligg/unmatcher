<h3>About</h3>
<p>This is a character and board picker tool for the miniatures dueling game <a href="https://restorationgames.com/unmatched/" target="_blank" rel="noopener noreferrer">Unmatched</a> created by Restoration Games.</p>

<h3>Disclaimer</h3>
<p>All character and board illustrations are the sole property of Restoration Games. This site is not affiliated in any way with Restoration Games or Mondo Games.</p>

<h3>Contact</h3>
<p>
    The easiest and best way to report a bug or make a feature request is to open a <a href="https://github.com/maeligg/unmatcher/issues" target="_blank" rel="noopener noreferrer">GitHub issue</a>. You can also contact me on :<br>
    Discord : Maëlig#6207 on the <a href="https://discord.gg/j4k8VWv" target="_blank" rel="noopener noreferrer">official Restoration discord</a><br>
    Twitter : <a href="https://twitter.com/MaelB" target="_blank" rel="noopener noreferrer">@maelb</a>
</p>

<h3>Frequently asked questions</h3>
<details>
    <summary>Is it possible to exclude some fighters / boards from the random selection ?</summary>
    Yes, if you click on the "filter" button you can exclude characters / boards you don't own or don't want to play. They will also be excluded from the random selection.
</details>
<details>
    <summary>How is the "advantage" calculated ?</summary>
    The data is pulled live from the Unmatched <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vQL4fiu_KrLgSUNJ0nTCR6OBrAybNPPMfJ1vceOEbiGD3dbbMcJqlM7nBtyZ3kCF73z5-x3UbnpQRJs/pubhtml" target="_blank" rel="noopener noreferrer">results tracking</a> spreadsheet. A win / lose rate between 45% and 55% is considered as "no advantage". A rate between 40% and 45% or between 55% and 60% is a "small advantage" (▶). Anything below 40% or above 60% is a "big advantage" (▶▶). Keep in mind the sample size is very small for some of these datasets ! Make sure to consult the full spreadsheet for details.
</details>
<details>
    <summary>Can I use this to pair 4 players ?</summary>
    Not at the moment, but it's something I will probably look into soon. In the meantime, you can always do the pairing twice.
</details>

<style>
    a {
        color: initial;
    }

    details {
        margin-bottom: 10px;
    }

    summary {
        cursor: pointer;
    }
</style>