const getAllTasks = (req , res) =>
{
    res.send('all items')
}

const createTask = (req , res) =>
{
    res.json(req.body)
}

const getTask = (req , res) =>
{
    res.json({id:req.params.id})
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