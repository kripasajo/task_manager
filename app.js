const express = require('express');
const app = express();

//routes

app.get('/hello', (req , res) =>{
    res.send('Task Manager App')
})

//app.get('/api/v1/tasks')          -get all the tasks



const port = 3000


