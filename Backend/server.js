import express from "express";
import userRouter from "./Router/userRouter.js";
import mongoose from "mongoose";
import productRouter from "./Router/ProductRouter/ProductRouter.js";
const app = express();
mongoose.connect(process.env.MONGODB_URL || "mongodb://localhost/naughty", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

app.use("/api/users", userRouter);
app.use("/api/products", productRouter);
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
