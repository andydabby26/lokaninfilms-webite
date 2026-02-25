export interface Project {
  id: string;
  title: string;
  year: string;
  role: string;
  format: string;
  image: string;
  thumbnail?: string;
  description: string;
  videoUrl?: string;
  note?: string;
  credits?: { role: string; name: string }[];
}

export const projects: Project[] = [
  {
    id: "golden-hours",
    title: "Golden Hours",
    year: "2025",
    role: "Director",
    format: "Short film",
    image: "/images/project-golden-hours-beach.jpg",
    thumbnail: "/images/hero-golden-hours.jpg",
    videoUrl: "https://www.youtube.com/embed/xhMJWNTb5-w",
    description: "", // Removed per task 23
    note: "I wanted to capture the feeling of a memory fading—that specific light that only exists for a few minutes each day. Golden Hours is an exploration of silence and the unsaid.",
    credits: [
      { role: "Director", name: "Andreas Daban Elvesund" },
      { role: "Cinematography", name: "Andreas Daban Elvesund" },
      { role: "Music", name: "Golden Hour - JVKE" }
    ]
  },
  {
    id: "deaf-kid-murderer",
    title: "The deaf kid and the murderer",
    year: "2022",
    role: "Director",
    format: "Short film",
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1925&auto=format&fit=crop",
    description: "",
    note: "This project was a study in sound design and its absence. How do we perceive threat when one of our primary senses is removed?",
    credits: [
      { role: "Director", name: "Andreas Daban Elvesund" }
    ]
  },
  {
    id: "instagram",
    title: "Instagram",
    year: "2022",
    role: "Director",
    format: "Short film",
    image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=2070&auto=format&fit=crop",
    description: "",
    note: "Instagram explores the curated versions of ourselves we present to the world, and the messy reality that lies beneath the surface.",
    credits: [
      { role: "Director", name: "Andreas Daban Elvesund" }
    ]
  },
  {
    id: "thomas-terror",
    title: "Thomas Terror",
    year: "2020",
    role: "Director",
    format: "Short film",
    image: "https://images.unsplash.com/photo-1500462859194-8111aa56f4d1?q=80&w=1887&auto=format&fit=crop",
    description: "",
    note: "One of my first attempts at creating a specific mood through framing and lighting. It laid the foundation for my current observational style.",
    credits: [
      { role: "Director", name: "Andreas Daban Elvesund" }
    ]
  }
];
