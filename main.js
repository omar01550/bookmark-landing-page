//show hidden nav;

let bars=document.querySelector(".fa-bars");
let navBar=document.querySelector("nav");
bars.addEventListener("click",function(){

    navBar.classList.toggle("show")

    if(navBar.classList.contains("show")){
       bars.style.color="white";
    }else{
       bars.style.color="black";
    }
})

//tabs

let tabLinks=document.querySelectorAll(".tab-link");
let tabs=document.querySelectorAll(".tab")


//tabLinks click
//get all tabs
// remove all active-tabs

//get target
//add class to target

tabLinks.forEach((link, i) => {
   link.onclick=function(){
      //get all Links
      tabLinks.forEach((link, i) => {
         link.classList.remove("active-link")
      });
   link.classList.add("active-link");
   //get all tabs
   tabs.forEach((tab, i) => {
      tab.classList.remove("active-tab");
   });

   let show=document.querySelector(link.dataset.target);
   show.classList.add("active-tab")

   }
});


// animation features tabs
let tabImg=document.querySelector(".tab img");
let tab_content=document.querySelector(".tab-content");
let tab=document.querySelector(".tab");











//show answer
let allShowAnswer=document.querySelectorAll(".show-answer");
allShowAnswer.forEach((btn, i) => {
     btn.onclick=function(){
        let answer=document.querySelector(`#${btn.parentNode.parentNode.id} .answer`)
        answer.classList.toggle("hidden");
        btn.classList.toggle("round");
      }
});
