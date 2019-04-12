const express = require('express')
const router = express.Router()

//Use product controller
const product_controller = require('../controllers/product.controller')

//Match routes
router.get('/test', product_controller.test)
router.post("/", product_controller.add_product)
router.get("/", product_controller.get_all)
router.get("/:id", product_controller.get_one)
router.put("/", product_controller.update_one)
router.delete("/:id", product_controller.delete_one)

//Export
module.exports = router