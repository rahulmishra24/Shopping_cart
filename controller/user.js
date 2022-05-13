const User = require('../models/User');
const { validationResult } = require("express-validator");

exports.updateUser = async (req, res) => {
    const { password, ...others } = req.body;
    try {

        const errors = validationResult(req);


        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
            });
        }
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            {
                $set: others
            },
            { new: true }
        );
        updatedUser.password = updatedUser.setpassword(password);
        return res.status(200).json(updatedUser);
    }
    catch (err) {
        res.status(500).send(err);
    }
}

exports.deleteUser = async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("User has been deleted...");
    } catch (err) {
        res.status(500).json(err);
    }
};

exports.getUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (user)
            res.status(200).json(user);
        else
            res.status(400).send("No data found with this id")
    } catch (err) {
        res.status(500).json(err);
    }
}
