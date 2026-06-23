const btnAccordion = document.querySelectorAll("button");

btnAccordion.forEach(btn => {
  btn.addEventListener("click", () => {
    const panel = btn.nextElementSibling;

    panel.classList.toggle("hidden");

    const icon = btn.querySelector("i");

    if (panel.classList.contains("hidden")) {
      icon.classList.remove("fa-chevron-up");
      icon.classList.add("fa-chevron-down");
    } else {
      icon.classList.remove("fa-chevron-down");
      icon.classList.add("fa-chevron-up");
    }
  });
});