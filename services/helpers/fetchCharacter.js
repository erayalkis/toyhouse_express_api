const getCharacterData = require("./getCharacterData");
const getCharacterPage = require("./getCharacterPage");
const logger = require("pino")();

async function fetchCharacter(id, type) {
  const URL = `https://toyhou.se/${id}${type == "gallery" ? "/gallery" : ""}`;

  if(type) {
    logger.info(`Fetching ${type} for ${URL}`);
  } else {
    logger.info(`Fetching ${URL}`);
  }

  const res = await getCharacterPage(URL);
  if(res.error) return res;

  logger.info(`Successfully fetched ${URL}`);
  const character = await getCharacterData(URL, res.data, type);

  return character
}

module.exports = fetchCharacter;