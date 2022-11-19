import * as movieDao from './movies-dao.js'


export const getMovies = () => movies;

const MoviesController = (app) => {

    const createMovie   = async (req, res) => {
        const movie = req.body
        // movie["_id"] = (new Date()).getTime() + ''
        // movie["likes"] = 0
        // movie["liked"] = false
        // movies.push(movie)
        const actualMovie = await movieDao.createMovie(movie)
        res.send(actualMovie)
    }
    const findAllMovies = async (req, res) => {
        const moviesInDatabase = await movieDao.findAllMovies()
        res.send(moviesInDatabase)
    }
    const updateMovie   = (req, res) => {
        const mid = req.params['mid']
        const movieUpdates = req.body
        const movieIndex = movies.findIndex(
            (m) => m._id === mid)
        movies[movieIndex] = {
            ...movies[movieIndex],
            ...movieUpdates
        }
        res.send(200)
    }
    const deleteMovie   = async (req, res) => {
        const mid = req.params['mid']
        const status = await movieDao.deleteMovie(mid)
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