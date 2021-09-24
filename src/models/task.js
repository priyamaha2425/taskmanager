const mongoose = require('mongoose');
const taskSchema = new mongoose.Schema({
    task: {
        type: String,
        trim: true,
        required: true
    },
    description: {
        type: String,
        trim: true,
        required: true
    },
    status: {
        type: String,
        enum: ["COMPLETED", "INCOMPLETED"],
        trim: true,
        required: true
    },
    owner_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        trim: true,
        required: true
    }
})

const Tasks = mongoose.model("task", taskSchema);

module.exports = Tasks
