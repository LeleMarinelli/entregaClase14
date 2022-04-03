const { Schema } = require("mongoose");
const ContenedorMongo = require("../../contenedores/ContenedorMongo");

const collection = "carts";

const cartsSchema = new Schema({
  timestamp: { type: Date, min: Date.now() },
  products: [{ type: Schema.Types.ObjectId, ref: "products" }],
});

class MongocartsDao extends ContenedorMongo {
  constructor() {
    super(collection, cartsSchema);
  }
}

module.exports = MongocartsDao;
