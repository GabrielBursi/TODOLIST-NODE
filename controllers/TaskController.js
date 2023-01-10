import TaskModel from "../model/TaskModel.js"

async function getAllTasks(req, res){
    try {
        TaskModel.find()
            .then((tasks) => {
                res.render('index',{tasks})
            })
            .catch(err => {
                res.status(500).render('index', {erro: err.message})
            })
    } catch (err) {
        res.status(500).render('index', { erro: err.message })
    }
}

async function createTask(req, res){
    const { task } = req.body

    if(!task){
        return res.render('index',{ erro: "Informações invalidas!" })
    }

    try {
        await TaskModel.create({task}).then(() => {
            res.redirect('/')
        })
    } catch (err) {
        res.status(500).render('index', { erro: err.message })
    }
}

export {
    getAllTasks,
    createTask,
}