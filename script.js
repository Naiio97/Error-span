let errorInput = document.querySelector('#email-imput')
let spanError = document.querySelector('#error')
let filter = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let viewPort = 0


const form = document.querySelector('#form')
form.addEventListener('submit', function(event) {
     event.preventDefault();
     console.log("Nefunguje");

     let mail = event.target.elements.email.value

     document.querySelector('#error').innerHTML = ""
      
     if (mail === "") {
      let paragraph = document.createElement('p')
      paragraph.innerHTML = "Please enter your email address"
      document.querySelector('#error').appendChild(paragraph)
      errorInput.style.border = "2px solid red"
      return
     } else if (!filter.test(mail)) {
      let paragraph = document.createElement('p')
      paragraph.innerHTML = "Please provide a valid email address"
      document.querySelector('#error').appendChild(paragraph)
      errorInput.style.border = "2px solid red"
      return
     } 
       event.target.elements.email.value = ""
       errorInput.style.border = "1px solid hsl(223, 100%, 88%)"
})


