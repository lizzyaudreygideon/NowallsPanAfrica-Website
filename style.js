// document.addEventListener('DOMContentLoaded', function() {
//     var links = document.querySelectorAll('#menu a');
//     var menu = document.getElementById('menu');
    
//     links.forEach(function(link) {
//       link.addEventListener('click', function() {
//         menu.style.display = 'none';
//       });
//     });
//   });

// document.addEventListener('DOMContentLoaded', function() {
//     var links = document.querySelectorAll('#menu a');
//     var menu = document.getElementById('menu');
    
//     links.forEach(function(link) {
//       link.addEventListener('click', function(event) {
        
//         menu.style.display = 'none';

//         window.scrollTo(0, 0);
       
//         setTimeout(function() {
//           menu.style.display = '';
//         }, 5000);
//       });
//     });
//   });

// document.addEventListener('DOMContentLoaded', function() {
//     // Check if the current device width is less than 768 pixels
//     if (window.innerWidth < 768) {
//       var links = document.querySelectorAll('#menu a');
//       var menu = document.getElementById('menu');
//       var isMenuVisible = true;
      
//       links.forEach(function(link) {
//         link.addEventListener('click', function(event) {
//           event.preventDefault(); // Prevent the default link behavior
          
//           if (isMenuVisible) {
//             isMenuVisible = false;
//             menu.style.display = 'none';
            
//             var target = this.getAttribute('href');
//             var destination = document.querySelector(target);
            
//             window.scrollTo({
//               top: destination.offsetTop,
//               behavior: 'smooth'
//             });
//           }
//         });
//       });
      
//       window.addEventListener('scroll', function() {
//         if (!isMenuVisible) {
//           menu.style.display = '';
//           isMenuVisible = true;
//         }
//       });
//     }
//   });
 