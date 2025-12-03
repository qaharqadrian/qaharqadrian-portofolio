const body = document.body;
const DARK_MODE_CLASS = `dark-mode`;
function toggleDarkMode() {
    console.log(`Aksi: Tombol "Ubah Warna Tema" diklik.`);
    body.classList.toggle(DARK_MODE_CLASS);
    const themeButton = document.getElementById(`theme-toggle-btn`);
    if (body.classList.contains(DARK_MODE_CLASS)) {
        themeButton.textContent = `Mode Terang (Light Mode)`;
        console.log(`Status Tema: Dark Mode Aktif.`);
    } else {
        themeButton.textContent = `Mode Gelap (Dark Mode)`;
        console,log(`Status Tema: Light Mode Aktif,`);
    }
}

function greetVisitor() {
    console.log(`Aksi: Tombol "Sapa Saya" diklik.`);
    const visitorName = prompt("Masukkan Nama Anda:");
    const greetingElement = document.getElementById(`greeting-text`);
    if (visitorName && visitorName.trim() !== ``) {
        const cleanName = visitorName.trim();
        greetingElement.innerHTML = `Halo, <strong>${cleanName}</strong>! Selamat datang di portofolio saya.`;
        console.log(`Pengunjung disapa: Halo, ${cleanName}!`);
    } else {
        greetingElement.innerHTML = `Halo! Silakan masukkan nama Anda untuk sapaan yang lebih akrab.`;
        console.log(`Pengunjung tidak memasukkan nama.`);
    }
}

document.addEventListener(`DOMContentLoaded`, () => {
    const themeToggleBtn = document.getElementById(`theme-toggle-btn`);
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener(`click`, toggleDarkMode);
    }
    const greetBtn = document.getElementById(`greet-btn`);
    if (greetBtn) {
        greetBtn.addEventListener(`click`, greetVisitor);
    }
});