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
  
  // Select all elements with the class 'box' inside '.projects'
  const boxes = document.querySelectorAll('.projects .box');
  
  // Iterate over each box and add event listeners
  boxes.forEach(box => {
    
    // Change cursor to pointer to indicate clickability
    box.style.cursor = "pointer";
    
    // Click event listener
    box.addEventListener('click', () => {
      const url = box.getAttribute('data-url');
      if (url) {
        window.location.href = url; // Redirects in the same tab
        // Alternatively, use window.open(url, '_blank'); to open in a new tab
      }
    });
    
    // Optional: Keyboard accessibility
    box.setAttribute('tabindex', '0'); // Make div focusable
    box.setAttribute('role', 'button'); // Define role for assistive technologies
    
    box.addEventListener('keypress', (e) => {
      if (e.key === 'Enter' || e.key === ' ') { // Check for Enter or Space key
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
  
  // Create mailto link with form data
  const mailtoLink = `mailto:yousseff.abdellatiff@gmail.com?subject=Contact from ${name}&body=${encodeURIComponent(message)}%0D%0A%0D%0AFrom: ${name}%0D%0AEmail: ${email}`;
  
  // Open default email client
  window.location.href = mailtoLink;
  
  // Clear form
  document.getElementById('contactForm').reset();
}

