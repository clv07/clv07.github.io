// ===============================
// Project Data
// ===============================
// To add a new project, append one object to this array.
// tags    → topic labels used for the filter bar (auto-generated)
// skills  → tech stack chips shown on the card

const projects = [
  {
    title: "RNN Oversampling with Warped Filter Banks",
    desc: "Investigated how sample-rate independent RNN oversampling strategies (STN, LIDL, APDL, CIDL) perform when audio is preprocessed through a Warped Cosine Modulated Filter Bank (WCMFB). Implemented and evaluated five RNN recurrence methods across four sample rates and two warping coefficients, measuring audio quality via SNR analysis.",
    tags: ["Signal Processing", "AI/ML"],
    skills: ["Python", "MATLAB", "Signal Processing", "RNN", "Filter Banks"],
    live: "",
    code: "https://github.com/clv07/ece251c"
  },
  {
    title: "AI Accelerator",
    desc: "Designed efficient AI accelerator hardware targeting inference workloads, exploring hardware-software co-design for neural network computation.",
    tags: ["Hardware", "AI/ML"],
    skills: ["Verilog", "Python", "PyTorch"],
    live: "",
    code: ""
  },
  {
    title: "Tone Training App (UW-Madison SPAN Lab)",
    desc: "A Mandarin tone-training application designed to help native English speakers practice both perception and production of unfamiliar tonal sounds. Analyzed and structured tonal audio data to support a machine learning feedback system, and developed an interactive interface using PyQt5.",
    tags: ["Signal Processing", "AI/ML"],
    skills: ["Python", "PyQt5", "NumPy", "Seaborn", "Librosa"],
    live: "",
    code: ""
  },
  {
    title: "GE Healthcare DCAR",
    desc: "Capstone project improving ECG-based myocardial infarction detection using LightGBM ensembles. Developed an error analysis framework and applied SHAP for model interpretability, improving transparency of clinical predictions.",
    tags: ["AI/ML", "Signal Processing"],
    skills: ["Python", "ECG", "LightGBM", "Explainable AI", "SHAP", "Seaborn"],
    live: "",
    code: "https://github.com/clv07/stroke-of-luck"
  },
  {
    title: "Recipe Recommendation System",
    desc: "Group project applying recommendation system techniques to suggest recipes based on user preferences. Contributed primarily to data cleaning, preprocessing, and exploratory data analysis of the recipe dataset.",
    tags: ["AI/ML", "Data Science"],
    skills: ["Python", "Pandas", "Data Analysis"],
    live: "",
    code: ""
  },
  {
    title: "Anime Data Explorer",
    desc: "Interactive R Shiny app for exploring a large anime dataset with dynamic filters, visualizations, and recommendation insights using dimensionality reduction.",
    tags: ["Data Science"],
    skills: ["R", "Shiny", "Data Visualization", "PCA"],
    live: "https://clv07-anime-data-explorer.share.connect.posit.cloud",
    code: "https://github.com/clv07/anime-data-explorer/tree/main"
  },
  {
    title: "Car Resale Price Prediction",
    desc: "Regression model predicting used car resale prices based on features such as mileage, brand, and year, with an interactive Shiny interface for exploring predictions.",
    tags: ["Data Science", "AI/ML"],
    skills: ["R", "Shiny", "Regression"],
    live: "",
    code: "https://github.com/clv07/car-price-prediction"
  },
  {
    title: "VRent",
    desc: "A VR interface built for Meta Quest 3 that allows users to explore apartment layouts and interactively place furniture models in 3D space.",
    tags: ["XR/VR"],
    skills: ["Unity", "C#", "VR", "XR Interaction Toolkit"],
    live: "https://youtu.be/eCcQL7RZvGs",
    code: "https://github.com/clv07/vrent"
  },
  {
    title: "Melody Mapper",
    desc: "A collaborative software engineering project built using Agile methodology. The app analyzes and maps melodic structure in audio files, extracting musical features and storing results in MIDI files. Focused on the signal processing components within the team.",
    tags: ["Signal Processing", "Software Engineering"],
    skills: ["Python", "Librosa", "SQL", "Signal Processing", "Agile"],
    live: "",
    code: ""
  },
];
