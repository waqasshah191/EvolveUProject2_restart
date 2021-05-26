import mongoose from 'mongoose'
const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true },
    category: String,
    bio_degradable: Boolean,
    sturdy: Boolean,
    repairable:Boolean,
    product_life: Number
})

export default mongoose.model('Product', ProductSchema)