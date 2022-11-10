export let movies = [
    {
        _id: '123',
        title: 'Avatar'
    },
    {
        _id: '234',
        title: 'Terminator'
    },
    {
        _id: '345',
        title: 'Aliens'
    },
    {
        _id: '456',
        title: 'Titanic'
    },
]

export const getMovies = () => movies;

const MoviesController = (app) => {

    const createMovie   = (req, res) => {
        const movie = req.body
        movie["_id"] = (new Date()).getTime() + ''
        movie["likes"] = 0
        movie["liked"] = false
        movies.push(movie)
        res.send(movie)
    }
    const findAllMovies = (req, res) => {
        res.send(movies)
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
    const deleteMovie   = (req, res) => {
        const mid = req.params['mid']
        movies = movies.filter(
            (m) => m._id !== mid)
        res.send(200)
    }

    app.post  ('/movies', createMovie)
    app.get   ('/movies', findAllMovies)
    app.put   ('/movies/:mid', updateMovie)
    app.delete('/movies/:mid', deleteMovie)
}

export default MoviesController;