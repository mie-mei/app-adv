const apiUrl = "https://api.adviceslip.com/advice";
const advice = document.getElementById("advice-text");
const id = document.getElementById("advice");
function generateAdvice(url) {
    fetch(url)
     .then((response) => response.json())
     .then((data) => {
        advice.textContent = data.slip.advice;
        id.textContent = data.slip.id;
      });
  }
  generateAdvice(apiUrl);
  