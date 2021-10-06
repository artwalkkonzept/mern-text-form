// We export the object used to access the artwalks in the database
module.exports = mongoose => new Db(mongoose);

class Db {
  /**
   * Constructors an object for accessing artwalks in the database
   * @param mongoose the mongoose object used to create schema objects for the database
   */
  constructor(mongoose) {
    // This is the schema we need to store artwalks in MongoDB
    const artwalkSchema = new mongoose.Schema({
      name: String,
      bilds: [String] // A list of bilds as string
    });

    // This model is used in the methods of this class to access artwalks
    this.artwalkModel = mongoose.model('artwalk', artwalkSchema);
  }

  async getArtwalks() {
    try {
      return await this.artwalkModel.find({});
    } 
    catch (error) {
      console.error("getArtwalks:", error.message);
      return {};
    }
  }

  async getArtwalk(id) {
    try {
      return await this.artwalkModel.findById(id);
    } catch (error) {
      console.error("getArtwalk:", error.message);
      return {};
    }
  }

  async createArtwalk(newArtwalk) {
    const artwalk = new this.artwalkModel(newArtwalk);
    return artwalk.save();
  }

  async addBild(artwalkId, bild) {
    const artwalk = await this.getArtwalk(artwalkId);
    artwalk.bilds.push(bild);
    return artwalk.save();
  }

  /**
   * This method adds a bunch of test data if the database is empty.
   * @ param count The amount of artwalks to add.
   * @returns {Promise} Resolves when everything has been saved.
   */
  async bootstrap() {

    let l = (await this.getArtwalks()).length;
    console.log("Artwalk collection size:", l);
    if (l === 0) {
      const promises = [];

      return Promise.all(promises);
    }
  }
}

// We export the object used to access the artwalks in the database
module.exports = mongoose => new Db(mongoose);