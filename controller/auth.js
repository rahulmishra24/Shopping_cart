const User = require('../models/User')
const { validationResult } = require("express-validator");
const jwt = require('jsonwebtoken')


exports.signup = async (req, res) => {
    try {
        const errors = validationResult(req);


        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
            });
        }
        const user = await User.findOne({ email: req.body.email });
        if (user)
            return res.status(400).send("User already exist");

        const data = new User({
            username: req.body.username,
            email: req.body.email,
        })

        data.password = await data.setpassword(req.body.password);
        user1 = await data.save()
        console.log("user", user1)
        res.status(200).json(user1);
    } catch (err) {
        console.log(err)
        res.status(400).json(err);
    }

}

exports.signin = async (req, res) => {
    try {
        const errors = validationResult(req);

        
        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
            });
        }
        const user = await User.findOne({ email: req.body.email });
        if (!user)
            res.status(400).send("Invalid email");
        if (await user.checkpassword(req.body.password, user.password)) {
            const accessToken = jwt.sign({ id: user._id }, process.env.SECRET_KEY, { expiresIn: '1h' })
            const { password, ...others } = user._doc
            res.status(200).json({ "accessToken": accessToken, others })
        }
        else
            res.status(400).json({ "accessToken": null, "message": "Invalid Password" })
    }
    catch (err) {
        console.log(err)
        res.status(500).send(err);
    }
}
