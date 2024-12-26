// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);

// console.log(document.title);
// console.log(document.head);

// console.log(document.forms);

// var headerTitle = document.getElementsByClassName("name");
// console.log(headerTitle);

// var form = document.getElementsByClassName("form");
// console.log(form);
// for (let i = 0; i < form.length; i++) {
//   form[i].style.background = "yellow";
// }

var firstsection = document.querySelector("div.sections");

if (firstsection) {
  firstsection.style.width = "45px";
  firstsection.style.height = "5px";
  firstsection.style.backgroundColor = "white";

  
}
document.addEventListener("DOMContentLoaded", () => {
  
  const boxes = document.querySelectorAll('.projects .box');

  boxes.forEach(box => {
    
   
    box.style.cursor = "pointer";
    
    
    box.addEventListener('click', () => {
      const url = box.getAttribute('data-url');
      if (url) {
        window.location.href = url; 
       
      }
    });
    
    box.setAttribute('tabindex', '0'); 
    box.setAttribute('role', 'button'); 
    
    box.addEventListener('keypress', (e) => {
      if (e.key === 'Enter' || e.key === ' ') { 
        const url = box.getAttribute('data-url');
        if (url) {
          window.location.href = url;
        }
      }
    });
    
  });
  
});

function handleSubmit(event) {
  event.preventDefault();
  
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  
 
  const mailtoLink = `mailto:yousseff.abdellatiff@gmail.com?subject=Contact from ${name}&body=${encodeURIComponent(message)}%0D%0A%0D%0AFrom: ${name}%0D%0AEmail: ${email}`;
  

  window.location.href = mailtoLink;
  
  
  document.getElementById('contactForm').reset();
}

