function validatEemail() {
    var x = document.myform.email.value;
    var atposition = x.indexOf("@");
    var dotposition = x.lastIndexOf(".");
    if (atposition < 1 || dotposition < (atposition + 2)
        || (dotposition + 2) >= x.length) {
        alert("Please enter a valid e-mail address.");
        return false;
    }
}

function validateform() {
    var name = document.myform.name.value;
    var phone = document.myform.phone.value;

    if (name == null || name == "") {
        alert("Name can't be blank");
        return false;
    } else if (phone.length < 6) {
        alert("Numbers must be at least 9 characters long.");
        return false;
    }
}