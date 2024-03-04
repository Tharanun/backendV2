require('dotenv').config()

const cors = require("cors")
const express = require("express")
const app = express()
const auth_route = require("./routes/auth-route")
const authenticate = require('./middlewares/authenticate')
const productRoute = require('./routes/product-route')
const memberRoute = require('./routes/member-route')
const sellRoute = require('./routes/sell-route')

app.use(cors())
app.use(express.json())

app.use('/auth', auth_route)
app.use('/product', productRoute)
app.use('/member', memberRoute)
app.use('/sell', sellRoute)



const errorHandler = require("./middlewares/error")
app.use(errorHandler);

let port = process.env.PORT || 8000
app.listen(port, ()=> console.log("Server on Port :", port))
