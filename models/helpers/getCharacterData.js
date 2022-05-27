const logger = require("pino")();
const cheerio = require("cheerio");
const parseGallery = require("./parseGallery");
const parseProfile = require("./parseProfile");

async function getCharacterData(URL, html, type) {
  const $ = cheerio.load(html);

  
  // logger.warn(`HEADER IS ${$("ul.side-nav li.header").text()}`);

  // if($("li.header").text() != "Character") {
  //   logger.error(`${URL} is not a character profile or has custom CSS!`);
  //   return {
  //     error: 'The given ID belongs to a user profile or a profile with custom CSS'
  //   }
  // }

  switch(type) {
    case "gallery":
      logger.info(`Parsing gallery for ${URL}`);
      data = parseGallery($)
      break;
    case "details":
      logger.info(`Parsing details for ${URL}`);
      data = parseProfile($, false)
      break;
    default:
      logger.info(`Parsing profile for ${URL}`);
      data = parseProfile($)
      break;
  }

  return data;
}

module.exports = getCharacterData;
