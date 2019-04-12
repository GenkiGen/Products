const express = require('express')
const mongoose = require('mongoose')

const app = express()
const port = process.env.PORT || 3000

//Connect with mongodb
const connection_string = process.env.MONGO_URL || 'mongodb+srv://sudoer:Rm!t2012781357@cluster0-xqvxq.mongodb.net/test?retryWrites=true'
mongoose.connect(connection_string, { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', () => {
  console.log("Database error")
})
db.once('open', () => {
  console.log('Connection established')
})

app.use((req, resp) => {
  resp.status(400)
  resp.type("text/plain")
  resp.send("404 Not found")
})

app.listen(port, () => {
  console.log("Server started")
})