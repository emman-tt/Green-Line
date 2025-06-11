let drinkBox  = document.querySelectorAll(".drink-box")
let cart = document.querySelectorAll(".price-and-cart div:nth-child(2)")

let d = drinkBox.style
let cartIcon = document.querySelector(".cart")
let cartMenu = document.querySelector(".cart-menu")
let cartMenuBlocked = cartMenu.style.display = "none";
let cartMenuRemove = document.getElementById("close")
let added = document.querySelector(".added")
let addedBlocked = added.style.display = "none"
let item1 = document.getElementById("item1")
let item2 = document.getElementById("item2")
let item3 = document.getElementById("item3")
let item4 = document.getElementById("item4")
let item5 = document.getElementById("item5")
let item6 = document.getElementById("item6")


let totalItems = document.getElementById("totalItems")

let drink1=document.querySelector(".drink1")
let drink2=document.querySelector(".drink2")
let drink3=document.querySelector(".drink3")
let drink4=document.querySelector(".drink4")
let drink5=document.querySelector(".drink5")
let drink6=document.querySelector(".drink6")

let remove1=document.getElementById("remove1")
let remove2=document.getElementById("remove2")
let remove3=document.getElementById("remove3")
let remove4=document.getElementById("remove4")
let remove5=document.getElementById("remove5")
let remove6=document.getElementById("remove6")



let cartBody = document.querySelector(".body")
let items = document.querySelector(".items")
let image1 = document.getElementById("image1")
let imageText = document.getElementById("itemText")
let price = document.getElementById("price")
console.log(totalItems);


document.onreadystatechange = function () {
  if (document.readyState === "complete") {
    initApp();
  }
};
let clickCount = 0;


 function initApp() {

//    cart.addEventListener("click", function () {
// 

//  

// 
// });





remove1.addEventListener("click", function () {

  drink1.style.display="none"
  clickCount--;
  totalItems.textContent = clickCount
  return;
})

remove2.addEventListener("click", function () {
clickCount--;
  totalItems.textContent = clickCount
  drink2.style.display="none"
  return;
})
remove3.addEventListener("click", function () {
clickCount--;
  totalItems.textContent = clickCount
  drink3.style.display="none"
  return;
})
remove4.addEventListener("click", function () {
clickCount--;
  totalItems.textContent = clickCount
  drink4.style.display="none"
  return;
})
remove5.addEventListener("click", function () {
clickCount--;
  totalItems.textContent = clickCount
  drink5.style.display="none"
  return;
})
remove6.addEventListener("click", function () {
clickCount--;
  totalItems.textContent = clickCount
  drink6.style.display="none"
  return;
})





 cart.forEach(function(cart) {
cart.addEventListener("click", function () {
 clickCount++;
totalItems.textContent = clickCount;
return;
 
});
    
})



item1.addEventListener("click",function addItem() {
 if (cartBody.style.display= "block")

  {
  cartBody.style.display = "none"
  drink1.style.display="flex"

 } 
  
})

item2.addEventListener("click",function addItem() {
 if (cartBody.style.display= "block")

  {
  cartBody.style.display = "none"
  drink2.style.display="flex"
 

 } 
  
})

item3.addEventListener("click",function addItem() {
 if (cartBody.style.display= "block")

  {
  cartBody.style.display = "none"
  drink3.style.display="flex"
 } 
  
})
item4.addEventListener("click",function addItem() {
 if (cartBody.style.display= "block")

  {
  cartBody.style.display = "none"
  drink4.style.display="flex"
 } 
  
})
item5.addEventListener("click",function addItem() {
 if (cartBody.style.display= "block")

  {
  cartBody.style.display = "none"
  drink5.style.display="flex"
 } 
  
})
item6.addEventListener("click",function addItem() {
 if (cartBody.style.display= "block")

  {
  cartBody.style.display = "none"
  drink6.style.display="flex"
 } 

  
})


if (clickCount > "0") {
  console.log('yes');
  
}
else{
  console.log('no');
}


// function openCartItem(itemClass) {
//   document.body.classList.add("item-open"); // Hide main UI
//   cartBody.className = "items " + itemClass; // e.g. "body show-item1"
//   cartMenu.style.display = "block";
//   cartMenu.style.transform = "translateX(0em)";
//   cartMenu.style.transition = "all 0.5s ease";
// }

// item1.addEventListener("click", function () {
//   openCartItem("show-item1");
// });
// item2.addEventListener("click", function () {
//   openCartItem("show-item2");
// });
// item3.addEventListener("click", function () {
//   openCartItem("show-item3");
// });
// item4.addEventListener("click", function () {
//   openCartItem("show-item4");
// });
// item5.addEventListener("click", function () {
//   openCartItem("show-item5");
// });
// item6.addEventListener("click", function () {
//   openCartItem("show-item6");
// });





//  cart.forEach(function(cart) {
//   cart.addEventListener("click", function () {
//     document.querySelector(".body").classList.toggle("show-item1");

// });
    

// })

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