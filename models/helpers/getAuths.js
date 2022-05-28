const { default: axios, Axios } = require("axios");
const request = require("request");
const logger = require("pino")();
const cheerio = require("cheerio");

async function getCookie() {
  const options = {
    'method': 'POST',
    'url': 'https://toyhou.se/~account/login',
    'headers': {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    form: {
      'login_username': 'toyhouse_downloader',
      'login_password': 'arda159852456'
    },
    // followAllRedirects: true,
    // jar: true
  };

  logger.info("Getting auths");
  request(options, (err, res) => {
    if(err) console.log(err);
    logger.info("Finished getting auths");

    console.log(res.headers["set-cookie"][1]);
  })
}

async function getAuths() {

  try {
    let res = await axios.get("https://toyhou.se/~account/authorizers");
  } catch(AxiosError) {
    logger.error(AxiosError.message);
  }
  let $ = cheerio.load(res.data);

}

module.exports = getAuths;