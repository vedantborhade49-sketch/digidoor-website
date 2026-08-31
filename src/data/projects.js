export const projects = [
  {
    slug: "conceptual-01",
    title: "Residential Launch",
    category: "PROJECT MARKETING",
    client: "CONCEPTUAL PORTFOLIO VISUAL",
    location: "Metropolitan",
    year: "2026",
    heroImage: "/images/work/project_01.png",
    overview: "A strategic creative system built around the project.",
    layout: "featured",
    featured: true,
  },
  {
    slug: "conceptual-02",
    title: "Residential Identity",
    category: "BRAND + COMMUNICATION",
    client: "CONCEPTUAL PORTFOLIO VISUAL",
    location: "Global",
    year: "2026",
    heroImage: "/images/work/project_02.png",
    overview: "A complete visual language for a modern residential idea.",
    layout: "right",
    featured: true,
  },
  {
    slug: "conceptual-03",
    title: "Project Marketing",
    category: "DIGITAL EXPERIENCE",
    client: "CONCEPTUAL PORTFOLIO VISUAL",
    location: "Urban Core",
    year: "2026",
    heroImage: "/images/work/project_04.png", // Using wide angle for full bleed
    overview: "Building the digital ecosystem that drives demand.",
    layout: "full",
    featured: true,
  },
  {
    slug: "conceptual-04",
    title: "Architecture, translated into a brand.",
    category: "CREATIVE DIRECTION",
    client: "CONCEPTUAL PORTFOLIO VISUAL",
    location: "Detail",
    year: "2026",
    heroImage: "/images/work/project_03.png", // Architectural detail
    overview: "Finding the geometric language inside the structure.",
    layout: "split",
    featured: true,
  },
  {
    slug: "conceptual-05",
    title: "Creative System",
    category: "DIGITAL CAMPAIGN",
    client: "CONCEPTUAL PORTFOLIO VISUAL",
    location: "Abstract",
    year: "2026",
    heroImage: "/images/work/project_06.png", // Abstract visual
    overview: "A connected network of strategy and creative execution.",
    layout: "dark",
    featured: true,
  }
];

export const getCategories = () => {
  const cats = new Set(projects.map(p => p.category));
  return ['ALL', ...Array.from(cats)];
};
