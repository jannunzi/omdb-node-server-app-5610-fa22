import mongoose from "mongoose";

const usersSchema = mongoose.Schema({
    username: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    email: String,
    firstName: String,
    lastName: String,
    role: {type: String, enum: ['ADMIN', 'FACULTY', 'STUDENT']}
}, {collection: 'users'})

export default usersSchema