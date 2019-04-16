const User = require("../database/models/User");

module.exports = (req, res, next) => {

    //fetch user from db
    //verify user
    //if valid permit request
    //else redirect

    User.findById(req.session.userId, (error, user) => {

        if (error || !user) {
            return res.redirect("/")
        }
        next()
    });

}