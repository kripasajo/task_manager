const getAllTasks = (req , res) =>
{
    res.send('all items')
}

const createTask = (req , res) =>
{
    res.send('create a task')
}

const getTask = (req , res) =>
{
    res.send('get single task')
}

const updateTask = (req , res) =>
{
    res.send('Update task')
}

const deleteTask = (req , res) =>
{
    res.send('delete a task')
}



module.exports = {
    getAllTasks, createTask, updateTask , deleteTask, getTask
}