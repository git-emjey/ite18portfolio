document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("light-mode");
  const aboutInfo = document.getElementById("about-info");
  const editBtn = document.getElementById("edit-about");
  const navLogo = document.getElementById("nav-logo");

  toggle.checked = false;
  navLogo.src = "logow.png";

  toggle.addEventListener("change", () => {
    if (toggle.checked) {
      navLogo.src = "logob.png";
    } else {
      navLogo.src = "logow.png";
    }
  });

  editBtn.addEventListener("click", () => {
    if (editBtn.textContent === "Edit") {
      makeEditable();
    } else {
      saveChanges();
    }
  });

  function makeEditable() {
    aboutInfo.contentEditable = "true";
    aboutInfo.style.border = "1px dashed #00adb5";
    editBtn.textContent = "Save";
  }

  function saveChanges() {
    aboutInfo.contentEditable = "false";
    aboutInfo.style.border = "none";
    editBtn.textContent = "Edit";
  }
});
