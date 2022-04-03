const FirebaseContainer = require("../../contenedores/ContenedorFirebase");

class FirebaseProductsDao extends FirebaseContainer {
  constructor() {
    super("products");
  }
}

module.exports = FirebaseProductsDao;
