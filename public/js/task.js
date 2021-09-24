$(document).ready(function(){

    $("#addBtn").click(function(){
        location.href="/tasks/add";
    })

    $("#editBtn").click(function () {
        var count = $(":checkbox:checked").length;
        if (count != 1) {
            alert("Select only one checkBox");
            return;
        }

        var all, checked;
        all = $("input:checkbox");
        checked = all.filter(":checked");

        var checkedIds = checked.map(function () {
            return this.id;
        });
        console.log(checkedIds[0]);
        location.href = `/tasks/edit/${checkedIds[0]}`

    })

    $("#deleteBtn").click(function () {

        var count = $(":checkbox:checked").length;
        if (count != 1) {
            alert("Select only one checkBox");
            return;
        }

        var check = confirm("Are you want to delete  ");
        if(!check){
            return;
        }

        var all, checked;
        all = $("input:checkbox");
        checked = all.filter(":checked");

        var checkedIds = checked.map(function () {
            return this.id;
        });

        $.ajax({
            url: `/api/tasks/${checkedIds[0]}`,
            type: 'DELETE',
            success: function (result) {
                console.log(result);
                alert("Deleted succesfully");
                location.href = "/tasks"

            },
            error: function (err) {
                console.log(err);
            }

        })
    })

})