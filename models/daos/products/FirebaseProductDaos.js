const ContenedorFirebase = require("../../contenedores/ContenedorFirebase");

class FirebaseProductsDao extends ContenedorFirebase {
  constructor() {
    super("products");
  }
}

module.exports = FirebaseProductsDao;
