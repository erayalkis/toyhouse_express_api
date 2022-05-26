const axios = require("axios");
const cheerio = require("cheerio");

async function fetchCharacter(id) {
  
  let charName = async () =>  axios.get(`https://toyhou.se/${id}`).then((res) => {
    const $ = cheerio.load(res.data);
    let info = $("div.profile-info-section");
    let gallery = $("ul.magnific-gallery");

    let name = $("h1.display-4").text();
    let owner = { 
      name: $("div.profile-name-info span.display-user").text(),
      link: $("div.profile-name-info span.display-user a").attr("href")
    }
    let creator = {
      name: info.find("span.display-user").text(),
      link: info.find("span.display-user a").attr("href")
    }
    let desc = $("div.profile-content-content").text();

    let recent_images = []
    gallery.find("a.magnific-item").each((idx, ele) => {
      recent_images.push(ele.attribs.href);
    })

    let fav_count = info.find("dl.fields div.fields-field").eq(2).find(".col-sm-8").text();

    return {
      name,
      owner,
      creator,
      desc,
      recent_images,
      fav_count
    }
  });

  let char = await charName();
  return char;
}


module.exports = {
  fetchCharacter,

}