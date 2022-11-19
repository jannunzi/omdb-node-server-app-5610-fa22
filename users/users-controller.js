import * as userDao from './users-dao.js'

const UsersController = (app) => {
    let currentUser = null

    const findAllUsers = async (req, res) => {
        const users = await userDao.findAllUsers()
        res.json(users)
    }
    const createUser = async (req, res) => {
        const newUser = req.body;
        const actualUser = await userDao.createUser(newUser)
        res.json(actualUser)
    }
    const updateUser = () => {}
    const deleteUser = () => {}

    const register = async (req, res) => {
        const user = req.body;
        if (!user.username) {
            res.sendStatus(503)
            return
        }
        const existingUser = await userDao.findUserByUsername(user.username)
        if(existingUser) {
            res.sendStatus(503)
            return
        }
        const newUser = userDao.createUser(user)
        currentUser = newUser
        res.json(newUser)
    }

    const login = async (req, res) => {
        const credentials = req.body
        const existingUser = await userDao.findUserByCredentials(credentials.username, credentials.password)
        if(existingUser) {
            currentUser = existingUser
            res.json(existingUser)
            return
        }
        else {
            res.sendStatus(503)
        }
    }

    const logout = (req, res) => {
        currentUser = null
        res.sendStatus(200)
    }

    const profile = (req, res) => {
        if (currentUser) {
            res.send(currentUser)
        } else {
            res.sendStatus(503)
        }
    }

    app.get('/users', findAllUsers)
    app.post('/users', createUser)
    app.put('/users/:uid', updateUser)
    app.delete('/users/:uid', deleteUser)

    app.post('/register')
    app.post('/login')
    app.post('/logout')
    app.post('/profile')
}

export default UsersController