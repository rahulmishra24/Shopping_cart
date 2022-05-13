const userRegistervalidate = {
    username: {
      exists: {
        errorMessage: "User name is required",
        options: { checkFalsy: true },
      },
      isString: { errorMessage: "User name should be string" },
    },
    password: {
      exists: { errorMessage: "Password is required" },
      isString: { errorMessage: "password should be string" },
      isLength: {
        options: { min: 5 },
        errorMessage: "Password should be at least 5 characters",
      },
    },
    email: {
        exists : {errorMessage: "Email is required"},
      isEmail: { errorMessage: "Please provide valid email" },
    },
    
  };

  const userLoginvalidate = {
   
    password: {
      exists: { errorMessage: "Password is required" },
      isString: { errorMessage: "password should be string" },
      isLength: {
        options: { min: 5 },
        errorMessage: "Password should be at least 5 characters",
      },
    },
    email: {
        exists : {errorMessage: "Email is required"},
      isEmail: { errorMessage: "Please provide valid email" },
    },
    
  };


  const userUpdatevalidate = {
    username: {
      optional:true,
      isString: { errorMessage: "User name should be string" },
    },
    password: {
      optional:true,
      isString: { errorMessage: "password should be string" },
      isLength: {
        options: { min: 5 },
        errorMessage: "Password should be at least 5 characters",
      },
    },
    email: {
        optional:true,
      isEmail: { errorMessage: "Please provide valid email" },
    },
    
  };


  module.exports = {userRegistervalidate,userLoginvalidate,userUpdatevalidate}