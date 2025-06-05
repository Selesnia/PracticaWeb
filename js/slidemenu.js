// =========================
// js/slidemenu.js
// =========================

document.addEventListener("DOMContentLoaded", function() {
  const menuToggleBtn = document.getElementById("menutoggle");
  const sideMenu      = document.getElementById("menucostado");
  const closeMenuBtn  = document.getElementById("closemenu");
  const backdrop      = document.getElementById("backdrop");

  function openMenu() {
    sideMenu.classList.add("open");
    backdrop.classList.add("show");
  }

  function closeMenu() {
    sideMenu.classList.remove("open");
    backdrop.classList.remove("show");
  }

  menuToggleBtn.addEventListener("click", openmenu);
  closeMenuBtn.addEventListener("click", closemenu);
  backdrop.addEventListener("click", closemenu);
});
