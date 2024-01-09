/*let alllis = document.querySelectorAll("ul li");

alllis.forEach(function(elments){
elments.onclick=function(){
alllis.forEach(function(elments){
elments.classList.remove("active")
    })
this.classList.add("active")    }
})*/

let lis = document.querySelectorAll(".color li")


lis.forEach(function(ele){
    ele.onclick = function(){
        lis.forEach(function(ele){
            ele.classList.remove("active")
        })
        this.classList.add("active")
    }
})




let lis2 = document.querySelectorAll(".color2 li")


lis2.forEach(function(ele){
    ele.onclick = function(){
        lis2.forEach(function(ele){
            ele.classList.remove("active2")
        })
        this.classList.add("active2")
    }
})


let lis3 = document.querySelectorAll(".color3 li")


lis3.forEach(function(ele){
    ele.onclick = function(){
        lis3.forEach(function(ele){
            ele.classList.remove("active3")
        })
        this.classList.add("active3")
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



let contactus=document.querySelector(".cont")
let media=document.querySelector("footer")


contactus.onclick=function(){
  window.scrollTo({
       top:1000,
        left:0,
        behavior:"smooth"
    })
}




















/*let sev = document.querySelectorAll(".sev li")


sev.forEach(function(ele){
    ele.onclick = function(){
       sev.forEach(function(ele){
            ele.classList.remove("")
        })
        this.classList.add("")
    }
})

*/














/*let img= document.querySelectorAll("ul li")


lis.forEach(function(ele){
    ele.onclick = function(){
        lis.forEach(function(ele){
            ele.classList.remove("active")
        })
        this.classList.add("active")
    }
})*/