const auth = require('../ecommerce_app/routes/auth')
const user = require('../ecommerce_app/routes/user')
module.exports = (app)=>{

 app.use('/api',auth);
 app.use('/api',user);

}