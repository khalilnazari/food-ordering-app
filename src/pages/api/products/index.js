import dbConnect from "../../../../lib/mongodb"
import Product from "../../../../model/Product"

export default async function handler(req, res) {
    dbConnect()

    const { method, body } = req

    // Get all products.
    if (method === "GET") {
        try {
        } catch (error) {
            res.status(500).json(error)
        }
    }

    // Create new product
    if (method === "POST") {
        try {
        } catch (error) {
            res.status(500).json(error)
        }
    }
}
