import dbConnect from "../../../../lib/mongodb"
import Order from "../../../../model/Order"

export default async function handler(req, res) {
    dbConnect()

    const { method, body } = req

    // Get all orders.
    if (method === "GET") {
        try {
        } catch (error) {
            res.status(500).json(error)
        }
    }

    // Create new order
    if (method === "POST") {
        try {
        } catch (error) {
            res.status(500).json(error)
        }
    }
}
