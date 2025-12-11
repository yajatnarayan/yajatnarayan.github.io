export const personalInfo = {
  name: 'Yajat Narayan',
  role: 'Software Developer',
  tagline: 'Building VR training systems, data-driven web apps, and scalable cloud infrastructure',
  email: 'yajatnarayan@gmail.com',
  location: 'Madison, WI',
  remotePreference: 'Remote-friendly',
  availability: 'Open to frontend, VR, and product-focused engineering roles',
  linkedin: 'https://www.linkedin.com/in/yajat-narayan-905926245/',
  github: 'https://github.com/yajatnarayan',
}

export const navigation = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
  { id: 'chat', label: 'Chat' },
]

export const experiences = [
  {
    company: 'Holos.io',
    location: 'Madison, WI',
    timeframe: 'Aug 2024 – Present',
    role: 'Software Developer',
    focus: 'VR Development, Unity, Swift, Figma Prototyping, UX Testing',
    bullets: [
      'Building immersive VR training modules for U.S. Air Force equipment operations using Unity and Swift, reducing training time by 35% through interactive simulations',
      'Contributing to a $15M defense contract by conducting user studies, rapid prototyping, and UX validation with service members',
      'Collaborating with cross-functional teams to iterate on design systems in Figma and translate them into functional VR interfaces',
    ],
  },
  {
    company: 'Moon Bar',
    location: 'Madison, WI',
    timeframe: 'Sep 2024 – Oct 2024',
    role: 'Web Developer',
    focus: 'JavaScript, HTML/CSS, SEO, Analytics, Figma',
    bullets: [
      'Delivered a marketing-focused website with integrated analytics tracking and SEO optimization, driving measurable engagement improvements',
      'Increased organic visibility by 60% through structured data, meta optimization, and performance tuning, contributing to $50k+ monthly revenue',
    ],
  },
  {
    company: 'Siemens Industry Inc',
    location: 'Buffalo Grove, IL',
    timeframe: 'May 2024 – Aug 2024',
    role: 'Software Developer Intern',
    focus: 'AWS, DynamoDB, CI/CD, Go, Automation, Data Processing',
    bullets: [
      'Architected a decoupled CI/CD pipeline for processing 100k+ data points, leveraging AWS Lambda, DynamoDB, and Go for async workflows',
      'Improved data throughput by 35% and reduced deployment downtime by 45% through automated validation and continuous delivery practices',
      'Documented system architecture and onboarding materials to streamline team collaboration',
    ],
  },
  {
    company: 'Greeky',
    location: 'Remote',
    timeframe: 'Jun 2023 – Aug 2023',
    role: 'Web Developer',
    focus: 'React, Docker, CI/CD, Frontend Optimization',
    bullets: [
      'Built responsive React UIs and set up Dockerized deployment pipelines for consistent production environments',
      'Reduced page load times by 40% through code splitting, lazy loading, and image optimization, supporting $2k first-month revenue',
    ],
  },
  {
    company: 'Codivate',
    location: 'Remote',
    timeframe: 'Jun 2020 – Aug 2021',
    role: 'Founder & Instructor',
    focus: 'Java, Curriculum Design, Education Management',
    bullets: [
      'Designed and taught K-12 Java curriculum to 50+ students while managing a team of 10 tutors, achieving 30% retention improvement',
    ],
  },
]

