import moviesModel from "./movies-model.js";

export const createMovie = async (movie) => {
    const actualMovie = await moviesModel.create(movie)
    return actualMovie
}

export const findAllMovies = async () => {
    const allMovies = await moviesModel.find()
    return allMovies
}

export const deleteMovie = async (mid) => {
    const status = await moviesModel.deleteOne({_id: mid})
    return status
}
export const updateMovie = async (mid, movieUpdates) => {
    const status = moviesModel.updateOne(
        {_id: mid},
        {$set: movieUpdates})
    return status
}