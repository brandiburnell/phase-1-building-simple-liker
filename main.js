// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

// Hide modal initially
let errorElement = document.querySelector("#modal");
// console.log(errorElement);
errorElement.className = "hidden";

let hearts = document.querySelectorAll(".like-glyph");

// When user clicks on empty heart
mimicServerCall()
.then(() => {
  console.log("success");
  console.log(hearts);
  hearts.forEach(heart => {
    heart.addEventListener("click", () => {
      console.log("pressed");
      if (heart.className === "activated-heart") {
        heart.className = "";
      }
      else {
        heart.className = "activated-heart";
      }
    });
  });
})
.catch(() => {
  errorElement.className = "";
  errorElement.textContent = "Pretend remote server notified of action!";
  setTimeout(() => {
    errorElement.className = "hidden";
  }, "3000");
});




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
