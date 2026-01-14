export const personalInfo = {
  name: 'Yajat Narayan',
  role: 'Software Developer',
  tagline: 'Building VR training systems, scalable backend services, and privacy-focused applications',
  email: 'yajatnarayan@gmail.com',
  phone: '847-989-0521',
  location: 'Madison, WI',
  remotePreference: 'Remote-friendly',
  availability: 'Open to software engineering roles',
  linkedin: 'https://linkedin.com/in/yajat-narayan/',
  github: 'https://github.com/yajatnarayan/',
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
    timeframe: 'Aug 2025 – Dec 2025',
    role: 'Software Developer',
    focus: 'Unity, Swift, Xcode, VR Development',
    bullets: [
      'Solved critical training gap where pilots couldn\'t practice on live aircraft by developing VR training modules for $15M Air Force contract, enabling safe repetition of high-risk procedures and reducing equipment damage incidents',
      'Engineered real-time 3D spatial replay system using Apple Vision Pro sensor data with Euclidean transformations on Unity mesh models, achieving sub-centimeter positional accuracy for motion capture and training analysis',
      'Conducted user research with 15+ Air Force personnel in Agile sprints, translating operational requirements into technical specifications through iterative prototyping cycles, reducing design revision time by 40%',
    ],
  },
  {
    company: 'Siemens Industry Inc',
    location: 'Buffalo Grove, IL',
    timeframe: 'May 2025 – Aug 2025',
    role: 'Software Engineering Intern',
    focus: 'GoLang, AWS, Backend Development',
    bullets: [
      'Built secure data management microservices supporting ISO 27001 certification (audit passed), implementing compliant user data deletion and restoration workflows across DynamoDB handling 10,000+ enterprise clients',
      'Improved deletion/restoration efficiency by 80% by automating previously manual database operations, building scalable GoLang services to handle 100K+ data points per client with full audit logging',
      'Architected decoupled CI/CD pipeline with Git version control, enabling auditable infrastructure changes and eliminating manual deployment steps while maintaining compliance with security controls',
    ],
  },
  {
    company: 'Greeky',
    location: 'Remote',
    timeframe: 'Jun 2024 – Aug 2024',
    role: 'Frontend Developer',
    focus: 'React, Docker, JavaScript',
    bullets: [
      'Developed React components for Greek life platform serving 2000+ users, implementing lazy loading and code splitting that reduced page load time by 40% (3.2s to 1.9s), significantly improving user experience',
      'Containerized application with Docker and established CI/CD pipeline using GitHub Actions with automated testing, reducing deployment time from 45 to 8 minutes while improving release reliability',
    ],
  },
  {
    company: 'Codivate',
    location: 'Remote',
    timeframe: 'Jun 2020 – Aug 2021',
    role: 'Founder & Lead Instructor',
    focus: 'Java, Education Technology',
    bullets: [
      'Identified gap in accessible CS education for K-12 students during pandemic; launched coding startup, scaling to 10 tutors and 50+ students within 6 months while maintaining quality through standardized curriculum',
      'Tackled high dropout rates by redesigning curriculum around game development projects (Flappy Bird, Snake) instead of abstract exercises, increasing student retention by 30%',
    ],
  },
]

export const projects = [
  {
    title: 'UnoPass - Local-First Password Manager',
    tag: 'Security',
    description:
      'Privacy-focused password manager built as an alternative to cloud solutions after LastPass breaches. Features AES-256-GCM encryption, scrypt KDF (N=65,536), and HMAC-SHA256 verification achieving OWASP compliance. Chrome extension with autofill, rate limiting (5 attempts/15min), and auto-lock sessions.',
    pills: ['TypeScript', 'Node.js', 'React', 'Chrome Extension API'],
    link: personalInfo.github,
    cta: 'View repository',
  },
  {
    title: 'Handwritten Digit Recognition from Scratch',
    tag: 'AI',
    description:
      'Neural network built from scratch using only NumPy (no TensorFlow/PyTorch) to deeply understand ML fundamentals, implementing backpropagation and gradient descent from mathematical first principles. Full-stack demo with HTML5 Canvas for real-time drawing and Flask REST API for inference.',
    pills: ['Python', 'NumPy', 'Flask', 'JavaScript', 'HTML5 Canvas'],
    link: personalInfo.github,
    cta: 'View repository',
  },
]

export const skills = [
  {
    title: 'Languages',
    items: ['Python', 'Java', 'GoLang', 'C', 'JavaScript', 'TypeScript', 'Swift', 'SQL'],
  },
  {
    title: 'Frameworks',
    items: ['React', 'iOS', 'Node.js', 'Express', 'Flask', 'PyTorch', 'Unity'],
  },
  {
    title: 'Databases',
    items: ['DynamoDB', 'PostgreSQL', 'MongoDB'],
  },
  {
    title: 'DevOps & Cloud',
    items: ['AWS (Lambda, S3, EC2)', 'Docker', 'Git', 'CI/CD', 'Linux', 'Agile/Scrum', 'Testing', 'Debugging'],
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
