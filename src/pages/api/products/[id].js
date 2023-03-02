import dbConnect from "../../../../lib/mongodb"
import Product from "../../../../model/Product"

export default async function handler(req, res) {
    dbConnect()

    const { method, query } = req
    const { id } = query

    // Delete Product.
    if (method === "DELETE") {
        try {
        } catch (error) {
            res.status(500).json(error)
        }
    }

    // Update Product.
    if (method === "PUT") {
        try {
        } catch (error) {
            res.status(500).json(error)
        }
    }

    // Get one product.
    if (method === "GET") {
        try {
        } catch (error) {
            res.status(500).json(error)
        }
    }
}
