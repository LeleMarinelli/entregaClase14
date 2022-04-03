const FirebaseContainer = require("../../contenedores/ContenedorFirebase");

class FirebaseProductsDao extends FirebaseContainer {
  constructor() {
    super("carts");
  }
}

module.exports = FirebaseProductsDao;
