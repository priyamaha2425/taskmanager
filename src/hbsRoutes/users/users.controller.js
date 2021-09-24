const usersService = require("../../api/users/users.service") 

const getUsers = function(req, res){
    usersService.getUser(req).then(function(users){
        console.log(users)
        res.render("users", {
            title: "Users",
            users: users
        })
    }).catch(function(error){
        res.status(500).send("Unable to render");
    })
   
}

const addUser = function(req, res){
    res.render("addUser", {
        title: "ADD USER"
    });
}

const editUser = function(req, res){
    usersService.getUsersById(req).then(function(user){
        res.render("addUser", {
            title: "EDIT USER",
            user
        })
    }).catch(function(error){
        res.status(500).send("Unable to render");
    })
}

module.exports = {
    getUsers,
    addUser,
    editUser
}