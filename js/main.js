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

// ===============================
// Projects rendering
// ===============================

// Project data
const projects = [
  {
    title: "Tone Training App (UW-Madison SPAN Lab)",
    desc:
        `A Mandarin tone-training application designed to help native English speakers practice both perception and production of unfamiliar sounds. 
         I analyzed and structured tonal data to support a machine learning feedback system, and developed a clean, interactive interface using PyQt5.`,

    skills: ["Python", "PyQt5", "NumPy", "Seaborn", "Librosa"],
  },
  {
    title: "Anime Data Explorer",
    desc: "Interactive R Shiny app to explore anime dataset with filters, visualizations, and recommendation insights.",
    skills: ["R", "Shiny", "Data Visualization", "PCA"],
    live: "https://clv07-anime-data-explorer.share.connect.posit.cloud",
    code: "https://github.com/clv07/anime-data-explorer/tree/main"
  },
  {
    title: "GE Healthcare DCAR",
    desc: "Capstone project to improve ECG MI detection using LightGBM ensembles, SHAP interpretability, and error analysis framework.",
    skills: ["Python", "ECG", "LightGBM", "Explainable AI", "SHAP", "Seaborn"],
    live: "",
    code: "https://github.com/clv07/stroke-of-luck"
    },
   {
    title: "VRent",
    desc: "VR interface for exploring apartments and placing furniture models interactively using Meta Quest 3.",
    skills: ["Unity", "C#", "VR", "XR Interaction Toolkit"],
    live: "https://youtu.be/eCcQL7RZvGs",
    code: "https://github.com/clv07/vrent"
  },
//   {
//     title: "Movie Recommendation System",
//     desc: "Recommendation engine combining collaborative filtering and content-based methods for personalized movie suggestions.",
//     skills: ["Python", "SQL", "Recommendation Systems"],
//     live: "",
//     code: ""
//   },
  {
    title: "Car Resale Price Prediction",
    desc: "Regression model predicting used car prices based on dataset features such as mileage, brand, and year.",
    skills: ["R", "Shiny"],
    live: "",
    code: "https://github.com/clv07/car-price-prediction"
    },
  
    // {
    //     title: "Big Data Analytics Pipeline",
    //     desc: "",
    //     skills: ["HDFS", "Spark", "Kafka", "SQL", "Cassandra", "Docker"],
    //     live: "",
    //     code: ""
    // }, 
    {
        title: "Melody Mapper",
        desc: "",
        skills: ["Python", "Librosa", "SQL", "Signal Processing"]
    },

    // {
    //     title: "Cazenda Challenge - Sound Recognition",
    //     desc: "",
    //     skills: [""]
    // },
    // {
    //     title: "ML model in Image Classification",
    //     desc: "",
    //     skills: [""]
    // }, 
    // {
    //     title: "Tableau Tools",
    //     desc: "",
    //     skills: [""]
    // },
    // {
    //     title: "C++ project",
    //     desc: "",
    //     skills: [""]
    // }
 
];

// Render function
function renderProjects() {
  const container = document.getElementById("projects-container");
  const template = document.getElementById("project-template");

  projects.forEach(project => {
    const clone = template.content.cloneNode(true);

    // Title and description
    clone.querySelector(".project-title").textContent = project.title;
    clone.querySelector(".project-desc").textContent = project.desc;

    // Skills
    const skillsDiv = clone.querySelector(".project-skills");
    project.skills.forEach(skill => {
      const span = document.createElement("span");
      span.className = "inline-block rounded bg-gray-100 dark:bg-gray-800 px-2 py-1 text-xs";
      span.textContent = skill;
      skillsDiv.appendChild(span);
    });

    // Links
    if (project.live) {
      const liveLink = clone.querySelector(".project-live");
      liveLink.href = project.live;
      liveLink.style.display = "inline-flex";
    }
    if (project.code) {
      const codeLink = clone.querySelector(".project-code");
      codeLink.href = project.code;
      codeLink.style.display = "inline-flex";
    }

    container.appendChild(clone);
  });
}

// Call on load
document.addEventListener("DOMContentLoaded", renderProjects);






//     <!-- Project 4: Movie Recommendation System-->
//     <article class="card rounded-xl border border-gray-200 dark:border-gray-800 p-5">
//           <h3 class="font-semibold" data-i18n="proj.three.title">Project</h3>
//           <p class="mt-2 text-sm text-gray-600 dark:text-gray-300" data-i18n="proj.three.desc">Project three description.</p>
//           <div class="mt-3 flex flex-wrap gap-2" data-i18n-list="proj.three.skills"></div>
//           <div class="mt-4 flex gap-3">
//             <a href="#" class="text-sm inline-flex items-center gap-1 text-brand hover:underline" data-i18n="proj.live">Live ↗</a>
//             <a href="https://github.com/clv07/stroke-of-luck" class="text-sm inline-flex items-center gap-1 text-brand hover:underline" data-i18n="proj.code">Code ↗</a>
//           </div>
//     </article>

//     <!-- Project 5: Car price prediction -->
//     <article class="card rounded-xl border border-gray-200 dark:border-gray-800 p-5">
//           <h3 class="font-semibold" data-i18n="proj.three.title">Project</h3>
//           <p class="mt-2 text-sm text-gray-600 dark:text-gray-300" data-i18n="proj.three.desc">Project three description.</p>
//           <div class="mt-3 flex flex-wrap gap-2" data-i18n-list="proj.three.skills"></div>
//           <div class="mt-4 flex gap-3">
//             <a href="#" class="text-sm inline-flex items-center gap-1 text-brand hover:underline" data-i18n="proj.live">Live ↗</a>
//             <a href="https://github.com/clv07/stroke-of-luck" class="text-sm inline-flex items-center gap-1 text-brand hover:underline" data-i18n="proj.code">Code ↗</a>
//           </div>
//     </article>

//     <!-- Project 6: VRent-->
//     <article class="card rounded-xl border border-gray-200 dark:border-gray-800 p-5">
//           <h3 class="font-semibold" data-i18n="proj.three.title">Project</h3>
//           <p class="mt-2 text-sm text-gray-600 dark:text-gray-300" data-i18n="proj.three.desc">Project three description.</p>
//           <div class="mt-3 flex flex-wrap gap-2" data-i18n-list="proj.three.skills"></div>
//           <div class="mt-4 flex gap-3">
//             <a href="#" class="text-sm inline-flex items-center gap-1 text-brand hover:underline" data-i18n="proj.live">Live ↗</a>
//             <a href="https://github.com/clv07/stroke-of-luck" class="text-sm inline-flex items-center gap-1 text-brand hover:underline" data-i18n="proj.code">Code ↗</a>
//           </div>
//     </article>