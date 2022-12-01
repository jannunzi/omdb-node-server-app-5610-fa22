import mongoose from "mongoose";
import followsSchema from "./follows-schema.js";

const followsModel = mongoose.model('FollowModel', followsSchema)

export default followsModel