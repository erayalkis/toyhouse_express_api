const logger = require("pino")();
const axios = require("axios");

async function getCharacterPage(url) {
  let res;

  try {
    res = await axios.get(url, {
      headers: {
        "User-Agent": "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:15.0) Gecko/20100101 Firefox/15.0.1"
      }
    });
  } catch (AxiosError) {
    logger.error(AxiosError.message);
    switch(AxiosError.response.status) {
      case 500:
        return {
          error: 'Something went wrong while processing the character, Toyhouse servers might be down',
        }
      case 404:
        return {
          error: 'Character ID is invalid or character profile is locked',
        }
    }
  }

  return res;
}

module.exports = getCharacterPage;
