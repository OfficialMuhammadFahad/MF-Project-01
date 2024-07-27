// // // For Inspect Element hide
window.addEventListener("keydown", function (e) {
    if (
      (e.ctrlKey && e.keyCode == 85) || // Ctrl+U
      (e.ctrlKey && e.shiftKey && e.keyCode == 85) || // Ctrl+Shift+U
      (e.ctrlKey && e.keyCode == 83) || // Ctrl+S
      (e.ctrlKey && e.shiftKey && e.keyCode == 83) || // Ctrl+Shift+S
      (e.ctrlKey && e.shiftKey && e.keyCode == 67) || // Ctrl+Shift+C
      (e.ctrlKey && e.shiftKey && e.keyCode == 74) || // Ctrl+Shift+J
      (e.keyCode == 123) || // F12
      (e.ctrlKey && e.shiftKey && e.keyCode == 73) || // Ctrl+Shift+I
      (e.altKey && e.metaKey && e.keyCode == 73) || // Option+Cmd+I -- for Mac OS
      (e.altKey && e.metaKey && e.keyCode == 67)  // Option+Cmd+C -- for Mac OS
    ) {
      e.preventDefault();
    }
  });
  
  // For right click
  document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
  }, false);
  
  // Burger Button navbar
  let menuIcon = document.querySelector('#menu-icon');
  let navbar = document.querySelector('.navbar');
  
  menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
  }
  
  // Navbar active
  let sections = document.querySelectorAll('section');
  let navLinks = document.querySelectorAll('header nav a');
  
  window.onscroll = () => {
    sections.forEach(sec => {
      let top = window.scrollY;
      let offset = sec.offsetTop - 100;
      let height = sec.offsetHeight;
      let id = sec.getAttribute('id');
  
      if (top >= offset && top < offset + height) {
        navLinks.forEach(links => {
          links.classList.remove('active');
          document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        });
      }
    });
  
    // Scroller 
    let header = document.querySelector('header');
  
    header.classList.toggle('sticky', window.scrollY > 100);
  
  
    // Remove toggle icon and navbar when scroller scroll
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
  }