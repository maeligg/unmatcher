import characters from './characters';

const getResults = async () => {
    const response = await fetch('https://spreadsheets.google.com/feeds/cells/1BOdYOeTDW0ddVBq4Oq_CWADMzIonOcBjvDRpWHuUs50/1/public/full?alt=json');
    const json = await response.json();
    const results = json.feed.entry.filter(cell => cell.gs$cell.row !== '1');

    let charactersWithResults = {};

    characters.forEach(character => {
        const indexStartOfResults = results.findIndex(cell => cell.content.$t === character.name) + 1;
        let resultsForCharacter = results.slice(indexStartOfResults, indexStartOfResults + characters.length + 2).map(cell => parseInt(cell.content.$t));
        resultsForCharacter.splice(15, 2); // Removing duplicate Buffy results

        charactersWithResults[character.name] = characters.map(character => character.name).reduce((acc, curr, i) => {
            acc[curr] = resultsForCharacter[i];
            return acc;
        }, {});
    });

    return charactersWithResults;
}

export default getResults;