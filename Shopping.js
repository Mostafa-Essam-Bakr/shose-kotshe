






/*let buton=document.querySelector(".btn");
    let frm2=document.querySelector(".frm2"); 


 buton.onclick=function(){

let frm=document.createElement("form");
frm.className="newfrm"
let myh=document.createElement("h3");


let DEL=document.createElement("button");
let textbtn=document.createTextNode("Delet");
DEL.appendChild(textbtn)


let valu=document.querySelector(".value").value;

let mytext=document.createTextNode(valu);

frm2.appendChild(frm)
frm.appendChild(myh)
frm.appendChild(DEL)
myh.appendChild(mytext)
document.form= frm



    







  //frm.style.display="block";




//window.localStorage.setItem("value",valu )




}*/


/*let frm2=document.querySelector(".frm2").clone   
let frm=document.createElement("form");
frm.style=frm2
let myh=document.createElement("h3");
let valu=document.querySelector(".value").value;

let mytext=document.createTextNode(valu);

frm.appendChild(myh)
myh.appendChild(mytext)
document.body.appendChild(frm)*/


    
          //  let frm2=document.querySelector(".frm2"); 

   


    let bton1 = document.querySelectorAll(".imgs1 li  ");

   


bton1.forEach(function(ele){
    ele.onclick=function(){  
          let frm2=document.querySelector(".frm2"); 
              let bton = document.querySelectorAll(".imgs1 img");


        let frm=document.createElement("form");
        frm.className="newfrm";
        let DEL=document.createElement("button");
        let textbtn=document.createTextNode("Delet");
        DEL.appendChild(textbtn)
        DEL.className="newbtn"
        let btnlll=document.querySelector(".btnlii")
        btnlll.style.display="none"




        frm2.appendChild(frm);

        frm.appendChild(ele.cloneNode(true));
        frm.appendChild(DEL);

        DEL.onclick=function(){
            frm2.removeChild(frm)
}
      




    }
})
  












let fixli=document.querySelector(".pos")

window.onscroll = function(){
    if (window.scrollY >= 400){
fixli.style.display="block"
    }else {
        fixli.style.display="none"

    }
}


let shnav=document.querySelector(".nav2");
window.onscroll = function(){
    if (window.scrollY >= 100){
shnav.style.display="flex";
    }else {
        shnav.style.display="none"

    }
}


/*let nav1=document.querySelector(".nav")

window.onscroll = function(){
    if (window.scrollY >= 100){
nav1.style.display="block"
    }else {
        fixlis.style.display="block"

    }
}
*/




let contactus=document.querySelector(".cont")
let media=document.querySelector("footer")


contactus.onclick=function(){
  window.scrollTo({
       top:2000,
        left:0,
        behavior:"smooth"
    })
}


let media2=document.querySelector(".uperr")


media2.onclick=function(){
  window.scrollTo({
       top:0,
        left:0,
        behavior:"smooth"
    })
}


let cho=document.querySelectorAll(".rt #chco");


cho.forEach(function(elem){
    elem.onclick=function(){
        elem.style.color="#ffdd00";
        elem.style.transition=" .8s;";
    }
   


})





let lis4 = document.querySelectorAll(".lis4 ul")


lis4.forEach(function(ele){
    ele.onclick = function(){
        lis4.forEach(function(ele){
            ele.classList.remove("active4")
        })
        this.classList.add("active4")
    }
})
//
//let frm=document.createElement("form");
//frm.className="newfrm";
//let myh=document.createElement("h3");


/*let DEL=document.createElement("button");
let textbtn=document.createTextNode("Delet");
DEL.appendChild(textbtn)*/


//let valu=document.querySelector(".value").value;

//let mytext=document.createTextNode(valu);

//frm2.appendChild(frm);
//frm2.appendChild(bton.cloneNode(true));
//frm.appendChild(DEL);
//myh.appendChild(mytext)









  //frm.style.display="block";




//window.localStorage.setItem("value",valu )




