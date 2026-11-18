$(document).ready(function() {

    $("#myForm").submit(function(event) {

        event.preventDefault();

        let name = $("#name").val();
        let email = $("#email").val();
        let course = $("#course").val();

        if (name == "" || email == "" || course == "") {

            $("#result").text("Please complete the form.");

        } else {

            $("#result").text("Registration Successful! Welcome " + name);

            $("#myForm")[0].reset();

        }

    });

});
