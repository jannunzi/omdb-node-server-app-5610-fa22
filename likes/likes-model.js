import mongoose from "mongoose";
import likesSchema from "./likes-schema.js";

const likesModel = mongoose.model('LikesModel', likesSchema)

export default likesModel