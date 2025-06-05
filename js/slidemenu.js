// =========================
// js/slidemenu.js
// =========================

document.addEventListener("DOMContentLoaded", function() {
  // 1) Seleccionamos los elementos que necesitaremos
  const menuToggleBtn = document.getElementById("menuToggle");
  const sideMenu       = document.getElementById("menucostado");
  const closeMenuBtn   = document.getElementById("close-menu");
  const backdrop       = document.getElementById("backdrop");

  // 2) Función para abrir el menú
  function openMenu() {
    sideMenu.classList.add("open");
    backdrop.classList.add("show");
  }

  // 3) Función para cerrar el menú
  function closeMenu() {
    sideMenu.classList.remove("open");
    backdrop.classList.remove("show");
  }

  // 4) Eventos:
  //   - Al hacer clic en ☰ (menuToggleBtn), abrimos el menú
  menuToggleBtn.addEventListener("click", openMenu);

  //   - Al hacer clic en la “×” del menú (closeMenuBtn), lo cerramos
  closeMenuBtn.addEventListener("click", closeMenu);

  //   - Al hacer clic en el backdrop (fondo oscuro), también cerrar
  backdrop.addEventListener("click", closeMenu);
});
