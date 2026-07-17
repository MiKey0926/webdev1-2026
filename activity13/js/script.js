// Fetch portfolio content and create repeatable sections from data.json.
const create = (tag, className, content = "") => { const el = document.createElement(tag); if (className) el.className = className; el.innerHTML = content; return el; };
const escapeHTML = value => String(value).replace(/[&<>"]/g, character => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[character]);

async function loadPortfolio() {
  try {
    const response = await fetch("data/data.json");
    if (!response.ok) throw new Error("Portfolio data could not be loaded.");
    const data = await response.json();
    const skills = document.querySelector("#skills-container");
    data.skills.forEach(skill => skills.append(create("article", "skill-card", `<span class="skill-icon">${escapeHTML(skill.icon)}</span><strong class="skill-name">${skill.name}</strong><span class="skill-level">${skill.level}%</span><div class="progress"><span style="width:${skill.level}%"></span></div>`)));
    const projects = document.querySelector("#projects-container");
    data.projects.forEach(project => { const card = create("article", "project-card", `<div class="project-image">${project.display}</div><div class="project-body"><h3>${project.title}</h3><p>${project.description}</p><div class="tags">${project.tags.map(tag => `<span>${tag}</span>`).join("")}</div>${project.link ? `<a class="project-link" href="${project.link}" target="_blank" rel="noreferrer">View project ↗</a>` : ""}</div>`); card.querySelector(".project-image").style.setProperty("--project-color", project.color); projects.append(card); });
    const hobbies = document.querySelector("#hobbies-container");
    data.hobbies.forEach(hobby => hobbies.append(create("article", "hobby-card", `<img class="hobby-image" src="${hobby.image}" alt="${hobby.name}"><h3>${hobby.name}</h3><p>${hobby.description}</p>`)));
    const timeline = document.querySelector("#timeline-container");
    data.timeline.forEach(item => timeline.append(create("article", "timeline-item", `<span class="timeline-type">${item.type}</span><div><h3>${item.title}</h3><p>${item.subtitle}</p><p class="date">${item.date}</p></div>`)));
  } catch (error) { console.error(error); document.querySelectorAll("[aria-live]").forEach(area => area.textContent = "Unable to load this section right now."); }
}

const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".nav-links");
toggle.addEventListener("click", () => { const open = menu.classList.toggle("open"); toggle.setAttribute("aria-expanded", open); });
menu.addEventListener("click", event => { if (event.target.matches("a")) { menu.classList.remove("open"); toggle.setAttribute("aria-expanded", "false"); } });

const contactForm = document.querySelector("#contact-form");
contactForm.addEventListener("submit", event => {
  event.preventDefault();
  document.querySelector("#form-message").textContent = "Thanks for your message! This is a front-end demo, so it was not sent.";
  contactForm.reset();
});
loadPortfolio();
