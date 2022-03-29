// TABLA // MENSAJES.

const dbconfig = require("../db/config");
const knex = require("knex")(dbconfig.sqlite);

module.export = (async () => {
  try {
    const tableExist = await knex.schema.hasTable("archivo");
    if (!tableExist) {
      await knex.schema.createTable("archivo", (table) => {
        table.increments("id");
        table.string("autor").notNullable();
        table.string("fyh").notNullable();
        table.string("texto").notNullable();
      });
      console.log("Table of messages created!");
    } else {
      console.log("Skipping Table of messages creation...");
    }
  } catch (error) {
    console.log(error);
    throw error;
  } finally {
    knex.destroy();
  }
})();
