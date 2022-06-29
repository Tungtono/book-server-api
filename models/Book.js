import mongoose from "mongoose";

const BookSchema = mongoose.Schema({
    id: String,
    title: String,
    author: String,
    year_written: String,
    edition: String,
    price: String,
    coverimg: String
}, { timestamps: true });

export default mongoose.model('Book', BookSchema);