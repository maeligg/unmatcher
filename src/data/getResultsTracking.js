import characters from './characters';

const getResults = async () => {
    const response = await fetch('https://sheets.googleapis.com/v4/spreadsheets/1BOdYOeTDW0ddVBq4Oq_CWADMzIonOcBjvDRpWHuUs50/values/C2:AB27?key=AIzaSyA7apN4I6sW4kaUovxaWyvZqRu2Gp_zEPc');
    const json = await response.json();

    // Removing duplicate Buffy results
    let results = json.values;
    results = results.filter((_, index) => index !== 15 && index !== 16);
    results = results.map(row => row.filter((_, index) => index !== 15 && index !== 16));

    let charactersWithResults = {};

    characters.forEach((firstChar, firstCharIndex) => {
        characters.forEach((secondChar, secondCharIndex) => {
            if (!charactersWithResults[firstChar.name]) {
                charactersWithResults[firstChar.name] = {};
            }
            charactersWithResults[firstChar.name][secondChar.name] = parseInt(results[firstCharIndex][secondCharIndex]);
        })
    });

    return charactersWithResults;
}

export default getResults;