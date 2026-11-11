console.log("CV connected");

const darkBtn = document.querySelector("#darkBtn");

darkBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});
const form = document.querySelector("#contactForm");
const nameField = document.querySelector("#name");
const emailField = document.querySelector("#email");
const messageField = document.querySelector("#message");
const formMessage = document.querySelector("#formMessage");


form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nameFieldValue = nameField.value.trim();
    const emailFieldValue = emailField.value.trim();
    const messageFieldValue = messageField.value.trim();

    if (nameFieldValue === "" || emailFieldValue === "" || messageFieldValue === "") {
        formMessage.textContent = "Please fill in all fields.";
        formMessage.style.color = "crimson";
    } else {
        formMessage.textContent = "Thank you " + nameFieldValue + ", your message was sent!";
        formMessage.style.color = "seagreen";
        form.reset();
    }


});


const toggleSkills = document.querySelector("#toggleSkills");
const skillsList = document.querySelector("#skillslist");

toggleSkills.addEventListener("click", () => {
    skillsList.classList.toggle("hidden");
    if (skillsList.classList.contains("hidden")) {
        toggleSkills.textContent = "Show Skills";
    } else {
        toggleSkills.textContent = "Hide Skills";
    }
});