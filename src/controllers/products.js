const ProductModel = require('../models/products')


async function get(req, res) {
  const { id } = req.params  

  const obj = id ? {_id: id} : null

  const products = await ProductModel.find(obj)

  res.send(products)
}

async function post(req, res) {
   const {
    name,
    brand,
    price,
   } = req.body

  const product = new ProductModel({
    name,
    brand,
    price,
  })

  product.save()

  res.send({
    message: 'success'
  })
}

module.exports = {
  get,
  post,
}