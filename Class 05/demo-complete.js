const darkly =
  "https://stackpath.bootstrapcdn.com/bootswatch/4.3.1/darkly/bootstrap.min.css";

const flatly =
  "https://stackpath.bootstrapcdn.com/bootswatch/4.3.1/flatly/bootstrap.min.css";

const dmButton = document.getElementById("dark-mode-toggle");

function toggleDarkMode() {
  const cssLink = document.getElementById("css-link");
  const cssState = cssLink.getAttribute("href");
  if (cssState === flatly) {
    cssLink.setAttribute("href", darkly);
    dmButton.innerHTML = "Light Mode";
  } else {
    cssLink.setAttribute("href", flatly);
    dmButton.innerHTML = "Dark Mode";
  }
}

dmButton.addEventListener("click", toggleDarkMode);
