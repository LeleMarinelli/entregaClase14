const ContenedorMemoria = require("../../contenedores/ContenedorMemoria");

class MariadbProductDao extends ContenedorMemoria {
  constructor() {
    super("products");
  }
}

module.exports = MariadbProductDao;
