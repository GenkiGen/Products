const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

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

//Use cors
const cors = require('cors')
app.use(cors())

//Use body parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

//Routes
const product_router = require('./routes/product.route')
app.use('/products', product_router)

const product_type_router = require('./routes/productType.route')
app.use('/productTypes', product_type_router)

//Errors
app.use((req, resp) => {
  resp.status(400)
  resp.type("text/plain")
  resp.send("404 Not found")
})

app.listen(port, () => {
  console.log("Server started")
})