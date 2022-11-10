import express from 'express'
import MoviesController from "./movies/movies-controller.js";
import LikesController from "./likes/likes-controller.js";
import cors from 'cors'
const app = express();
app.use(cors())
app.use(express.json())
MoviesController(app)
LikesController(app)
app.listen(4000)