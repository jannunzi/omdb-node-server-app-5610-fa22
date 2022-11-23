const SessionController = (app) => {
    const setSession = (req, res) => {
        const name = req.params.name;
        const value = req.params.value
        req.session[name] = value
        res.send(req.session)
    }
    const getSession = (req, res) => {
        const name = req.params.name
        const value = req.session[name]
        res.send(value)
    }

    app.get('/session/set/:name/:value', setSession)
    app.get('/session/get/:name', getSession)
}

export default SessionController