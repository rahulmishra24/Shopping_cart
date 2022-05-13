const jwt = require('jsonwebtoken')

const verifyToken = async(req,res,next)=>{
    try{
    const accessToken = req.headers["x-access-token"]
    //console.log(accessToken)
    if(!accessToken)
    return res.status(400).send("No Tokens Provided")

    const decode = await jwt.verify(accessToken,process.env.SECRET_KEY)
    console.log(decode)
    req.decode = decode
    next();
    }
    catch(err)
    {
        console.log(err);
      res.status(400).send("Invalid Token")
    }
}

// const verifyTokenAndAuthorization = async(req,res,next) =>{
//      verifyToken(req,res,()=>{
//        if(req.decode.id == req.body)
//      })
// }
module.exports = {verifyToken}