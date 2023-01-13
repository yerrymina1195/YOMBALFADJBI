













// window.onscroll = function() {myFunction()};

// var kaw = document.getElementById("taff");
// var sticky = kaw.offsetTop;

// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     kaw.classList.add("sticky")
//   } else {
//     kaw.classList.remove("sticky");
//   }
// }



const block = document.querySelectorAll('.block');
// window.addEventListener('load', function chargement(){
//   block.forEach(item => {
//     let numElement = item.querySelector('.num');
//     let num = parseInt(numElement.innerText);
//     let count = 0;
//     let time = 2000 / num;
//     let circle = item.querySelector('.circle');
//     setInterval(() => {
//       if(count == num){
//         clearInterval();
//       } else {
//         count += 1;
//         numElement.innerText = count;
//       }
//     }, time)
//     circle.style.strokeDashoffset 
//       = 503 - ( 503 * ( num / 100 ));
//     let dots = item.querySelector('.dots');
//     dots.style.transform = 
//       `rotate(${360 * (num / 100)}deg)`;
//     if(num == 100){
//       dots.style.opacity = 0;
//     }
//   })
// });


var b =document.getElementById("NNN")
var c=document.getElementById("OOO")
var d=document.getElementById("PPP")
function chargement(){
b.style.display="block"
c.style.display="block"
d.style.display="block"
    block.forEach(item => {
      let numElement = item.querySelector('.num');
      let num = parseInt(numElement.innerText);
      let count = 0;
      let time = 2000 / num;
      let circle = item.querySelector('.circle');
      setInterval(() => {
        if(count == num){
          clearInterval();
        } else {
          count += 1;
          numElement.innerText = count;
        }
      }, time)
      circle.style.strokeDashoffset 
        = 503 - ( 503 * ( num / 100 ));
      let dots = item.querySelector('.dots');
      dots.style.transform = 
        `rotate(${360 * (num / 100)}deg)`;
      if(num == 100){
        dots.style.opacity = 0;
      }
    })
  }
