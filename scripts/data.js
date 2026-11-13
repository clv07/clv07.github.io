// ===============================
// Project Data
// ===============================
// To add a new project, append one object to this array.
// tags    → topic labels used for the filter bar (auto-generated)
// skills  → tech stack chips shown on the card

const projects = [
  {
    title: "Multimodal LLM Router",
    desc: "Routed multimodal LLM requests to the machine predicted to finish first, cutting p95 latency by 72% and cost by 19% vs. round-robin.",
    tags: ["Systems", "Backend", "AI/ML"],
    skills: ["Python", "llama.cpp", "AWS EC2"],
    live: "",
    code: "https://github.com/clv07/aws-mm-router"
  },
  {
    title: "Research Agent",
    desc: "	Built a paper ingestion API, tested against a real database, as the foundation for semantic search and AI summaries of research papers.",
    tags: ["Backend", "AI/ML"],
    skills: ["Java", "Spring Boot", "PostgreSQL", "pgvector", "React", "TypeScript", "JUnit"],
    live: "",
    code: "https://github.com/clv07/research-agent"
  },
  {
    title: "GPU-Accelerated Neighbor-Joining Algorithm",
    desc: "Parallelized phylogenetic tree building on the GPU, running 21× faster than QuickTree on 20,000 taxa with 99.8% identical trees.",
    tags: ["Systems", "HPC"],
    skills: ["CUDA", "C++", "CMake"],
    live: "https://clv07.github.io/quicktree-parallelism/results.html",
    code: "https://github.com/clv07/quicktree-parallelism"
  },
  {
    title: "ECG Heart Attack Detection",
    desc: "Built a two-pass LightGBM ensemble with GE Healthcare mentors that corrects heart attack misclassifications from GE’s 12SL algorithm.",    tags: ["AI/ML"],

    skills: ["Python", "SHAP", "Seaborn"],
    live: "",
    code: "https://github.com/clv07/stroke-of-luck"
  },
  {
    title: "Anime Data Explorer",
    desc: "Built an interactive app to filter and visualize a large anime dataset, with recommendations powered by principal component analysis (PCA).",
    tags: ["Data Science"],
    skills: ["R", "Shiny"],
    live: "https://clv07-anime-data-explorer.share.connect.posit.cloud",
    code: "https://github.com/clv07/anime-data-explorer/tree/main"
  },
  {
    title: "Car Resale Price Prediction",
    desc: "Built an interactive app to explore used car resale prices predicted by a regression model from mileage, brand and year.",
    tags: ["Data Science", "AI/ML"],
    skills: ["R", "Shiny"],
    live: "",
    code: "https://github.com/clv07/car-price-prediction"
  },
  {
    title: "VRent",
    desc: "Built a VR app that lets renters tour apartment layouts and place furniture in 3D before moving in.",
    tags: ["XR/VR"],
    skills: ["C#", "Unity", "XR Interaction Toolkit"],
    live: "https://youtu.be/eCcQL7RZvGs",
    code: "https://github.com/clv07/vrent"
  },
    {
    title: "Sample-Rate Independent RNNs",
    desc: "Compared four RNN oversampling methods on audio passed through a warped filter bank, measuring quality across four sample rates.",
    tags: ["AI/ML", "Signal Processing"],
    skills: ["Python", "MATLAB"],
    live: "",
    code: "https://github.com/clv07/ece251c"
  },
];
