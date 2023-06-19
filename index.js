require("dotenv").config();
const port = process.env.PORT;
const app = require('./src/server')
const { db } = require('./src/auth/models/index')

db.sync()
  .then(()=>{
app.start(port);
})