function toggleMenu() {
    menuHide();
    iconHide();
  }

  function menuHide() {
    var x = document.getElementById("resumeMenu");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  function iconHide() {
    var x = document.getElementById("contactInfo");
    if (x.style.display === "none") {
      x.style.display = "flex";
    } else {
      x.style.display = "none";
    }
  }