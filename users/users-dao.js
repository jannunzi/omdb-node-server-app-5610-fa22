import usersModel from "./users-model.js";

export const createUser = (user) =>
    usersModel.create(user)

export const register = async (user) => {
    const existingUser = await findByUsername(user.username)
    if (existingUser) {

    }
}

export const findAllUsers = () =>
    usersModel.find()

export const findUserById = (uid) =>
    usersModel.findById(uid)

export const findByUsername = (username) =>
    usersModel.findOne({username})

export const findByCredentials = (username, password) =>
    usersModel.findOne(
        {username, password},
        {password: false})

export const deleteUser = (uid) =>
    usersModel.deleteOne({_id: uid})

export const updateUser = (uid, userUpdates) =>
    usersModel.updateOne({_id: uid},
        {$set: userUpdates})
