module.exports = (req, res) => {

    // console.log(req.session.registrationErrors)

    // console.log(req.flash("data"))

    res.render('register', {

        errors: req.flash("registrationErrors"),
        data: req.flash("data")[0]
    })
}