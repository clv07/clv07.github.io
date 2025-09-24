// Dynamic year
document.getElementById('year').textContent = new Date().getFullYear();

// THEME: left = light, right = dark
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
// init from storage or system
(function initTheme() {
const stored = localStorage.getItem('theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const isDark = stored ? stored === 'dark' : prefersDark;
applyTheme(isDark);
// switch checked means DARK (right); unchecked means LIGHT (left)
if (themeSwitch) themeSwitch.checked = isDark;
})();
themeSwitch?.addEventListener('change', (e) => {
const checked = e.target.checked;
applyTheme(checked); // checked = dark
});

function setNodeContent(node, html) {
// supports HTML (for the Hero title span)
node.innerHTML = html;
}

function translateUI(lang) {
const dict = i18n[lang] || i18n.en;
// elements with text
document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) setNodeContent(el, dict[key]);
});
// placeholders
document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (dict[key]) el.setAttribute('placeholder', dict[key]);
});
// lists (chips)
document.querySelectorAll('[data-i18n-list]').forEach(el => {
    const key = el.getAttribute('data-i18n-list');
    const raw = dict[key];
    if (!raw) return;
    const items = raw.split(/[|,]/).map(s => s.trim()).filter(Boolean);
    el.innerHTML = '';
    items.forEach(text => {
    const chip = document.createElement('span');
    if (key.startsWith('skills')) {
        chip.className = 'text-sm rounded-lg border px-3 py-1.5'; // Skills style
    } else {
        chip.className = 'text-xs rounded-md bg-gray-100 dark:bg-gray-800 px-2 py-1'; // Projects style
    }
    chip.textContent = text;
    el.appendChild(chip);
    });
});
}

translateUI('en');
document.documentElement.lang = 'en';