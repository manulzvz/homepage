const toggleBtn = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");

// ===== SVGs (Sol y Luna) =====

// Tu SVG de SOL personalizado
const sunSVG = `
  <path d="M40-440v-80h240v80H40Zm270-154-84-84 56-56 84 84-56 56Zm130-86v-240h80v240h-80Zm210 86-56-56 84-84 56 56-84 84Zm30 154v-80h240v80H680Zm-200 80q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Zm198 134-84-84 56-56 84 84-56 56Zm-396 0-56-56 84-84 56 56-84 84ZM440-40v-240h80v240h-80Z"/>
`;


// SVG de LUNA (Material Design)
const moonSVG = `
  <path d="M600-120q-133 0-226.5-93.5T280-440q0-133 93.5-226.5T600-760q17 0 33 2t33 6q-57 40-91.5 104T540-440q0 73 34.5 137T666-199q-16 4-32 6t-34 2Z"/>
`;

// ===== Función para activar/desactivar Dark Mode =====
function toggleTheme() {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    themeIcon.innerHTML = moonSVG;
    localStorage.setItem("theme", "dark");
  } else {
    themeIcon.innerHTML = sunSVG;
    localStorage.setItem("theme", "light");
  }
}

// ===== Event Listener =====
toggleBtn.addEventListener("click", toggleTheme);

// ===== Mantener Preferencia Guardada =====
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    themeIcon.innerHTML = moonSVG;
  } else {
    document.body.classList.remove("dark-mode");
    themeIcon.innerHTML = sunSVG;
  }
});
