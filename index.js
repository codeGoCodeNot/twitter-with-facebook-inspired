const logInValidation = () => {
  const email = document.querySelector("#email-phone");
  const password = document.querySelector("#password");
  const loginBTn = document.querySelector(".btn-login");

  loginBTn.addEventListener("click", (event) => {
    event.preventDefault();

    const existingNotification = email.nextElementSibling;
    if (
      existingNotification &&
      existingNotification.classList.contains("notification")
    ) {
      existingNotification.remove();
    }

    if (email.value === "" || password.value === "") {
      const notification = document.createElement("div");
      notification.classList.add("notification");
      notification.innerHTML = `The email or mobile number you entered isn’t connected to an account. 
      <strong>Find your account and log in.</strong>`;
      notification.style.color = "red";
      notification.style.fontSize = ".8rem";
      notification.style.marginTop = "4px";

      email.insertAdjacentElement("afterend", notification);
    }
  });
};

logInValidation();
