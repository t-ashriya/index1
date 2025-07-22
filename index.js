// <!-- /**
//  * WEB222 – Final Assessment
//  *
//  * I declare that this assignment is my own work in accordance with
//  * Seneca Academic Policy. No part of this assignment has been
//  * copied manually or electronically from any other source
//  * (including web sites) or distributed to other students.
//  *
//  * Please update the following with your information:
//  *
//  *      Name:       ASHRIYA TULADHAR
//  *      Student ID: 168*****
//  *      Date:       2022/12/07
//  */



var err= "";
function FormCheck(){
    err= "";
    var ret = false;
   
    
  
    PostalCheck();
    



    document.getElementById("errors").innerHTML = err;
    console.log(err);

    if(err==""){
        ret = true;
    }
    return ret;
}



function PostalCheck()
{
    var correct_pattern1= /^[A-Z][0-9][A-Z][0-9][A-Z][0-9]$/;
    var correct_pattern2= /^[A-Z][0-9][A-Z]\s[0-9][A-Z][0-9]$/;

    var user_postal = document.getElementById("postal").value;
    console.log(user_postal);

    if(correct_pattern1.test(user_postal) == false && correct_pattern2.test(user_postal) == false){
        err += "Wrong format, Correct Format should be M1M 1M1";
   }

}

function radio(val){
   

        var parent= document.getElementById("textarea1");
    

        if (val == "y") 
        {
            var ta = document.createElement("textarea");
            ta.id = "textArea1";
    
            parent.appendChild(ta);
        } 
          
        else 
        {
           parent.innerHTML="";
        }



    
}
