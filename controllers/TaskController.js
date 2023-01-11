import TaskModel from "../model/TaskModel.js"

async function getAllTasks(req, res){
    try {
        TaskModel.find()
            .then((tasks) => {
                res.render('index', { tasks, task: null, taskDelete: null })
            })
            .catch(err => {
                res.render('index', {erro: err.message})
            })
    } catch (err) {
        res.render('index', { erro: err.message })
    }
}

async function createTask(req, res){
    const { task } = req.body

    if(!task){
        return res.render('index',{ erro: "Informações invalidas!" })
    }

    try {
        TaskModel.create({task})
            .then(() => {
                res.redirect('/')
            }).catch(error => {
                res.render('index', { error })
            })
    } catch (err) {
        res.render('index', { erro: err.message })
    }
}
async function getById(req, res){
    const { id } = req.params
    const { method } = req.params

    try {
        TaskModel.findById(id)
            .then(task => {
                TaskModel.find()
                    .then(tasks => {
                        if(method == 'update'){
                            res.render('index', { task, tasks, taskDelete: null })
                        }else{
                            res.render('index', { task:null, tasks, taskDelete: task })
                        }
                    })
            }).catch(error => {
                res.render('index', { error })
            })
    } catch (error) {
        res.render('index', { error })
    }
}

async function updateOne(req, res){
    const { task } = req.body

    try {
        TaskModel.updateOne({ _id: req.params.id }, {task})
            .then(() => {
                res.redirect('/')
            })
    } catch (error) {
        res.render('index', { error })
    }
}

async function deleteOne(req, res){
    const { id } = req.params

    try {
        await TaskModel.findByIdAndDelete(id)
        res.redirect('/')
    } catch (error) {
        res.render('index', { error })
    }
}

export {
    getAllTasks,
    createTask,
    getById,
    updateOne,
    deleteOne
}