function validate() 
{
    var nme = document.getElementsByName("user")[0].value;
    var pwd = document.getElementsByName("pass")[0].value;
    var cpwd = document.getElementsByName("cpass")[0].value;
    var eml = document.getElementsByName("mail")[0].value;
    var phn = document.getElementsByName("number")[0].value;
    var patt = /^\d{10}$/;
    var chkphn = patt.test(phn);
    console.log(chkphn);
    var num = /^\[0-9]$/;
    console.log(num);
    var chk = /^\s$/;
    var chknme = chk.test(nme);
    console.log(chknme);
    console.log("In func");
    {
        if (nme == "") 
        {
            alert("Username Required!");
        }
        else if(chknme == num)
        {
            alert("Number is Not allowed in Name!");
        }
        else if (pwd == "") 
        {
            alert("Password Required!");
        }
        else if(pwd != cpwd)
        {
            alert("Password must be same!");
        }
        else if (eml == "") 
        {
            alert("E-mail Required!");
        }
        else if (phn == "") 
        {
            alert("Mobile Number Required!");
        }
        else if (chkphn == false) 
        {
            alert("Please enter Valid Number!");
        }
        else 
        {
            window.location.href = "./Login.html";
            alert("Registered Successfully");
        }
    }
}