// TABLA // PRODUCTOS.

const dbconfig = require("../db/config");
const knex = require("knex")(dbconfig.DB_CONFIG.mariaDB);

module.export = (async () => {
  try {
    const tableExist = await knex.schema.hasTable("memoria");
    if (!tableExist) {
      await knex.schema.createTable("memoria", (table) => {
        table.increments("id");
        table.string("title").notNullable();
        table.integer("price").notNullable();
        table.string("thumbnail");
      });
      console.log("Table crated!");
    } else {
      console.log("Skipping creation...");
    }
  } catch (error) {
    console.log(error);
    throw error;
  } finally {
    knex.destroy();
  }
})();
