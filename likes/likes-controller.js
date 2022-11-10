import {getMovies} from "../movies/movies-controller.js";
import users from "../users/users.js";

let likes = [
    {_id: '123', user: '111', movie: '123'},
    {_id: '234', user: '111', movie: '234'},
    {_id: '345', user: '222', movie: '345'},
    {_id: '456', user: '333', movie: '345'},
]

const LikesController = (app) => {
    const populate = (
        {
            rawResults, fieldToPopulate,
            sourceData, sourceField
        }) => {
        const populatedResults = rawResults.map((raw) => {
            const source = sourceData.find(source => source[sourceField] === raw[fieldToPopulate])
            return ({
                ...raw,
                [fieldToPopulate]: source
            })
        })
        return populatedResults
    }
    const userLikesMovie = (req, res) => {
        const uid = req.params.uid
        const mid = req.params.mid
        const newLike = {
            _id: (new Date()).getTime()+'',
            user: uid,
            movie: mid
        }
        likes.push(newLike)
        res.json(newLike)
    }
    const userUnlikesMovie = (req, res) => {
        const uid = req.params.uid
        const mid = req.params.mid
        likes = likes.filter((l) => l.user !== uid && l.movie !== mid)
        res.send(200)
    }
    const findAllLikes = (req, res) => {
        const populatedMovies = populate({
            rawResults: likes,
            fieldToPopulate: 'movie',
            sourceData: getMovies(),
            sourceField: '_id'
        })
        const populateUsers = populate({
            rawResults: populatedMovies,
            fieldToPopulate: 'user',
            sourceData: users,
            sourceField: '_id'
        })
        res.json(populateUsers)
    }
    const findMoviesLikedByUser = (req, res) => {
        const uid = req.params.uid
        const movies = likes.filter((like) => like.user === uid)
        const populatedMovies = populate({
            rawResults: movies,
            fieldToPopulate: 'movie',
            sourceData: getMovies(),
            sourceField: '_id'
        })
        res.json(populatedMovies)
    }
    const findUsersWhoLikedMovie = (req, res) => {
        const mid = req.params.mid
        const usersWhoLikeMovie = likes.filter((like) => like.movie === mid)
        const populateUsers = populate({
            rawResults: usersWhoLikeMovie,
            fieldToPopulate: 'user',
            sourceData: users,
            sourceField: '_id'
        })
        res.json(populateUsers)
    }

    app.post('/users/:uid/likes/:mid', userLikesMovie)
    app.delete('/users/:uid/likes/:mid', userUnlikesMovie)
    app.get('/likes', findAllLikes)
    app.get('/users/:uid/likes', findMoviesLikedByUser)
    app.get('/movies/:mid/likes', findUsersWhoLikedMovie)
    // app.put(updateLike)
}

export default LikesController;