// productRoutes.js file
const express = require("express");
const { AddProductController, UpdateProductController, GetAllProductController, GetApiCallCount, DeleteProductController, DeleteAllProductsController } = require("../controller/product.controller.js");
const router = express.Router();

router.post("/add", AddProductController);
router.patch("/update/:id", UpdateProductController);
router.get("/all", GetAllProductController);
router.get("/count", GetApiCallCount);
router.delete("/delete/:id", DeleteProductController);
router.delete("/deleteall",DeleteAllProductsController);

module.exports = router;
