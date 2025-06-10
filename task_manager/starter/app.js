require('./db/connect')

const express = require('express')
const app = express()
//import the routes and set up the middleware
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
require('dotenv').config()

//middleware
app.use(express.json())

//routes

app.get('/hello', (req , res) =>{
    res.send('Task Manager App')
})

app.use( '/api/v1/tasks' , tasks )


//app.get('/api/v1/tasks')          -get all the tasks
//app.post                           -create a new task
//app.get                            -cget a single task
//app.patch                          -pdate task
//app.delete                         -delete task



const port = 3000

const start = async() =>{
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(port , console.log(`Server is listing on port ${port}.....`))

        
    }
    catch(error) {
        console.log(error)
    }
}

start()