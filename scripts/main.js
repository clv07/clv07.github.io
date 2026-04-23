// ===============================
// Dynamic year
// ===============================
document.getElementById('year').textContent = new Date().getFullYear();

// ===============================
// Theme: left = light (default), right = dark
// ===============================
const themeSwitch = document.getElementById('theme-switch');

function applyTheme(dark) {
  if (dark) {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }
}

(function initTheme() {
  const stored = localStorage.getItem('theme');
  // Default is light — only go dark if the user has explicitly chosen dark before
  const isDark = stored === 'dark';
  applyTheme(isDark);
  if (themeSwitch) themeSwitch.checked = isDark;
})();

themeSwitch?.addEventListener('change', (e) => {
  applyTheme(e.target.checked);
});

// ===============================
// Projects: filter bar + render
// ===============================
let activeTag = 'All';

function filterBtnClass(active) {
  return active
    ? 'rounded-full px-4 py-1.5 text-sm font-medium bg-brand text-white transition-colors'
    : 'rounded-full px-4 py-1.5 text-sm font-medium border border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:border-brand hover:text-brand transition-colors';
}

function buildFilterBar() {
  const bar = document.getElementById('project-filter-bar');
  if (!bar) return;

  const allTags = ['All', ...new Set(projects.flatMap(p => p.tags || []))];

  bar.innerHTML = '';
  allTags.forEach(tag => {
    const btn = document.createElement('button');
    btn.textContent = tag;
    btn.dataset.tag = tag;
    btn.className = filterBtnClass(tag === activeTag);
    btn.addEventListener('click', () => {
      activeTag = tag;
      bar.querySelectorAll('button').forEach(b => {
        b.className = filterBtnClass(b.dataset.tag === activeTag);
      });
      renderProjects();
    });
    bar.appendChild(btn);
  });
}

function renderProjects() {
  const container = document.getElementById('projects-container');
  const template = document.getElementById('project-template');
  if (!container || !template) return;

  container.innerHTML = '';

  const filtered = activeTag === 'All'
    ? projects
    : projects.filter(p => (p.tags || []).includes(activeTag));

  filtered.forEach(project => {
    const clone = template.content.cloneNode(true);

    clone.querySelector('.project-title').textContent = project.title;
    clone.querySelector('.project-desc').textContent = project.desc || '';

    // Topic tag chips
    const tagsDiv = clone.querySelector('.project-tags');
    if (tagsDiv) {
      (project.tags || []).forEach(tag => {
        const span = document.createElement('span');
        span.className = 'text-xs rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-brand px-2.5 py-0.5 font-medium';
        span.textContent = tag;
        tagsDiv.appendChild(span);
      });
    }

    // Tech skill chips
    const skillsDiv = clone.querySelector('.project-skills');
    (project.skills || []).forEach(skill => {
      const span = document.createElement('span');
      span.className = 'inline-block rounded bg-gray-100 dark:bg-gray-800 px-2 py-1 text-xs';
      span.textContent = skill;
      skillsDiv.appendChild(span);
    });

    // Links
    if (project.live) {
      const liveLink = clone.querySelector('.project-live');
      liveLink.href = project.live;
      liveLink.style.display = 'inline-flex';
    }
    if (project.code) {
      const codeLink = clone.querySelector('.project-code');
      codeLink.href = project.code;
      codeLink.style.display = 'inline-flex';
    }

    container.appendChild(clone);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  buildFilterBar();
  renderProjects();
});
