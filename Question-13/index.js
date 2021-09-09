const themeBtn = document.querySelector(".theme-btn");
const currentTheme = localStorage.getItem("theme");
const preferredTheme = window.matchMedia("(prefers-color-scheme: dark)");

if(currentTheme === "dark") {
    document.body.classList.toggle("dark-mode");
} else if(currentTheme === "light") {
    document.body.classList.toggle("light-mode");
}

themeBtn.addEventListener("click", () => {
    var theme;

    if(preferredTheme.matches) {
        document.body.classList.toggle("light-mode");
        theme = "light";
    } else {
        document.body.classList.toggle("dark-mode");
        theme = "dark";
    }

    localStorage.setItem("theme", theme);
});