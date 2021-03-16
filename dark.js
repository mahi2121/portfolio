const btn = document.querySelector("#modeToggle");

btn.addEventListener("change", () => {
  if (btn.checked == true) {
    document.body.classList.add("dark-theme");
  } else {
    document.body.classList.remove("dark-theme");
  }
});