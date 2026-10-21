const WHATSAPP_NUMBER = "56934501112";
const defaultMessage = "Hola XTRAE, quiero cotizar productos para minería.";

function openWhatsApp(message = defaultMessage) {
  const cleanNumber = WHATSAPP_NUMBER.replace(/\D/g, "");
  const url = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

document.querySelectorAll("[data-whatsapp]").forEach((button) => {
  button.addEventListener("click", () => {
    const customMessage = button.dataset.message || defaultMessage;
    openWhatsApp(customMessage);
  });
});

const menuButton = document.querySelector("[data-menu-toggle]");
const menu = document.querySelector("[data-menu]");

if (menuButton && menu) {
  menuButton.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("is-open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });

  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("is-open");
      menuButton.setAttribute("aria-expanded", "false");
    });
  });
}

const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();