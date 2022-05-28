const request = require("request");
const logger = require("pino")();

async function getAuths() {

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
  let res = await request(options, (err, res) => {
    if(err) console.log(err);
    logger.info("Finished getting auths");

    console.log(res.headers["set-cookie"]);
  })

}

module.exports = getAuths;