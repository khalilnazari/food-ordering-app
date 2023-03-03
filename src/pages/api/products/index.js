import dbConnect from "../../../../lib/mongodb"
import Product from "../../../../model/Product"

export default async function handler(req, res) {
    dbConnect()

    const { method, body } = req

    // Get all products.
    if (method === "GET") {
        try {
            const products = await Product.find()
            res.status(200).json(products)
        } catch (error) {
            res.status(500).json(error)
        }
    }

    // Create new product
    if (method === "POST") {
        try {
            const product = await Product.create(body)
            res.status(201).json(product)
        } catch (error) {
            res.status(500).json(error)
        }
    }
}
