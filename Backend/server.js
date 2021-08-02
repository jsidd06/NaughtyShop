import express from "express";
import data from "./Data/data.js";
import userRouter from "./Router/userRouter.js";
import mongoose from "mongoose";
const app = express();
mongoose.connect(process.env.MONGODB_URL || "mongodb://localhost/naughty", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});
app.get("/api/products/:id", (req, res) => {
  const product = data.products.find((x) => x._id === req.params.id);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: "Product not found" });
  }
});

app.get("/api/products", (req, res) => {
  res.send(data.products);
});
app.use("/api/users", userRouter);

app.get("/", (req, res) => {
  res.send("Server is ready");
});

app.use((err, req, res, next) => {
  res.status(500).send({message: err.message});
})

const port = process.env.PORT || 5000;
app.listen(5000, () => {
  console.log(`server is http://localhost:${port}`);
});
