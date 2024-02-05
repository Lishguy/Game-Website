let menu = document.querySelector('.menu-icon');
let navbar = document.querySelector('.menu')

menu.onclick = () => {
    navbar.classList.toggle('active');
    menu.classList.toggle('move');
    bell.classList.remove('active')

}


// Notification 
let bell = document.querySelector('.notification');

document.querySelector("#bell-icon").onclick = () => {
    bell.classList.toggle('active');
}

// custom scrollbar
window.onscroll = function() {myfunction()};

function myfunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById('scrollbar').style.width = scrolled + '%';
  navbar.classList.remove('active');
  menu.classList.remove('move');
}
