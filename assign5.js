

function pswChk()
{
    var psw = document.getElementById("passw");
    var valid = true;
    var error = "";
    var lower = false;
    var upper = false;
    var no = false;
    var len = true;

    if(psw.value.length < 8)
    {
        len = false;
        valid = false;
        error = "Must be longer than 8 characters!";
    }

    for(var i = 0; i < psw.value.length; i++)
    {
        if(psw.value[i] >= 'a' && psw.value[i] <= 'z')
        {
            lower = true;
        }
        if(psw.value[i] >= 'A' && psw.value[i] <= 'Z')
        {
            upper = true;
        }
        if(psw.value[i] >= 0 && psw.value[i] <= 9)
        {
            no = true;
        }
    }

        if(!lower && len )
        {
            error = " Must contain a lower case letter!"
            valid = false;
        }

        if(!upper && len)
        {
            error = " Must contain an upper case letter!"
            valid = false;
        }

        if(!no && len)
        {
            error = " Must contain a number!"
            valid = false;
        }

    psw.parentNode.removeChild(psw.nextSibling);
    

    if (!valid)
    {
        var mssg = document.createElement("p");
        mssg.setAttribute("class", "error");
        mssg.innerHTML = error;
        psw.parentNode.insertBefore(mssg, psw.nextSibling);
    }

    else{
        var br = document.createElement("br");
        psw.parentNode.insertBefore(br, psw.nextSibling);
       
    }

}

function matchChk()
{
    var og = document.getElementById("passw");
    var re = document.getElementById("passw2");
    
    re.parentNode.removeChild(re.nextSibling);

    if(og.value != re.value)
    {
        var mssg = document.createElement("p");
        mssg.setAttribute("class", "error");
        mssg.innerHTML = "X Passwords do not match!";
        re.parentNode.insertBefore(mssg, re.nextSibling);
    }
    else{
        var br = document.createElement("br");
        re.parentNode.insertBefore(br, re.nextSibling);
       
    }
}

function NameChk(event)
{
    var nam = event.target;
    var valid = true;
    var error = "";
    var invalid_char = 0;
    var j = 0;

    for(var i = 0; i < nam.value.length; i++ )
    {
        if((nam.value[i] >= 'a' && nam.value[i] <= 'z' || nam.value[i] >= 'A' && nam.value[i] <= 'Z') || nam.value[i] == '-' || nam.value[i]== '\'')
        {
            j++;
        }
        else
        {
            valid = false;
            error= "X Only alphabetic characters, hyphens (-), and apostrophes (') allowed!";
            invalid_char++;
        }
    }

    
        nam.parentNode.removeChild(nam.nextSibling);
        
   
    
    if(j == 0 && invalid_char == 0)
    {
        valid = false;
        error = "X Must contain at least one character!";
    }

    if (!valid)
    {
        var message = document.createElement("p");
        message.setAttribute("class", "error");
        message.innerHTML = error;
        nam.parentNode.insertBefore(message, nam.nextSibling);
    }
    else{
        var br = document.createElement("br");
        nam.parentNode.insertBefore(br, nam.nextSibling);
       
    }

    
}

function NumChk(){
    var valid = true;
    var num = document.getElementById("phone");
    var error = "";
    var zero = 0;

    if(num.value == "")
    {
       valid = false;
        error= "X This field cannot be left empty!";
    }

    if(num.value[0] == 0 || num.value[1] == 0 || num.value[2]== 0)
    {
        valid = false;
        error = "X The area code cannot be zero!"
    }
    if(num.value[3] != "-" || num.value[7] != "-")
    {
        valid = false;
        error = "X Incorrect format!"
    }
    
    if(num.value[0] == 0 && num.value[1] == 0 && num.value[2] == 0 
        && num.value[4] == 0 && num.value[5] == 0 && num.value[6] == 0
        && num.value[8] == 0 && num.value[9] == 0 && num.value[10] == 0 
        && num.value[11] == 0)
        {
            valid = false;
            error = "X Phone number cannot be all zeroes!";
            zero++;
        }


   if((!(num.value[0] >= 0) || !(num.value[1] >= 0) || !(num.value[2] >= 0) 
    || !(num.value[4] >= 0) || !(num.value[5] >= 0)|| !(num.value[6] >= 0)
    || !(num.value[8] >= 0) || !(num.value[9] >= 0) || !(num.value[10] >= 0) 
    || !(num.value[11] >= 0)) && zero == 0)
    {
        valid = false;
        error = "X Only numbers must go in between the dashes!"
    }
 

     num.parentNode.removeChild(num.nextSibling);    

    if (!valid)
    {
        var mssg = document.createElement("p");
        mssg.setAttribute("class", "error");
        mssg.innerHTML = error;
        num.parentNode.insertBefore(mssg, num.nextSibling);
    }
    else{
        var br = document.createElement("br");
        num.parentNode.insertBefore(br, num.nextSibling);
       
    }

}


