import * as moviesDao from "./movies-dao.js"
export let movies = [
    { _id: '123', "title": "Avatar" },
    { _id: '234', "title": "Terminator" },
    { _id: '345', "title": "Aliens" },
    {_id: '456', "title": "Titanic" },
]

export const getMovies = () => movies;

const MoviesController = (app) => {

    const createMovie   = async (req, res) => {
        const movie = req.body
        // movie["_id"] = (new Date()).getTime() + ''
        // movie["likes"] = 0
        // movie["liked"] = false
        // movies.push(movie)
        const actualMovie = await moviesDao.createMovie(movie)
        res.send(actualMovie)
    }
    const findAllMovies = async (req, res) => {
        const allMovies = await moviesDao.findAllMovies()
        res.send(allMovies)
    }
    const updateMovie   = async (req, res) => {
        const mid = req.params['mid']
        const movieUpdates = req.body
        const status = await moviesDao.updateMovie(mid, movieUpdates)
        // const movieIndex = movies.findIndex(
        //     (m) => m._id === mid)
        // movies[movieIndex] = {
        //     ...movies[movieIndex],
        //     ...movieUpdates
        // }
        res.send(status)
    }
    const deleteMovie   = async (req, res) => {
        const mid = req.params['mid']
        const status = moviesDao.deleteMovie(mid)
        // movies = movies.filter(
        //     (m) => m._id !== mid)
        res.send(status)
    }

    app.post  ('/movies', createMovie)
    app.get   ('/movies', findAllMovies)
    app.put   ('/movies/:mid', updateMovie)
    app.delete('/movies/:mid', deleteMovie)
}

export default MoviesController;