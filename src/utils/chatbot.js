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

  if (matchKeywords(q, ['vr', 'virtual reality', 'unity', 'holos', 'training', 'vision pro'])) {
    return `At Holos.io, Yajat developed VR training modules for a $15M Air Force contract, enabling pilots to safely practice high-risk procedures. He engineered a real-time 3D spatial replay system using Apple Vision Pro with sub-centimeter positional accuracy and conducted user research with 15+ Air Force personnel in Agile sprints.`
  }

  if (matchKeywords(q, ['skill', 'stack', 'tech', 'tools', 'language', 'framework'])) {
    return `Core stack: ${chatKnowledgeBase.skills.slice(0, 10).join(', ')}, and more. Yajat works across VR (Unity, Swift, Apple Vision Pro), backend (GoLang, Node.js, AWS), web (React, TypeScript), and databases (DynamoDB, PostgreSQL, MongoDB).`
  }

  if (matchKeywords(q, ['project', 'portfolio', 'built', 'created', 'made'])) {
    const topProjects = chatKnowledgeBase.projects.slice(0, 2)
    const summary = topProjects
      .map((proj) => `${proj.title} (${proj.tag})`)
      .join('; ')
    return `Notable projects: ${summary}. UnoPass is a privacy-focused local-first password manager with AES-256-GCM encryption and OWASP compliance. The digit recognition project implements a neural network from scratch using only NumPy. Check the Projects section for details.`
  }

  if (matchKeywords(q, ['education', 'degree', 'school', 'university', 'studied', 'major'])) {
    return `${chatKnowledgeBase.education.school}, ${chatKnowledgeBase.education.timeline}. ${chatKnowledgeBase.education.details.join(', ')}. Coursework spans systems, AI/ML, data structures, and software engineering.`
  }

  if (matchKeywords(q, ['contact', 'reach', 'email', 'phone', 'get in touch', 'message'])) {
    return `Best way to reach Yajat: ${chatKnowledgeBase.contact}. He typically responds within one business day. Location: ${chatKnowledgeBase.location}.`
  }

  if (matchKeywords(q, ['available', 'availability', 'open', 'start date', 'hire', 'hiring'])) {
    return `${chatKnowledgeBase.availability}. He's particularly interested in roles that combine technical depth with product thinking, where he can collaborate with design and deliver user-facing impact. ${chatKnowledgeBase.location}.`
  }

  if (matchKeywords(q, ['why', 'fit', 'strength', 'value', 'what makes', 'stand out'])) {
    return `Yajat bridges product thinking with hands-on engineering. He's shipped VR training systems for a $15M Air Force contract, built secure microservices at Siemens supporting ISO 27001 compliance, and created privacy-focused applications. He focuses on measurable outcomes—like 80% efficiency improvements and 40% faster page loads.`
  }

  if (matchKeywords(q, ['siemens', 'backend', 'golang', 'microservice', 'aws'])) {
    return `At Siemens, Yajat built secure GoLang microservices supporting ISO 27001 certification, implementing compliant user data deletion and restoration workflows across DynamoDB for 10,000+ enterprise clients. He improved efficiency by 80% through automation and architected a decoupled CI/CD pipeline.`
  }

  if (matchKeywords(q, ['location', 'where', 'based', 'remote'])) {
    return `${chatKnowledgeBase.location}. Yajat is open to remote-friendly opportunities and has experience collaborating with distributed teams.`
  }

  return "I can answer questions about Yajat's skills, experience, projects, education, availability, contact info, or why he'd be a strong fit for your team. What would you like to know?"
}
