import Product from '../models/product.model'
import errorHandler from './../helpers/dbErrorHandler'

/* List all products. */
const list = async (req, res) => {
    let data = await Product.find({});
    console.info(`records retrieved from mongoose:`, data?.length)
    res.send(data);
  }

 const create = async (req, res) => {
    let productToCreate = req.body
    try {
      let newProduct = new Product(productToCreate)
      await newProduct.save()
      console.log("Created Product", newProduct)
      res.send(newProduct)  
    }
    catch (error) {
      console.log(error)
      if (error.code === 11000) {
        res.status(409).send('Product ' + productToCreate.name + ' already exists');      
      }
      else {
        res.sendStatus(500)
      }
    }
  }
export default {
    list,
    create
}