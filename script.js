const burger = document.querySelector('.burger');
const navMenu = document.querySelector('.nav_menu');
const buttons = document.querySelectorAll('.button');

burger.addEventListener('click',function(){
   navMenu.classList.toggle('is_active');
   burger.classList.toggle('cross');
   for (let i = 0; i < buttons.length; i++){
      buttons[i].addEventListener('click', function(){
         navMenu.classList.toggle('is_active');
         burger.classList.toggle('cross');
      });
   }
});