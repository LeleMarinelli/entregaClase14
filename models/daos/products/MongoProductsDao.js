const { Schema } = require("mongoose");
const ContenedorMongo = require("../../contenedores/ContenedorMongo");

const collection = "products";

const productsSchema = new Schema({
  id: { type: String, unique: true, required: true },
  title: { type: String, required: true },
  price: { type: Number, min: 0, required: true },
  thumbnail: { type: String },
  stock: { type: Number, min: 0, required: true },
  timestamp: { type: Date, min: Date.now() },
});

class MongoProductsDao extends ContenedorMongo {
  constructor() {
    super(collection, productsSchema);
  }
}

module.exports = MongoProductsDao;
