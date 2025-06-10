const mongoose = require('mongoose')

const connectionString =
 'mongodb+srv://kripasajo:%23kripa%402005@taskmanager.ehxtbgz.mongodb.net/?retryWrites=true&w=majority&appName=TaskManager'

 mongoose
    .connect(connectionString)
    .then(() => console.log('Connected to db....')) 
    .catch((err) => console.log(err))

