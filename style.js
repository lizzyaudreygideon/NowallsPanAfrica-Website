// document.addEventListener('DOMContentLoaded', function() {
//     var links = document.querySelectorAll('#menu a');
//     var menu = document.getElementById('menu');
    
//     links.forEach(function(link) {
//       link.addEventListener('click', function() {
//         menu.style.display = 'none';
//       });
//     });
//   });

document.addEventListener('DOMContentLoaded', function() {
    var links = document.querySelectorAll('#menu a');
    var menu = document.getElementById('menu');
    
    links.forEach(function(link) {
      link.addEventListener('click', function(event) {
        
        menu.style.display = 'none';

        window.scrollTo(0, 0);
       
        setTimeout(function() {
          menu.style.display = '';
        }, 5000);
      });
    });
  });


  