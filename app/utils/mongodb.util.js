const { MongoClient } = require("mongodb");

class MongoDB {
  static client;

  static async connect(uri) {
    if (this.client) {
      return this.client;
    }
    this.client = new MongoClient(uri); // Không cần thêm tùy chọn
    await this.client.connect(); // Kết nối đến MongoDB
    return this.client;
  }

  static getClient() {
    if (!this.client) {
      throw new Error("Database client is not initialized. Call connect() first.");
    }
    return this.client;
  }
}

module.exports = MongoDB;
