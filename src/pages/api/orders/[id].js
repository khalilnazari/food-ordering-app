import dbConnect from "../../../../lib/mongodb"
import Order from "../../../../model/Order"

export default async function handler(req, res) {
    dbConnect()

    const { method, query } = req
    const { id } = query

    // Delete order.
    if (method === "DELETE") {
        try {
        } catch (error) {
            res.status(500).json(error)
        }
    }

    // Update order.
    if (method === "PUT") {
        try {
        } catch (error) {
            res.status(500).json(error)
        }
    }

    // Get one order.
    if (method === "GET") {
        try {
        } catch (error) {
            res.status(500).json(error)
        }
    }
}
