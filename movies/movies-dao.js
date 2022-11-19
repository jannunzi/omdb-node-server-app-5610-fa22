import moviesModel from "./movies-model.js";

export const findAllMovies = async () => {
    const movies = await moviesModel.find()
    return movies
}
export const createMovie = async (movie) => {
    const actualInsertedMovie = await moviesModel.create(movie)
    return actualInsertedMovie
}
export const deleteMovie = async (mid) => {
    const status = await moviesModel.deleteOne({_id: mid})
    return status
}
export const updateMovie = () => {}