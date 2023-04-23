module.exports = (app) => {

    app.route("/users")
        .get(app.api.users.list)
        .post(app.api.users.save)
        
}