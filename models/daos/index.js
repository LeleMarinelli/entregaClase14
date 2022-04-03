const {
  ENV: { PERS },
  DB_CONFIG,
} = require("../../db/config");

let ProductsDao;
let CartsDao;

switch (PERS) {
  case "firebase":
    ProductsDao = require("./products/FirebaseProductsDao");
    CartsDao = require("./carts/FirebaseCartsDao");
    break;
  case "mongo":
    ProductsDao = require("./products/MongoProductsDao");
    CartsDao = require("./carts/MongoCartsDao");
    break;
  case "mariadb":
    const knex = require("knex")(DB_CONFIG.mariadb);
    const ContenedorMemoria = require("../contenedores/ContenedorMemoria");
    ProductsDao = new ContenedorMemoria(knex, "memoria");
    break;
  case "sqlite":
    break;
  case "file":
    break;
  case "memory":
    break;
  default:
    throw new Error("Invalid persistent method");
}

module.exports = {
  ProductsDao,
  CartsDao,
};
