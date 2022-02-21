function validate()
{
    var username = document.getElementById("Username").value;
    var password = document.getElementById("Password").value;
    if(username == "admin" && password == "grp8")
    {
        alert("Login Successful");
        return false;
    }
    else
    {
        alert("Invalid Credentials");
    }
}