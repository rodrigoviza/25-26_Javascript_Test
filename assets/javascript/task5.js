/* Put code for the task below */

function FillName(){
    if(document.getElementById("fullName").value === ""){
        document.getElementById("fullName").style.backgroundColor="red";
    }
    else{
        document.getElementById("fullName").style.backgroundColor="green";
    }
}

function FillAddress(){
    if(document.getElementById("address").value === ""){
        document.getElementById("address").style.backgroundColor="red";
    }
    else{
        document.getElementById("address").style.backgroundColor="green";
    }
}

function FillPhone(){
    if(document.getElementById("phoneNumber").value === ""){
        document.getElementById("phoneNumber").style.backgroundColor="red";
    }
    else{
        document.getElementById("phoneNumber").style.backgroundColor="green";
    }
}

function FillEmail(){
    if(document.getElementById("emailAddress").value === ""){
        document.getElementById("emailAddress").style.backgroundColor="red";
    }
    else{
        document.getElementById("emailAddress").style.backgroundColor="green";
    }
}
