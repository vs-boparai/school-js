// Email-pattern
var email_pattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;

$(document).ready(function() {

    let validation = {
        email: false,
        name: false
    }

    let email_msg = document.getElementsByClassName('email_msg')[0];
    let name_msg = document.getElementsByClassName('firstname_msg')[0];

    let div_error = document.createElement("div");
    div_error.classList = "error text-red";

    let div_success = document.createElement("div");
    div_success.className = "text-green";

    // Email event
    $("#email").keyup(function () {
        if ($("#email").val() === '') {
            email_msg.appendChild(div_error);
            div_error.innerHTML = "";
            div_success.innerHTML = "";
            div_error.appendChild(
                document.createTextNode("Email field cannot be empty!")
            )
        } else if (!email_pattern.test($("#email").val())) {
            email_msg.appendChild(div_error);
            div_error.innerHTML = "";
            div_success.innerHTML = "";
            div_error.appendChild(
                document.createTextNode("Enter a valid Email id!")
            )
        } else {
            div_error.innerHTML = "";
            email_msg.appendChild(div_success);
            div_success.appendChild(
                document.createTextNode("Success")
            )
            div_success.style.paddingLeft = "10px";
            div_success.innerHTML = "Success";
        }
    });

    // Name event
    $("#firstname").keyup(function () {
        if ($("#firstname").val() === '') {
            name_msg.appendChild(div_error);
            div_error.innerHTML = "";
            div_success.innerHTML = "";
            div_error.appendChild(
                document.createTextNode("Firstname field cannot be empty!")
            )
        } else {
            div_error.innerHTML = "";
            name_msg.appendChild(div_success);
            div_success.appendChild(
                document.createTextNode("Success")
            )
            div_success.style.paddingLeft = "10px";
            div_success.innerHTML = "Success";
        }
    });

    $("#contact_submit").click(function(e) {
        
        if($("#email").val() != "") {
            validation.email = true;
        } else {
            $("#email").focus();
        }

        if($("#firstname").val() != "") {
            validation.name = true;
        } else {
            $("#firstname").focus();
        }

        if(validation.email === false || validation.name === false) {
            e.preventDefault();
        }
    });

});