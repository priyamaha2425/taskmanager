const apiRoutes = function(app){
    //api routes
    app.use("/api/users", require("./api/users"));
    app.use("/api/tasks", require("./api/tasks"));

    //hbs routes
    app.use("/users", require("./hbsRoutes/users"));
    app.use("/tasks", require("./hbsRoutes/tasks"));
}
module.exports = {
    apiRoutes 
}