const express = require('express');
const app = express();
const userRoute = require('./auth/routes/user.route');
const pageNotFound = require('./auth/error-handlers/404');
const errorHandler= require('./auth/error-handlers/500')





app.use(express.json());


app.use(userRoute)

app.get('/',(req,res)=>{
    res.send('Hello to the main page')
})
app.use(errorHandler);
app.use('*',pageNotFound)
function start(port){
app.listen(port,()=>{
    console.log(`The website is up and listen on port ${port}`);
})}
module.exports= {
    app : app,
    start : start,
}