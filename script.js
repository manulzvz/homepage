document.addEventListener("DOMContentLoaded", () => {
  // ===== Toggle Dark Mode =====
  const themeToggle = document.getElementById("theme-toggle");
  const themeIcon = document.getElementById("theme-icon");

  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    const isDark = document.body.classList.contains("dark-mode");
    themeIcon.setAttribute(
      "d",
      isDark
        ? "M480-80q-83 0-156.5-31.5T192-200q-55-55-86.5-128.5T74-480q0-83 31.5-156.5T192-765q9-9 22.5-9t22.5 9q9 9 9 22.5T237-720q-46 46-71.5 106T140-480q0 114 83 197t197 83q68 0 128-29t106-75q9-9 22.5-9t22.5 9q9 9 9 22.5t-9 22.5q-61 61-134.5 93.5T480-80Z"
        : "M440-40v-240h80v240h-80Zm0-640v-240h80v240h-80ZM200-226l-56-56 84-84 56 56-84 84Zm440-440-56-56 84-84 56 56-84 84ZM40-440v-80h240v80H40Zm640 0v-80h240v80H680ZM200-694l84-84 56 56-84 84-56-56Zm440 440 84-84 56 56-84 84-56-56ZM480-280q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280Z"
    );
  });

  // ===== Responsive Menu Toggle =====
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  // Cerrar el menú al hacer clic en un enlace
  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      if (navLinks.classList.contains("active")) {
        navLinks.classList.remove("active");
      }
    });
  });
});
