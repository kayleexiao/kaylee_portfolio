// Ordered tech icons for carousel display
export const techIcons = [
  { name: 'Python', icon: 'tech-python' as const },
  { name: 'Java', icon: 'tech-java' as const },
  { name: 'SQL', icon: 'tech-mysql' as const }, // Using mysql icon for SQL
  { name: 'JavaScript', icon: 'tech-js' as const },
  { name: 'HTML', icon: 'tech-html' as const },
  { name: 'CSS', icon: 'tech-css' as const },
  { name: 'Dart', icon: 'tech-dart' as const },
  { name: 'Git', icon: 'tech-git' as const },
  { name: 'GitHub', icon: 'tech-github' as const },
  { name: 'React', icon: 'tech-react' as const },
  { name: 'Node.js', icon: 'tech-node' as const },
  { name: 'Flutter', icon: 'tech-flutter' as const },
  { name: 'Django', icon: 'tech-django' as const },
  { name: 'PyTorch', icon: 'tech-pytorch' as const },
  // Note: tech-figma.svg not available, using available icons only
] as const

export type TechIcon = typeof techIcons[number]
