document.querySelector(".btn-cancel").addEventListener("click", () => {
  location.href = "index.html";
});

const accountValidation = () => {
  const buttonSearch = document.querySelector(".btn-search");

  buttonSearch.addEventListener("click", (event) => {
    event.preventDefault();

    const accountFinder = document.querySelector("#forgot-password");
    const existingNotification = document.querySelector(".notification");
    if (existingNotification) {
      existingNotification.remove();
    }
    if (accountFinder.value === "") {
      const notification = document.createElement("div");
      notification.classList.add("notification");
      const text = document.querySelector("p");
      notification.innerHTML = `
      <div><strong>Please fill at least one field</strong></div>
      <div>Fill in at least one field to search for your account</div>
    `;
      notification.style.color = "red";
      notification.style.fontSize = ".8rem";
      notification.style.marginBottom = "20px";
      notification.style.backgroundColor = "#ffebe8";
      notification.style.border = "1px solid #dd3c10";
      notification.style.padding = "10px";

      text.insertAdjacentElement("beforebegin", notification);
    }
  });
};

accountValidation();
