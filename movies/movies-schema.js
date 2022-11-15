import mongoose from "mongoose";

const moviesSchema = mongoose.Schema({
    title: {type: String, required: true},
    liked: {type: Boolean, default: false},
    likes: {type: Number, default: 0}
}, {collection: "movies"})

export default moviesSchema