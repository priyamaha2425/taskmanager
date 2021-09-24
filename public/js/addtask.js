$(document).ready(function () {

    $("#userForm").submit(function (event) {
        event.preventDefault;
        var task = $("#task").val();
        var description = $("#description").val();
        var status = $("#status").val();
        var owner_id = $("#owner_id").val();
        if (!task ||!description || !status || !owner_id) {
            alert("Enter something");
            return;
        }
        var taskObj = {
            task,
            description,
            status,
            owner_id
        }
        $.ajax({
            url: '/api/tasks',
            type: 'POST',
            data: taskObj,
            success: function (result) {
                console.log(result);
                alert("created succesfully");
                location.href = "/tasks"

            },
            error: function (err) {
                console.log(err);
            }

        })
    })
})