import express from 'express'
import cors from 'cors'
import session from 'express-session'
import MoviesController from "./movies/movies-controller.js";
import LikesController from "./likes/likes-controller.js";
import UsersController from "./users/users-controller.js";
import SessionController from "./session-controller.js";
import ReviewsController from "./reviews/reviews-controller.js";
import mongoose from "mongoose";
import FollowsController from "./follows/follows-controller.js";

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
app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}))
app.use(session({
    secret: 'should be an environment variable',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}))
app.use(express.json())
MoviesController(app)
LikesController(app)
UsersController(app)
SessionController(app)
ReviewsController(app)
FollowsController(app)
app.listen(4000)