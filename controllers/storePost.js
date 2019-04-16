const path = require("path");
const cloudinary = require("cloudinary");
const Post = require("../database/models/Post");

module.exports = (req, res) => {

    const { image } = req.files
    const uploadPath = path.resolve(__dirname, '..', 'public/posts', image.name);

    image.mv(uploadPath, (error) => {

        cloudinary.v2.uploader.upload(uploadPath, (error, results) => {

            if (error) {
                return res.redirect("/")
            }

            Post.create({
                ...req.body,

                image: results.secure_url,
                author: req.session.userId

            }, (error, post) => {

                console.log(post);
                res.redirect("/");
            });

        });

    })
}