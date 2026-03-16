// ── Menu toggles ──────────────────────────────
function initMenu(toggleId, linksId) {
  const toggle = document.getElementById(toggleId);
  const links  = document.getElementById(linksId);
  if (!toggle || !links) return;
  toggle.addEventListener("click", () => links.classList.toggle("active"));
  links.querySelectorAll("a").forEach(a => a.addEventListener("click", () => links.classList.remove("active")));
}
initMenu("edf-menu-toggle",   "edf-nav-links");
initMenu("wave-menu-toggle",  "wave-nav-links");
initMenu("algae-menu-toggle", "algae-nav-links");
initMenu("hema-menu-toggle",  "hema-nav-links");

// ── Reveal on scroll ─────────────────────────
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

// ── Sticky navbar color switch ────────────────
// The two navbars stay inside their colored sections naturally via sticky positioning.