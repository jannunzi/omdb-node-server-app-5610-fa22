import likesModel from "./likes-model.js";

export const userLikesMovie = async (uid, mid) => {
    return await likesModel.create({user: uid, movie: mid})
}
export const userUnlikesMovie = async(uid, mid) => {
    return await likesModel.deleteOne({user: uid, movie: mid})
}
export const findMoviesLikedByUser = async(uid) => {
    return await likesModel
        .find({user: uid}, {user: false})
        .populate('movie', 'title')
        .exec()
}
export const findUsersThatLikeMovie = async(mid) => {
    return await likesModel.find({movie: mid}, {movie: false})
        .populate('user', 'username')
        .exec()
}
export const findAllLikes = async () =>
    await likesModel.find()
