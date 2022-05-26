import fs from "fs";
import fetch from "node-fetch";
import characters from "../src/data/characters.js";

const getData = async () => {
  let charactersWithResults = characters
    .map((character) => character.name)
    .reduce((acc, curr) => ({ ...acc, [curr]: {} }), {});

  for (const character of characters) {
    const response = await fetch(
      `https://www.umleague.net/api/analytics/getHeroResultsByMap?hero=${character.name}`
    );
    const json = await response.json();

    charactersWithResults[character.name] = json.repeatOpponent.reduce(
      (acc, curr) => ({
        ...acc,
        [curr.hero]:
          curr.queryOpponentOverall[0].plays >= 10
            ? curr.queryOpponentOverall[0].winpercent
            : null,
      }),
      {}
    );
  }

  try {
    fs.writeFileSync(
      "./scripts/matchupData.json",
      JSON.stringify(charactersWithResults)
    );
  } catch (err) {
    console.log("ERROR ", err);
  }
};

getData();
