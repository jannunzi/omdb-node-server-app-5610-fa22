import mongoose from "mongoose";
import reviewsSchema from "./reviews-schema.js";

const reviewsModel = mongoose.model('ReviewModel', reviewsSchema)

export default reviewsModel