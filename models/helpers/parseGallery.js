const logger = require("pino")();

async function parseGallery($) {
  const character = {}

  character.name = $("h1.image-gallery-title a").text();

  let gallery = []
  $("li.gallery-item").each((idx, ele) => {
    let name = $(ele).find("div.artist-credit").text().trim();
    let a = $(ele).find("div.thumb-image > a").first();

    gallery.push({
      link: a.attr("href"),
      artist: {
        name,
        profile: getProfileName(name)
      }
    })
  })
  character.gallery = gallery;

  return character;
}

function getProfileName(name) {
  if(name.startsWith("https") || name.startsWith("http")) {
    return name
  } else {
    return `https://toyhou.se/${name}`
  }
}

module.exports = parseGallery;