// Tiga Display — konfigurasi sederhana tanpa database.
const WHATSAPP_NUMBER = "6280000000000"; // Ganti dengan nomor aktif, format internasional tanpa tanda +.
const WHATSAPP_MESSAGE = "Halo Tiga Display, saya ingin bertanya tentang produk box dan display perhiasan.";

document.addEventListener("DOMContentLoaded", () => {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  const contactButton = document.getElementById("contactButton");
  if (contactButton) {
    contactButton.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
  }

  // Tutup menu mobile setelah salah satu tautan navigasi dipilih.
  document.querySelectorAll("#mainNav .nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      const menu = document.getElementById("mainNav");
      if (menu && menu.classList.contains("show") && window.bootstrap) {
        bootstrap.Collapse.getOrCreateInstance(menu).hide();
      }
    });
  });

  // Tandai navigasi sesuai bagian yang sedang terlihat.
  const sections = document.querySelectorAll("main section[id]");
  const navLinks = document.querySelectorAll(".navbar .nav-link");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navLinks.forEach((link) => {
            link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
          });
        }
      });
    }, { rootMargin: "-35% 0px -55% 0px" });
    sections.forEach((section) => observer.observe(section));
  }
});

