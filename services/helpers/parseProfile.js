
async function parseProfile($, all=true) {
  let character = {};

  let info = $("div.profile-info-section");
  let gallery = $("ul.magnific-gallery");
  let char_tags = $("div.profile-tags-content");

  character.owner = { 
    name: $("div.profile-name-info span.display-user").text(),
    link: $("div.profile-name-info span.display-user a").attr("href")
  }

  character.name = $("h1.display-4").text();

  if(all) {
    character.creator = {
      name: info.find("span.display-user").text(),
      link: info.find("span.display-user a").attr("href")
    }

    character.desc = $("div.profile-content-content").text().replace(/\n|\r/g, "").trim();

    let recent_images = []
    gallery.find("a.magnific-item").each((idx, ele) => {
      recent_images.push(ele.attribs.href);
    })
    character.recent_images = recent_images;

    let tags = [];
    char_tags.find("a.badge").each((idx, ele) => {
      tags.push($(ele).text());
    });
    character.tags = tags;

    character.fav_count = info.find("dl.fields div.fields-field").eq(2).find(".col-sm-8").text().trim();
    character.created_at = info.find("abbr.datetime").attr("title");
    character.created_n_ago = info.find("dl.fields div.fields-field").eq(0).find(".col-sm-8").text().trim();
  }
  
  return character
}

module.exports = parseProfile;