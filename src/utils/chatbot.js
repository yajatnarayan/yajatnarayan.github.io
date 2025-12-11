import { chatKnowledgeBase } from '../data/resume'

const profanityList = ['stupid', 'dumb', 'idiot', 'hate', 'suck']

const matchKeywords = (text, keywords) => keywords.some((keyword) => text.includes(keyword))

export function generateChatResponse(question) {
  const q = question.toLowerCase().trim()

  if (profanityList.some((word) => q.includes(word))) {
    return "Let's keep this professional. Ask me about Yajat's skills, experience, projects, availability, or contact info."
  }

  if (matchKeywords(q, ['experience', 'work history', 'role', 'job', 'career', 'worked'])) {
    const recent = chatKnowledgeBase.experience.slice(0, 3)
    const summary = recent
      .map((exp) => `${exp.role} at ${exp.company} (${exp.timeframe})`)
      .join('; ')
    return `Recent roles: ${summary}. Yajat focuses on VR training systems, frontend engineering, and cloud infrastructure with a product-minded approach. He's contributed to a $15M defense contract and built data pipelines processing 100k+ points.`
  }

  if (matchKeywords(q, ['vr', 'virtual reality', 'unity', 'holos', 'training'])) {
    return `Yajat is currently building immersive VR training software for the U.S. Air Force at Holos.io using Unity and Swift. He's reduced training time by 35% through interactive simulations and conducts user studies with service members to validate UX. This work is part of a $15M defense contract.`
  }

  if (matchKeywords(q, ['skill', 'stack', 'tech', 'tools', 'language', 'framework'])) {
    return `Core stack: ${chatKnowledgeBase.skills.slice(0, 10).join(', ')}, and more. Certified in AWS Cloud Practitioner, Network+, and Security+. Yajat works across VR (Unity, Swift), web (React, JavaScript), cloud (AWS, Docker, CI/CD), and data (DynamoDB, Go, Python).`
  }

  if (matchKeywords(q, ['project', 'portfolio', 'built', 'created', 'made'])) {
    const topProjects = chatKnowledgeBase.projects.slice(0, 2)
    const summary = topProjects
      .map((proj) => `${proj.title} (${proj.tag})`)
      .join('; ')
    return `Notable projects: ${summary}. These include VR training platforms, high-traffic marketing sites with SEO, deep learning models for scene recognition, and password security systems. Check the Projects section for case studies.`
  }

  if (matchKeywords(q, ['education', 'degree', 'school', 'university', 'studied', 'major'])) {
    return `${chatKnowledgeBase.education.school}, ${chatKnowledgeBase.education.timeline}. ${chatKnowledgeBase.education.details.join(', ')}. GPA: ${chatKnowledgeBase.education.gpa}. Coursework spans systems, AI/ML, data structures, and software engineering.`
  }

  if (matchKeywords(q, ['contact', 'reach', 'email', 'phone', 'get in touch', 'message'])) {
    return `Best way to reach Yajat: ${chatKnowledgeBase.contact}. He typically responds within one business day. Location: ${chatKnowledgeBase.location}.`
  }

  if (matchKeywords(q, ['available', 'availability', 'open', 'start date', 'hire', 'hiring'])) {
    return `${chatKnowledgeBase.availability}. He's particularly interested in roles that combine technical depth with product thinking, where he can collaborate with design and deliver user-facing impact. ${chatKnowledgeBase.location}.`
  }

  if (matchKeywords(q, ['why', 'fit', 'strength', 'value', 'what makes', 'stand out'])) {
    return `Yajat bridges product thinking with hands-on engineering. He's shipped VR training software, optimized high-traffic web apps, and built scalable CI/CD pipelines. He validates ideas through UX testing, collaborates closely with design, and focuses on measurable outcomes—like 35% efficiency gains and 45% downtime reductions.`
  }

  if (matchKeywords(q, ['certification', 'certified', 'aws', 'network', 'security'])) {
    return `Certifications: ${chatKnowledgeBase.certifications.join(', ')}. These validate Yajat's cloud infrastructure, networking, and security expertise—critical for building reliable, scalable systems.`
  }

  if (matchKeywords(q, ['location', 'where', 'based', 'remote'])) {
    return `${chatKnowledgeBase.location}. Yajat is open to remote-friendly opportunities and has experience collaborating with distributed teams.`
  }

  return "I can answer questions about Yajat's skills, experience, projects, education, availability, contact info, or why he'd be a strong fit for your team. What would you like to know?"
}
