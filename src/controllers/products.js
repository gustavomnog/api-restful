const ProductModel = require('../models/products')


async function get(req, res) {
  const { id } = req.params

  const obj = id ? { _id: id } : null

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


async function put(req, res) {
  const { id } = req.params

  const product = await ProductModel.findOneAndUpdate({ _id: id }, req.body, { new: true })

  res.send({
    message: 'success',
    product
  })

  /*   
  Atualiza no BD, mas retorna o produto antes da alteracao
  const product = await ProductModel.findOne({ _id: id })
  
    await product.updateOne(req.body)
  
    res.send({
      message: 'success',
      product
    }) */
}

async function remove(req, res) {
  const { id } = req.params

  const remove = await ProductModel.deleteOne({ _id: id })

  let message = remove.acknowledged ? 'success' : 'error'
  
  res.send({
    message,
  })
}

module.exports = {
  get,
  post,
  put,
  remove,
}
