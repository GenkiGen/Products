const Product = require('../models/product.model')

//Test
module.exports.test = (req, resp) => {
  resp.send('This is a test')
}

//Add
module.exports.add_product = (req, resp) => {
  const new_record = new Product({
    name: req.body.name,
    price: req.body.price,
    productType: req.body.productType,
    description: req.body.description,
    imageUrl: req.body.imageUrl
  })

  new_record.save((error, product) => {
    if (error) {
      resp.status(400)
      resp.json({
        message: error.toString()
      })
    } else {
      resp.json(product)
    }
  })
}

//Read
module.exports.get_all = (req, resp) => {
  Product.find({}, (error, res) => {
    if (error) {
      resp.status(400)
      resp.json({
        message: "Error retrieving data"
      })
    } else {
      resp.json(res)
    }
  })
}

//Read one
module.exports.get_one = (req, resp) => {
  Product.findById(req.params.id, (error, res) => {
    if (error) {
      resp.status(400)
      resp.json({
        message: "Error retrieving data"
      })
    } else {
      if (res) {
        resp.json(res)
      } else {
        resp.status(400)
        resp.json({
          message: "Record not found"
        })
      }
    }
  }) 
}

module.exports.update_one = (req, resp) => {
  Product.findByIdAndUpdate(req.body._id, {
    name: req.body.name,
    price: req.body.price,
    productType: req.body.productType,
    description: req.body.description,
    imageUrl: req.body.imageUrl
  }, (error, res) => {
    if (error) {
      resp.status(400)
      resp.json({
        message: "Updating failed"
      })
    } else {
      resp.json(res)
    }
  })
}

module.exports.delete_one = (req, resp) => {
  Product.findByIdAndRemove(req.params.id, (error, res) => {
    if (error) {
      resp.status(400)
      resp.json({
        message: "Delete failed"
      })
    } else {
      resp.json(res)
    }
  })
}