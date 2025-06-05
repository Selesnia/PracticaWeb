// =========================
// js/slidemenu.js
// =========================

document.addEventListener("DOMContentLoaded", function() {
  const menuToggleBtn = document.getElementById("menuToggle");
  const sideMenu      = document.getElementById("menucostado");
  const closeMenuBtn  = document.getElementById("closeMenu");
  const backdrop      = document.getElementById("backdrop");

  function openMenu() {
    sideMenu.classList.add("open");
    backdrop.classList.add("show");
  }

  function closeMenu() {
    sideMenu.classList.remove("open");
    backdrop.classList.remove("show");
  }

  menuToggleBtn.addEventListener("click", openMenu);
  closeMenuBtn.addEventListener("click", closeMenu);
  backdrop.addEventListener("click", closeMenu);
});
