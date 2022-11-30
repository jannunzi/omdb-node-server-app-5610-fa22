import reviewsModel from "./reviews-model.js";

export const createReview = (review) =>
    reviewsModel.create(review)

export const findReviewsByMovie = (imdbID) =>
    reviewsModel
        .find({imdbID})
        .populate('author')
        .exec()

export const findReviewsByAuthor = (author) =>
    reviewsModel.find({author})