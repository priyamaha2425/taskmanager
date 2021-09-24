$(document).ready(function () {

    $("#userForm").submit(function (event) {
        event.preventDefault;
        var name = $("#name").val();
        var email = $("#email").val();
        var password = $("#password").val();
        if (!name || !email || !password) {
            alert("Enter something");
            return;
        }
        var userObj = {
            name,
            email,
            password
        }
        $.ajax({
            url: '/api/users',
            type: 'POST',
            data: userObj,
            success: function (result) {
                console.log(result);
                alert("created succesfully");
                location.href = "/users"

            },
            error: function (err) {
                console.log(err);
            }

        })
    })
})