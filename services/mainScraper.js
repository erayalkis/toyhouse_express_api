const axios = require("axios");
const cheerio = require("cheerio");

async function fetchCharacter(id) {
  
  let charName = async () =>  axios.get(`https://toyhou.se/${id}`).then((res) => {
    const $ = cheerio.load(res.data);
    let name = $("h1.display-4").text();
    return name;
  });

  let char = await charName();
  return char;
}


module.exports = {
  fetchCharacter,

}