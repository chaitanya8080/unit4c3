
const express = require("express");


const userController = require("./controllers/user.controller");
const booksController = require("./controllers/book.controller");
const commentController = require("./controllers/comment.controller");
const publicationController = require("./controllers/publication.controller");
const app = express();

app.use(express.json());


app.use("/users",userController);
app.use("/books",booksController);
app.use("/comment",commentController);
app.use("/publication",publicationController);

module.exports = app;