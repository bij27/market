const express = require("express");
const app = express();

app.use(express.json());

const usersRouter = require("./api/users");
const productRouter = require("./api/products");
const ordersRouter = require("./api/orders");

app.use("/users", usersRouter);
app.use("/products", productRouter);
app.use("/orders", ordersRouter);

module.exports = app;