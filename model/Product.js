import mongoose from "mongoose"
import mongoose from "mongoose"

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        maxlength: 100
    },
    description: {
        type: String,
        required: true,
        maxlength: 500
    },
    img: {
        type: String,
        required: true
    },
    prices: {
        type: [Number],
        required: true
    }
})
export default mongoose.models.Product || mongoose.model("Product", ProductSchema)
