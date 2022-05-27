const axios = require("axios");
const cheerio = require("cheerio");

async function fetchCharacter(id) {
  let res;

  try {
    res = await axios.get(`https://toyhou.se/${id}`);
  } catch (AxiosError) {
    console.error(AxiosError);

    return {
      error: 'Character ID is invalid or character profile is locked',
    }
  }

  const $ = cheerio.load(res.data);

  let info = $("div.profile-info-section");
  let gallery = $("ul.magnific-gallery");
  let char_tags = $("div.profile-tags-content");

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

  let tags = [];
    char_tags.find("a.badge").each((idx, ele) => {
    tags.push($(ele).text());
   });

  let fav_count = info.find("dl.fields div.fields-field").eq(2).find(".col-sm-8").text().trim();
  let created_at = info.find("abbr.datetime").attr("title");
  let created_n_ago = info.find("dl.fields div.fields-field").eq(0).find(".col-sm-8").text().trim();

  return {
    name,
    owner,
    creator,
    desc,
    recent_images,
    fav_count,
    created_at,
    created_n_ago,
    tags
  }
}


module.exports = {
  fetchCharacter,

}