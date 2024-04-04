// productController.js file
const ProductModel = require("../models/product.model");
const CountModel = require("../models/count.model");

// productController.js file
const ProductCountModel = require("../models/count.model");

exports.AddProductController = async (req, res) => {
    const { name, description, price, quantity } = req.body;
    try {
        await ProductModel.create({
            name: name,
            description: description,
            price: price,
            quantity: quantity
        });
        const productCount = await ProductCountModel.findOneAndUpdate({}, { $inc: { addCount: 1 } }, { upsert: true });
        return res.status(200).send({
            message: "Product added successfully!"
        });
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

exports.UpdateProductController = async (req, res) => {
    const { id } = req.params;
    try {
        await ProductModel.findByIdAndUpdate(id, req.body);
        const productCount = await ProductCountModel.findOneAndUpdate({}, { $inc: { updateCount: 1 } }, { upsert: true });
        return res.status(200).send({
            message: "Product updated successfully!"
        });
    } catch (error) {
        return res.status(500).send(error.message);
    }
};


exports.GetAllProductController = async (req, res) => {
    try {
        const allProducts = await ProductModel.find({});
        return res.status(200).send({
            products: allProducts
        });
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

exports.GetApiCallCount = async (req, res) => {
    try {
        const apiCount = await ProductCountModel.find({});
        return res.status(200).send({
            count: apiCount
        });
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

exports.DeleteProductController = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedProduct = await ProductModel.findByIdAndDelete(id);
        const productCount = await ProductCountModel.findOneAndUpdate({}, { $inc: { deleteCount: 1 } }, { upsert: true });
        if (!deletedProduct) {
            return res.status(404).send({
                message: "Product not found"
            });
        }
        return res.status(200).send({
            message: "Product deleted successfully!",
            deletedProduct: deletedProduct
        });
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

exports.DeleteAllProductsController = async (req, res) => {
    try {
        const deleteResult = await ProductModel.deleteMany({});
        await ProductCountModel.updateOne({}, { $set: { deleteCount: deleteResult.deletedCount } }, { upsert: true });
        return res.status(200).send({
            message: "All products deleted successfully!",
            deletedCount: deleteResult.deletedCount
        });
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

