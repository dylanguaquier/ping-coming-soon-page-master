const emailInput = document.querySelector(".email-input");
const errorMessage = document.querySelector(".error-message");

emailInput.addEventListener("focus", function () {
  emailInput.classList.add("focus");
});

emailInput.addEventListener("blur", function () {
  emailInput.classList.remove("focus");
});

document
  .querySelector(".email-notify-btn")
  .addEventListener("click", function () {
    const emailValue = emailInput.value;
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (!emailPattern.test(emailValue)) {
      errorMessage.textContent = "Please enter a valid email address.";
      errorMessage.style.display = "block";
      emailInput.classList.add("error");
    } else {
      errorMessage.textContent = "";
      errorMessage.style.display = "none";
      emailInput.classList.remove("error");

      // clear cache iputt
      emailInput.value = "";

      // valid email alert
      alert("Thanks for subscribing!");
    }
  });
