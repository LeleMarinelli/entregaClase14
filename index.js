const express = require("express");

const { Server: HttpServer } = require("http");
const { Server: Socket } = require("socket.io");

// DATABASE CONFIG
const dbconfig = require("./db/config");
const knex = require("knex")(dbconfig.mariaDB);
// const knex = require("knex")(dbconfig.sqLite);

const createTableMemoria = require("./tables/tableMemoria");

const ContenedorMemoria = require("./contenedores/ContenedorMemoria.js");
// const ContenedorArchivo = require("./contenedores/ContenedorArchivo.js");

const app = express();
const httpServer = new HttpServer(app);
const io = new Socket(httpServer);

const productosApi = new ContenedorMemoria(knex, "memoria");
// const mensajesApi = new ContenedorArchivo("mensajes.json");

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// Socket io
io.on("connection", async (socket) => {
  console.log("Nuevo cliente conectado!");

  //Productos///////////////////
  let productos = await productosApi.listarAll();
  console.table(productos);
  socket.emit("productos", productos);

  socket.on("update", async (producto) => {
    productos = await productosApi.listarAll();
    console.table(productos);

    productosApi.guardar(producto);
    io.sockets.emit("productos", productos);
  });

  // // Mensajes///////////////////
  // socket.emit("mensajes", await mensajesApi.listarAll());

  // socket.on("nuevoMensaje", async (mensaje) => {
  //   mensaje.fyh = new Date().toLocaleString();
  //   await mensajesApi.guardar(mensaje);
  //   io.sockets.emit("mensajes", await mensajesApi.listarAll());
  // });
});

const PORT = 8080;
const connectedServer = httpServer.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}`);
});
connectedServer.on("error", (error) => console.log("Error: ", error));
