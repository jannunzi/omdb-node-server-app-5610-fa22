import mongoose from "mongoose";
import moviesSchema from "./movies-schema.js";

const moviesModel = mongoose.model('MovieModel', moviesSchema)

export default moviesModel