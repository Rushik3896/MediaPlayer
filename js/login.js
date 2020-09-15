function display() 
{
    var nme = document.getElementsByName("user")[0].value;
    var pwd = document.getElementsByName("pass")[0].value;
    if (nme == "") 
    {
        alert("Username Required!");
    }
    else if (pwd == "") 
    {
        alert("Password Required!");
    }
    else 
    {
        alert("Login Successfully");
    }
}