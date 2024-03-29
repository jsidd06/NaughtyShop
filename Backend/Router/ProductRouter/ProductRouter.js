import express from "express";
import data from "../../Data/data.js";
import Product from "../../Model/ProductModel/ProductModel.js";
import expressAsyncHandler from "express-async-handler";

const productRouter = express.Router();

productRouter.get('/', expressAsyncHandler(async (req, res) => {
    const products = await Product.find({})
    res.send(products)
}))

productRouter.get(
  "/seed",
  expressAsyncHandler(async (req, res) => {
    //   await Product.remove({})
    const createdProducts = await Product.insertMany(data.products);
    res.send({ createdProducts });
  })
);

productRouter.get('/:id', expressAsyncHandler( async (req, res)=>{
    const product = await Product.findById(req.params.id);
    if(product){
        res.send(product);
    }
    else{
        res.status(404).send({ message: 'Product not found' });
    }
}))

export default productRouter;
