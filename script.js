const sidebar = document.getElementById("sidebar");
const toggleBtn = document.getElementById("sidebarToggle");

toggleBtn.addEventListener("click", () => {
  sidebar.classList.toggle("active");
});

function updateClock() {
  const now = new Date();
  const timeString = now.toLocaleTimeString("id-ID", { hour12: false });
  document.getElementById("clock").textContent = timeString;
}
setInterval(updateClock, 1000);
updateClock();


