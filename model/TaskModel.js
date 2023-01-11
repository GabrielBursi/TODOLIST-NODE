import mongoose from "mongoose";
const {Schema} = mongoose;

const task = new Schema({
    task: {
        type: String,
        require: true
    },
    check: {
        type: Boolean,
        default: false,
    },
    date: {
        type: Date,
        default: Date.now()
    }
})

const TaskModel = mongoose.model('tasks', task)

export default TaskModel
