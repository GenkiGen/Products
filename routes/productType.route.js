const express = require('express')
const router = express.Router()

//Use product controller
const product_type_controller = require('../controllers/productType.controller')

//Match routes
router.post("/", product_type_controller.add_product)
router.get("/", product_type_controller.get_all)
router.get("/:id", product_type_controller.get_one)
router.put("/", product_type_controller.update_one)
router.delete("/:id", product_type_controller.delete_one)

//Export
module.exports = router