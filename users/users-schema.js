import mongoose from "mongoose";

const usersSchema = mongoose.Schema({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    firstName: String,
    lastName: String,
    email: String,
    dob: Date,
    type: {type: String, enum: ['ACTOR', 'CRITIC', 'FAN', 'DIRECTOR']},
    married: Boolean
}, {collection: 'users'})

export default usersSchema