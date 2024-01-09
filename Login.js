
    

let username =  document.querySelector("[name='User name']")
let pass =  document.querySelector("[name='password']")


document.forms[0].onclick = function(e){
    let uservaled = false;
    let passvaled = false;

if (username.value !== "" & username.value.length <=10){
uservaled = true
}


if (pass.value !== "" & pass.value.length <=10){
    passvaled = true
}


    if (uservaled === false || passvaled === false){
        e.preventDefault();

    }
}




let log = document.querySelector(".log");

let form1=document.querySelector(".form1");

let form2=document.querySelector(".form2");



log.onclick = function(){
if (log.onclick){
    form1.style.display="block";
     form2.style.display="none";
     signin.style.opacity="50%";
     log.style.opacity="100%";
}

else{        

}

}


let signin=document.querySelector(".signin");


signin.onclick = function(){
    if (signin.onclick){
       form2.style.display="block";
        form1.style.display="none";
         log.style.opacity="50%";
         signin.style.opacity="100%";

    }
    else{        
    
    }
    
    }
    