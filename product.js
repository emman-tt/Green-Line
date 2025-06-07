let drinkBox  = document.querySelectorAll(".drink-box")
let cart = document.querySelectorAll(".price-and-cart div:nth-child(2)")
let d = drinkBox.style
let cartIcon = document.querySelector(".cart")
let cartMenu = document.querySelector(".cart-menu")
let cartMenuBlocked = cartMenu.style.display = "none";
let cartMenuRemove = document.getElementById("close")
let added = document.querySelector(".added")
let addedBlocked = added.style.display = "none"

console.log(added);


document.onreadystatechange = function () {
  if (document.readyState === "complete") {
    initApp();
  }
};


 function initApp() {

//    cart.addEventListener("click", function () {
// 

//  

// 
// });


 cart.forEach(function(cart) {

cart.addEventListener("click", function () {
 added.style.display = "none";
    added.offsetHeight;          
    added.style.display = "block"; 
});
    
})
 

    

cartIcon.addEventListener("click", function () {
   cartMenu.style.display = "block"
   cartMenu.style.transform = "translateX(0em)"
   cartMenu.style.transition = "all 0.5s ease"

})
cartMenuRemove.addEventListener("click", function () {
   
  cartMenu.style.transform = "translateX(30em)";
  cartMenu.style.transition = "transform 0.4s ease";

})

 drinkBox.forEach(function(drinkBox) {
drinkBox.addEventListener("mouseover", function () {
    drinkBox.style.transform = "scale(1.1) rotate(15deg)";
    drinkBox.style.transition = "transform 0.5s ease";
   
    
})
 })
 
 drinkBox.forEach(function(drinkBox,d) {
drinkBox.addEventListener("mouseleave", function () {
 drinkBox.style = d
 drinkBox.style.transition = "transform 0.5s ease"
   
    
})
 })

 cart.forEach(function(cart) {
cart.addEventListener("mouseover", function () {
 cart.style.transform = "scale(1.1) "
 cart.style.transition = "transform 0.3s ease"

   
    
})
 })

 cart.forEach(function(cart) {
cart.addEventListener("mouseleave", function () {
 cart.style = cart
 cart.style.transition = "transform 0.3s ease"

   
    
})
 })

 }