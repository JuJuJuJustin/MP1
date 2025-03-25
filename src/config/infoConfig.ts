export * from './projects'
export * from './education'
export * from './career'

// personal info
export const name = 'YuanYu Huang & Justin'
export const headline = 'A Cloud Engineer aspiring to become a Project Manager.'
export const introduction =
  "Coucou Les Amis! My name is YuanYu Huang, and you can call me Justin. I'm from Taiwan and an alumnus of Beijing University of Technology and Northeastern University. Majored in Electronic Information Engineering and pursued a Master's degree in Informatics with a focus on Cloud Computing."
export const email = 'huang.yuany@northeastern.edu'
export const githubUsername = 'JuJuJuJustin'

// about page
export const aboutMeHeadline = 'Who Are You and Why Should I Care?'
export const aboutParagraphs = [
  "Coucou Les Amis! My name is YuanYu Huang. I'm from Taiwan and an alumnus of Beijing University of Technology and Northeastern University. Majored in Electronic Information Engineering and pursued a Master's degree in Informatics with a focus on Cloud Computing.",
  'Currently, I’m learning how to lead and manage technology-driven projects. I’m serving as the Product Owner in a team project where we are building a personality test model to help match individuals with roles based on their unique traits. Through this role, I’m gaining hands-on experience in product strategy, team collaboration, agile development, and AI-driven product design.',
  "Many of our courses are centered around AWS and cloud technologies. I've taken highly practical classes such as Cloud Analytics, AWS Cloud Architecting, and Cloud Computing Applications and Management, which are designed to equip students with real-world skills through hands-on labs and project-based learning.",
]

// blog - Temporarily Hidden
// export const blogHeadLine = "What I've thinking about."
// export const blogIntro =
//   "I've written something about AI, programming and life."
// social links
export type SocialLinkType = {
  name: string
  ariaLabel?: string
  icon: string
  href: string
}

export const socialLinks: Array<SocialLinkType> = [
  {
    name: 'Instagram',
    icon: 'instagram',
    href: 'https://www.instagram.com/justin0212/',
  },
  /*
  {
    name: 'Bilibili',
    icon: 'bilibili',
    href: 'https://space.bilibili.com/349721082',
  },
  */
]

// https://simpleicons.org/
export const techIcons = [
  'typescript',
  'javascript',
  'supabase',
  'cloudflare',
  'java',
  'oracle',
  'mysql',
  'react',
  'nodedotjs',
  'nextdotjs',
  'prisma',
  'postgresql',
  'nginx',
  'vercel',
  'docker',
  'git',
  'github',
  'visualstudiocode',
  'androidstudio',
  'ios',
  'apple',
  'wechat',
]
