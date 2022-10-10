function validateform() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var type = document.getElementById("selection").value;

    if (name == null || name == "") {
        alert("Name can't be blank");
    }
    if (email == null || email == "") {
        alert("Email can't be blank.");
    }
    if (type == null || type == "") {
        alert("Type can't be blank.");
    }
}