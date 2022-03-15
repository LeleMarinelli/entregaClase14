class ContenedorMemoria {
  constructor(config, table) {
    this.config = config;
    this.table = table;
  }

  listar(idBuscado) {
    (async () => {
      try {
        const data = await this.config
          .from(this.table)
          .select("*")
          .where({ id: idBuscado });
        console.table(data);
        return data;
      } catch (error) {
        console.log("Elemento no encontrado");
        throw error;
      } finally {
        this.config.destroy();
      }
    })();
  }

  listarAll() {
    (async () => {
      try {
        const data = await this.config.from(this.table).select("*");
        return data;
      } catch (error) {
        console.log(error);
        throw error;
      } finally {
        this.config.destroy();
      }
    })();
  }

  guardar(elem) {
    (async () => {
      try {
        const newProductAdded = elem;
        await this.config(this.table).insert(newProductAdded);
        console.log("Se agrego un producto!");
        return newProductAdded;
      } catch (error) {
        console.log(error);
        throw error;
      } finally {
        this.config.destroy();
      }
    })();
  }

  actualizar(elem, idElemento) {
    (async () => {
      try {
        await this.config
          .from(this.table)
          .where({ id: idElemento })
          .update(elem);
        console.table("Se ha actualizado un elemento");
      } catch (error) {
        console.log(error);
        throw error;
      } finally {
        this.config.destroy();
      }
    })();
  }

  borrar(idBorrar) {
    (async () => {
      try {
        await this.config.from(this.table).where({ id: idBorrar }).del();
        console.table("Entry deleted!");
      } catch (error) {
        console.log(error);
        throw error;
      } finally {
        this.config.destroy();
      }
    })();
  }

  borrarAll() {
    (async () => {
      try {
        await this.config.from(this.table).del();
        console.table("Se ha borrado todo!");
      } catch (error) {
        console.log(error);
        throw error;
      } finally {
        this.config.destroy();
      }
    })();
  }
}

module.exports = ContenedorMemoria;
