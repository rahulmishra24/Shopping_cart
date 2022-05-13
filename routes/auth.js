  const express = require('express');
  const router = express.Router()
  const controller = require('../controller/auth')
  const { checkSchema } = require("express-validator");
  const {userRegistervalidate,userLoginvalidate} = require('../validations/user.validation')

    router.post(
      "/auth/signup",
      checkSchema(userRegistervalidate),
      controller.signup
    );

    router.post("/auth/signin",checkSchema(userLoginvalidate),controller.signin);

    module.exports = router;
