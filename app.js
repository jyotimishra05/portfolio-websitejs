// let tablinks= document.querySelector("tab-title").document.querySelectorAll("tab-link");
let tablinks=document.getElementsByClassName("tab-link")
console.log(tablinks)
let tabcontents= document.getElementsByClassName("tab-content");

let skill = document.getElementById("skills")
console.log(skill)
let education = document.getElementById("education")
console.log(education)
let experience = document.getElementById("experience")

let sidemenu = document.getElementById("sidemenu")

function openmenu(){
    sidemenu.style.right="0";
    // sidemenu.style.display="none";

}
function closemenu(){
    sidemenu.style.right="-200px";

}
function opentab(tabname){
    
    


    for(let tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(let tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link")
    document.getElementById(tabname).classList.add("active-tab")
    // console.log(tabname)
    // console.log(skill)
    // if((tabname == skill) ||(tabname == education) || (tabname== experience) ){
    //     tabname.classList.add("avtive-tab")
    //     console.log("true")
    // }
    // else{
    //     console.log("false")
    // }
    
   
}