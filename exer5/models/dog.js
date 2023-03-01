import mongoose from "mongoose"

const dogSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    breed: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    adopted: {
        type: Boolean,
        required: true
    },
    arrivalDate: {
        type: Date,
        required: true
    },
    adoptionDate: {
        type: Date,
        required: false
    },
    adoptionOwner: {
        type: String,
        required: false
    }
})

export default mongoose.model("Dog", dogSchema)