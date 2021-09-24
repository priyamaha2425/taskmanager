const Tasks = require("../../models/task")

const getTask = (req) => {
    try{
        return Tasks.find().populate("owner_id");
    } catch (e){
        return e;
    }
}

const getTaskById = (req) => {
    try {
        return Tasks.findById(req.params.id);
    } catch (e) {
        return e;
    }
}

const saveTask = (req) => {
    try{
        var task = new Tasks(req.body)
      return  task.save();
    } catch (e){
        return e;
    }
}

const updTask = (req) => {
    try{
       return Tasks.findByIdAndUpdate(req.params.id, req.body);
        
    } catch (e){
        return e;
    }
}

const delTask = (req) => {
    try{
        return Tasks.findByIdAndDelete(req.params.id);
    } catch (e){
        return e;
    }
}

module.exports = {
    getTask,
    getTaskById,
    saveTask,
    updTask,
    delTask
}