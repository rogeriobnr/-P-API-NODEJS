module.exports = (app) => {

    app.route("/users")
        .get(app.api.users.list)
        .post(app.api.users.save)

    app.route("/categories")
        .get(app.api.categories.read)
        .post(app.api.categories.save)


} 