export const projects = [
  {
    title: 'Holos VR Training Platform',
    tag: 'VR',
    description:
      'Immersive VR training software built with Unity and Swift to streamline U.S. Air Force equipment training, reducing onboarding time and operational risk through realistic simulations.',
    pills: ['Unity', 'Swift', 'UX Testing', 'Figma'],
    link: personalInfo.linkedin,
    cta: 'View profile',
  },
  {
    title: 'Moon Bar Digital Experience',
    tag: 'Web',
    description:
      'High-performance marketing site with integrated analytics and SEO optimization, driving $50k+ monthly sales for a hospitality business through improved discoverability and conversion.',
    pills: ['JavaScript', 'SEO', 'Analytics', 'Figma'],
    link: personalInfo.github,
    cta: 'Explore code',
  },
  {
    title: 'Deep Learning Scene Recognition',
    tag: 'AI',
    description:
      'LeNet-5 convolutional neural network implemented in PyTorch for the MiniPlaces dataset, achieving 25%+ validation accuracy improvement through data augmentation and hyperparameter tuning.',
    pills: ['Python', 'PyTorch', 'CNN', 'Data Pipelines'],
    link: 'https://github.com/yajatnarayan/NeuralNetwork',
    cta: 'View repository',
  },
  {
    title: 'Password Security Analysis',
    tag: 'Security',
    description:
      'Password hardening system using Argon2 hashing, breach detection via HaveIBeenPwned API, and simulated dictionary attacks—reducing vulnerability by 80% in security audits.',
    pills: ['Python', 'Argon2', 'Security APIs'],
    link: personalInfo.github,
    cta: 'Explore code',
  },
]

export const skills = [
  {
    title: 'Programming',
    items: ['Python', 'Java', 'Go', 'Swift', 'C', 'JavaScript/React', 'SQL/MySQL', 'Julia'],
  },
  {
    title: 'Cloud & Ops',
    items: ['AWS', 'Docker', 'CI/CD', 'DynamoDB', 'Git', 'Lambda', 'Automation Pipelines'],
  },
  {
    title: 'Product & Tools',
    items: ['Figma', 'UX Testing', 'Analytics/SEO', 'Linear', 'VS Code', 'PyCharm', 'Eclipse'],
  },
]

export const education = {
  school: 'University of Wisconsin–Madison',
  timeline: 'Aug 2022 – May 2026',
  details: ['B.S. Computer Science', 'Minor: Mathematics'],
  gpa: '3.7/4.0',
}

export const certifications = [
  { label: 'AWS Cloud Practitioner', href: 'https://www.credly.com/badges', verified: true },
  { label: 'CompTIA Network+', href: 'https://www.credly.com/badges', verified: true },
  { label: 'CompTIA Security+', href: 'https://www.credly.com/badges', verified: true },
]

export const marqueeItems = [
  ...certifications,
  { label: 'Unity VR', href: 'https://unity.com/' },
  { label: 'Swift', href: 'https://developer.apple.com/swift/' },
  { label: 'React', href: 'https://react.dev/' },
  { label: 'Go', href: 'https://go.dev/' },
  { label: 'Docker', href: 'https://www.docker.com/' },
  { label: 'CI/CD Pipelines', href: 'https://12factor.net/' },
  { label: 'Analytics & SEO', href: 'https://developers.google.com/analytics' },
  { label: 'PyTorch', href: 'https://pytorch.org/' },
  { label: 'Figma Systems', href: 'https://www.figma.com/' },
]

export const chatGreeting = {
  role: 'assistant',
  text: "Hi, I'm Yajat's hiring assistant. Ask me about his experience, skills, availability, or fit for your role. I stay focused on professional topics.",
}

export const quickQuestions = [
  "Tell me about your VR experience",
  "What's your tech stack?",
  "Are you available for roles?",
  "How can I contact you?",
]

export const chatKnowledgeBase = {
  summary: `Software Developer specializing in VR training systems, frontend engineering, and cloud infrastructure. Currently building immersive training software for U.S. Air Force operations at Holos.io using Unity and Swift. AWS Cloud Practitioner, Network+, and Security+ certified.`,
  experience: experiences,
  skills: skills.flatMap((group) => group.items),
  education: education,
  certifications: certifications.map((c) => c.label),
  contact: personalInfo.email,
  availability: personalInfo.availability,
  location: `${personalInfo.location} · ${personalInfo.remotePreference}`,
  projects: projects,
}
