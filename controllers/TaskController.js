import TaskModel from "../model/TaskModel.js"

let message = ''
let type = ''

async function getAllTasks(req, res){
    try {
        setTimeout(() => {
            message = ''
        }, 5000)
        await TaskModel.find()
            .then((tasks) => {
                res.render('index', { tasks, task: null, taskDelete: null, message, type })
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
        message = "Insira um texto antes de adicionar"
        type = 'danger'
        return res.redirect('/')
    }

    try {
        await TaskModel.create({task})
            .then(() => {
                message = 'Tarefa criada com sucesso'
                type='success'
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
                            res.render('index', { task, tasks, taskDelete: null, message, type })
                        }else{
                            res.render('index', { task:null, tasks, taskDelete: task, message, type })
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
        await TaskModel.updateOne({ _id: req.params.id }, {task})
            .then(() => {
                message = 'Tarefa editada com sucesso'
                type = 'success'
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
        message = 'Tarefa apagada com sucesso'
        type = 'success'
        res.redirect('/')
    } catch (error) {
        res.render('index', { error })
    }
}

async function checkTask(req, res){
    const { id } = req.params

    try {
        await TaskModel.findOne({_id: id})
            .then(task => {
                task.check = !task.check
                TaskModel.updateOne({_id: id}, task)
                    .then(() => {
                        res.redirect('/')
                    })
            }).catch(error => {
                res.render('index', { error })
            })
    } catch (error) {
        res.render('index', { error })
    }
}

export {
    getAllTasks,
    createTask,
    getById,
    updateOne,
    deleteOne,
    checkTask
}