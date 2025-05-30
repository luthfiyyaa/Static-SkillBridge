function toggleMenu() {
  const menu = document.getElementById("menu");
  const overlay = document.getElementById("overlay");
  menu.classList.toggle("show");
  overlay.classList.toggle("show");
}

function closeMenu() {
  const menu = document.getElementById("menu");
  const overlay = document.getElementById("overlay");
  if (menu && overlay) {
    menu.classList.remove("show");
    overlay.classList.remove("show");
  }
}

function toggleSubmenu(button) {
  const submenu = button.nextElementSibling;
  document.querySelectorAll('.submenu').forEach(sub => {
    if (sub !== submenu) {
      sub.classList.remove('show');
    }
  });
  submenu.classList.toggle('show');
}

function navigateTo(section) {
  closeMenu();
  alert(`Navigating to: ${section}`);
}

function logout() {
  closeMenu();
  if (confirm("Are you sure you want to logout?")) {
    alert("Logged out successfully!");
  }
}

// Tutup menu jika klik di luar
document.addEventListener('click', function (event) {
  const menu = document.getElementById('menu');
  const hamburger = document.getElementById('hamburger');
  if (menu && hamburger && !menu.contains(event.target) && !hamburger.contains(event.target)) {
    closeMenu();
  }
});
