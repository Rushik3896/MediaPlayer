function validate() 
{
    var nme = document.getElementsByName("user")[0].value;
    var accn = document.getElementsByName("accno")[0].value;
    var ifsc = document.getElementsByName("ifsc")[0].value;
    var brh = document.getElementsByName("branch")[0].value;
    var patt1 = /^\d{11}$/;
    var patt2 = /(^[A-Z]{4})([A-Z0-9]{6})/;
    var chkaccn = patt1.test(accn);
    var chkifsc = patt2.test(ifsc);
    console.log(chkaccn);
    console.log(chkifsc);
    console.log("In func");
    {
    if (nme == "") 
    {
        alert("Username Required!");
    }
    else if (accn == "") 
    {
        alert("Account Number Required!");
    }
    else if (ifsc == "") 
    {
        alert("IFSC code Required!");
    }
    else if (brh == "") 
    {
        alert("Branch name Required!");
    }
    else if (chkaccn == false) 
    {
        alert("Account number should be 11 digits!!");
    }
    else if(chkifsc == false)
    {
        alert("Enter Valid IFSC code!!");
    }
    else 
    {
        window.location.href = "./index.html";
        alert("Now use your VIP facilities.");
    }
  }
}