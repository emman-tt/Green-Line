let positionedImage = document.querySelector('.positioned-image')
let movingDrink = document.getElementById("movingDrink")
let slides = document.querySelector('.slides');
let cards = document.querySelectorAll('.review-cards');
let nextBtn = document.getElementById('nextBtn');
let prevBtn = document.getElementById('prevBtn');
let deviceWidth = window.innerWidth;
let drinkDisplay1 = document.getElementById("drinkDisplay1")
let drinkDisplay2 = document.getElementById("drinkDisplay2")
let drinkDisplay3 = document.getElementById("drinkDisplay3")
let circle = document.getElementById("circle")
let circle1 = document.getElementById("circle1")
let circle2 = document.getElementById("circle2")
let tween;


drinkDisplay1.style.display = "none"
drinkDisplay2.style.display = "none"
drinkDisplay3.style.display = "none"




function movingDrinkReturn() {
  movingDrink.style.zIndex = 10
  drinkDisplay1.style.display = "none"
  drinkDisplay2.style.display = "none"
  drinkDisplay3.style.display = "none"
  
}


circle.addEventListener("click", () => {
 drinkDisplay3.style.display = "none"
 drinkDisplay2.style.display = "none"
 drinkDisplay1.style.display = "block"
 movingDrink.style.zIndex = -1
})

circle1.addEventListener("click", () => {
 drinkDisplay2.style.display = "block"
 drinkDisplay1.style.display = "none"
 drinkDisplay3.style.display = "none"
 movingDrink.style.zIndex = -1
})

circle2.addEventListener("click", () => {
 drinkDisplay3.style.display = "block"
 drinkDisplay2.style.display = "none"
 drinkDisplay1.style.display = "none"
movingDrink.style.zIndex = -1

})





let currentIndex = 0;


function Updateslider() {
    let width = cards[0].offsetWidth;
    slides.style.transform = `translateX(-${width * currentIndex}px)`;
    
}

nextBtn.addEventListener("click", () => {
    if (currentIndex < cards.length - 1) {
        currentIndex++;
        Updateslider();
        slides.style.animation = "none"
        
    }
})

 prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      Updateslider();
      slides.style.animation = "none"
    }
  });

window.addEventListener('resize', Updateslider);


document.addEventListener('DOMContentLoaded', () => {

    if (deviceWidth >= 610 && deviceWidth <= 900  ) {
        
  tween =   gsap.to('.movingDrink', {
    y: 620,
    scale: 2,
    x: -100,
     ease: 'linear',
    // yoyo: true,
    duration: 5,
    onComplete: () =>{movingDrinkReturn()},
  

    scrollTrigger: {
      trigger: '.movingDrink',
      start: 'bottom 60%',
      end: 'top 20%',
      scrub: 5,
      
    }
  })

    }

    if (deviceWidth >= 905 && deviceWidth <= 1200  ) {
   tween =  gsap.to('.movingDrink', {
    y: 780,
    scale: 2,
    x: -100,
    transform:"none",
     ease: 'linear',
    // yoyo: true,
    duration: 5,
     onComplete: () =>{movingDrinkReturn()},

    scrollTrigger: {
      trigger: '.movingDrink',
      start: 'bottom 60%',
      end: 'top 20%',
      scrub: 5
    }
  })
    }
    if (deviceWidth >= 1305 && deviceWidth <= 1600  ) {
     gsap.to('.movingDrink', {
    y: 630,
    scale: 1.8,
    x: "-53%",
    transform:"none",
     ease: 'linear',
    // yoyo: true,
    duration: 5,
     onComplete: () =>{movingDrinkReturn()},

    scrollTrigger: {
      trigger: '.movingDrink',
      start: 'bottom 70%',
      end: 'top 20%',
      scrub: 5
    }
  })
    }
    if (deviceWidth >= 420 && deviceWidth <= 700 ) {
     gsap.to('.movingDrink', {
    y: 430,
    scale: 1.8,
    x: "-65%",
    transform:"none",
     ease: 'linear',
    // yoyo: true,
    duration: 5,
     onComplete: () =>{movingDrinkReturn()},

    scrollTrigger: {
      trigger: '.movingDrink',
      start: 'bottom 30%',
      end: 'top 20%',
      scrub: 5
    }
  })
    }

    if (deviceWidth >= 360 && deviceWidth <= 400 ) {
     gsap.to('.movingDrink', {
    y: 380,
    scale: 1.8,
    x: "-65%",
    transform:"none",
     ease: 'linear',
    // yoyo: true,
    duration: 5,
     onComplete: () =>{movingDrinkReturn()},

    scrollTrigger: {
      trigger: '.movingDrink',
      start: 'bottom 17%',
      end: 'top 20%',
      scrub: 5
    }
  })
    }
    if (deviceWidth >= 300 && deviceWidth <= 360 ) {
     gsap.to('.movingDrink', {
    y: 380,
    scale: 2.4,
    x: "-145%",
    transform:"none",
     ease: 'linear',
    // yoyo: true,
    duration: 5,
     onComplete: () =>{movingDrinkReturn()},

    scrollTrigger: {
      trigger: '.movingDrink',
      start: 'bottom 30%',
      end: 'top 20%',
      scrub: 5
    }
  })
    }
 
})
