const toggle = document.getElementById("dark-mode-toggle");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  // Simpan status ke localStorage
  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("mode", "dark");
  } else {
    localStorage.setItem("mode", "light");
  }
});

// Saat halaman dimuat, aktifkan dark mode jika sebelumnya sudah disimpan
window.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("mode") === "dark") {
    document.body.classList.add("dark-mode");
  }
});
