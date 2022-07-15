const express = require('express');
require('dotenv').config()
require('colors')
const cors = require('cors')
const app = express()
const port = process.env.PORT

const { errorHandler } = require('./middlewares/errorMiddleware')
const { logRequest } = require('./middlewares/logRequestMiddleware')
const client = require('./routes/contactRoutes')
const projects = require('./routes/portfolioRoutes')

app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use(cors())

//middlewares
app.use(errorHandler)
  
//log request
app.use(logRequest)

//routes
app.use('/contact', client)
app.use('/portfolio', projects)
// app.use('/about', resume)
app.get('/about',(req, res)=>{
    res.download("./data/ProsperResume.pdf")
})
//listen for requests
app.listen(port, ()=> console.log(`Server is running on Port ${port}`))