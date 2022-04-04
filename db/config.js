const firebaseConfig = require("./firebase/ecommerce-backend-leandro-firebase-adminsdk-b4fuo-6577f192d3.json");
const path = require("path");

require("dotenv").config({ path: ".env" });

module.exports = {
  ENV: {
    PORT: process.env.PORT || 8080,
    PERS: process.env.PERS || "mongo",
  },
  DB_CONFIG: {
    mariaDB: {
      client: "mysql",
      connection: {
        host: "127.0.0.1",
        port: 3306,
        user: "root",
        password: "",
        database: "entrega16memoria",
      },
    },
    sqlite: {
      client: "sqlite3",
      connection: {
        filename: path.resolve(__dirname, "./sqlite/ecommerce.sqlite"),
      },
    },
    mongodb: {
      uri: "mongodb://localhost/ecommerce",
    },
    firebase: {
      certification: firebaseConfig,
    },
  },
};
