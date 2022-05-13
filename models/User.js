const mongoose = require('mongoose');
const bcrypt = require('bcrypt')
const UserSchema = new mongoose.Schema({
    username : {
        type: String, required: true
    },
    email : {
        type: String, required :true, unique: true 
    },
    password : {
        type: String, required :true
    },
   
    // isAdmin : {
    //     type: Boolean,
    //     default: false
    // },
},{
    timestamps : true
})


UserSchema.methods.setpassword = async (passw) =>{
    console.log("Original password",passw)
    const salt =  await bcrypt.genSalt(10);
    const hash =  await bcrypt.hash(passw,salt);
    console.log("hash",hash);
    return hash

}

UserSchema.methods.checkpassword = async (password,hash) => {
    const check = await bcrypt.compare(password,hash);
    return check
}
module.exports = mongoose.model("User",UserSchema);