const logInValidation = () => {
  const email = document.querySelector("#email-phone");
  const password = document.querySelector("#password");
  const loginBTn = document.querySelector(".btn-login");

  loginBTn.addEventListener("click", (event) => {
    event.preventDefault();

    const emailNotif = email.nextElementSibling;
    if (emailNotif && emailNotif.classList.contains("notification")) {
      emailNotif.remove();
    }

    const passwordNotif = password.nextElementSibling;
    if (passwordNotif && passwordNotif.classList.contains("notification"))
      passwordNotif.remove();

    if (email.value === "") {
      const notification = document.createElement("div");
      notification.classList.add("notification");
      notification.innerHTML = `The email or mobile number you entered isn’t connected to an account. 
      <a href="forgot-password.html" style="color: red">
      Find your account and log in.</a>`;
      notification.style.color = "red";
      notification.style.fontSize = ".8rem";
      notification.style.marginTop = "4px";

      email.insertAdjacentElement("afterend", notification);
    } else if (password.value === "") {
      const notification = document.createElement("div");
      notification.classList.add("notification");
      notification.innerHTML = `The password you've entered is incorrect. 
<a href="forgot-password.html" style="color: red">Forgot Password?</a>`;
      notification.style.color = "red";
      notification.style.fontSize = ".8rem";
      notification.style.marginTop = "4px";

      password.insertAdjacentElement("afterend", notification);
    }
  });
};

logInValidation();
