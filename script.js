let clickbtn = document.getElementById("box1")
let clickbtn1 = document.getElementById("box2")
let clickbtn2 = document.getElementById("box3")
let old = clickbtn.style.background = "black"
const container = document.getElementById("container");
let second = container.querySelector("div:nth-child(2)")
let submit = document.getElementById("submit")
let inner = document.getElementById("inner")
console.log(second);




document.onreadystatechange = function () {
  if (document.readyState === "complete") {
    initApp();
  }
};

 function initApp() {



second.addEventListener("click", function() {
   second.style.background = "red"
    
    
})

clickbtn.addEventListener("mouseover", function () {
    clickbtn.style.background = "blue"
 
})

clickbtn.addEventListener("mouseout" , function () {
    clickbtn.style.display = "none"
    
})


submit.addEventListener("click",function(e) {
          e.preventDefault();
    clickbtn.style.display = "flex"
    clickbtn.style.background = old
    
})

inner.addEventListener("click", function (e) {
    e.stopPropagation();
    e.target.style.background = "green"
    
})


      
      };

