import mongoose from "mongoose";
import express from 'express'
import MoviesController from "./movies/movies-controller.js";
import LikesController from "./likes/likes-controller.js";
import UsersController from "./users/users-controller.js";
import SessionController from "./session-controller.js";
import cors from 'cors'
import session from 'express-session'

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000,
    autoIndex: false,
    maxPoolSize: 10,
    socketTimeoutMS: 45000,
    family: 4
}

mongoose.connect('mongodb://localhost:27017/cs4550-fa22', options)

const app = express();
app.use(cors())
app.use(session({
    secret: 'colud be anything',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}))
app.use(express.json())
MoviesController(app)
LikesController(app)
UsersController(app)
SessionController(app)
app.listen(4000)