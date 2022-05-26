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
    let desc = $("div.profile-content-content").text().replace(/\n|\r/g, "").trim();

    let recent_images = []
    gallery.find("a.magnific-item").each((idx, ele) => {
      recent_images.push(ele.attribs.href);
    })

    let fav_count = info.find("dl.fields div.fields-field").eq(2).find(".col-sm-8").text().trim();
    let created_at = info.find("abbr.datetime").attr("title");
    let created_n_ago = info.find("dl.fields div.fields-field").eq(0).find(".col-sm-8").text().trim();
    console.log(created_at);

    return {
      name,
      owner,
      creator,
      desc,
      recent_images,
      fav_count,
      created_at,
      created_n_ago
    }
  });

  let char = await charName();
  return char;
}


module.exports = {
  fetchCharacter,

}