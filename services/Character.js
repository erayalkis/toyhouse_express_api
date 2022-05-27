const fetchCharacter = require("./helpers/fetchCharacter");

class Character {
  constructor(id, path) {
    this.id = id;
    this.type = this.getRequestType(path)
  }

  getRequestType(path) {
    // When we split a path string on every "/", we get an array as such: ["", "<character_id>", "details"]
    // We then index into the 3rd item, which is the type of character data being requested
    let parts = path.split("/");

    return parts[2]
  }

  async data() {
    return await fetchCharacter(this.id, this.type);
  }

}

module.exports = Character
