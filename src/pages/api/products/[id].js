import dbConnect from "../../../../lib/mongodb"
import Product from "../../../../model/Product"

export default async function handler(req, res) {
    dbConnect()

    const { method, query } = req
    const { id } = query

    // console.log(id)
    // res.status(200).json({ message: "hello", id, method })
    // return

    // Delete Product.
    if (method === "DELETE") {
        try {
            await Product.findByIdAndDelete(id)
            res.status(200).json("The product has been deleted!")
        } catch (error) {
            res.status(500).json(error)
        }
    }

    // Update Product.
    if (method === "PUT") {
        try {
            const product = await Product.findByIdAndUpdate(id, req.body, {
                new: true
            })
            res.status(200).json(product)
        } catch (error) {
            res.status(500).json(error)
        }
    }

    // Get one product.
    if (method === "GET") {
        try {
            const product = await Product.findById(id)
            res.status(200).json(product)
        } catch (error) {
            // res.status(500).json(error)
        }
    }
}
