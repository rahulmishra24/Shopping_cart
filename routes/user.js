const express = require('express');
const router = express.Router()
const controller = require('../controller/user')
const {verifyToken} = require('../middleware/verifyToken')
const { checkSchema } = require("express-validator");

const {userRegistervalidate,userLoginvalidate,userUpdatevalidate} = require('../validations/user.validation')

router.put("/:id",verifyToken,checkSchema(userUpdatevalidate),controller.updateUser);
router.delete("/:id",verifyToken,controller.deleteUser);
router.get("/:id",verifyToken,controller.getUser);

module.exports = router