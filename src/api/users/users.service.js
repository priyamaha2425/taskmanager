const Users = require("../../models/user")

const getUser = (req) => {
    try {
        return Users.find();
    } catch (e) {
        return e;
    }
}

const getUsersById = (req) => {
    try {
        return Users.findById(req.params.id);
    } catch (e) {
        return e;
    }
}

const saveUser = (req) => {
    try {
        var user = new Users(req.body);
        return user.save()

    } catch (e) {
        return e;
    }

}

const updUser = (req) => {
    try {
        return Users.findByIdAndUpdate(req.params.id, req.body);

    } catch (e) {
        return e;
    }

}

const deleUser = (req) => {
    try {
        return Users.findByIdAndDelete(req.params.id);
    } catch (e) {
        return e;
    }

}

module.exports = {
    getUser,
    getUsersById,
    saveUser,
    updUser,
    deleUser
}