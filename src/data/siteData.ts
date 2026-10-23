export interface Project {
  id: string;
  name: string;
  nameZh: string;
  description: string;
  descriptionZh: string;
  tech: string[];
  status: string;
  color: string;
  images?: string[];
}

export interface ResearchNote {
  id: string;
  title: string;
  date: string;
  summary: string;
  tags: string[];
}

export interface WorkflowStep {
  step: number;
  title: string;
  titleZh: string;
  description: string;
  descriptionZh: string;
}

export interface SkillTag {
  name: string;
  level: number;
}

export interface CareerEntry {
  period: string;
  company: string;
  role: string;
  highlights: string[];
}

export interface EducationEntry {
  school: string;
  schoolZh: string;
  degree: string;
  degreeZh: string;
  major: string;
  majorZh: string;
  period: string;
  highlights: string[];
  certificates: string[];
}

export interface PortfolioImage {
  src: string;
  title: string;
  category: string;
  description: string;
}

export interface GitHubProject {
  name: string;
  nameZh: string;
  description: string;
  descriptionZh: string;
  url: string;
  language: string;
  languageColor: string;
  stars: number;
  forks: number;
  tags: string[];
  status: 'Active' | 'Archived' | 'Research';
  lastUpdate: string;
}

// ===== HERO =====
export const heroTags = [
  'AI-Native', 'Game Design', 'Product Sense', 'LLM',
  'Data-Driven', 'Team Leadership', 'Full-Stack', 'Growth',
];

export const bioText = '关注 AI NPC、AI-UGC、情绪价值产品。把 AI 从「会聊天的玩具」拆成可验证的产品系统。';

// ===== METRICS =====
export const metrics = [
  { label: 'Gaming Experience', value: '16yr' },
  { label: 'Products Shipped', value: '9' },
  { label: 'Team Managed', value: '30+' },
  { label: 'Downloads (1B+)', value: '1B+' },
  { label: 'Revenue Peak', value: '$70W' },
  { label: 'Countries', value: '20+' },
];

// ===== PROJECTS =====
export const projects: Project[] = [
  {
    id: 'p1',
    name: 'AI Producer Pipeline',
    nameZh: 'AI 制作人工作流',
    description: 'An AI-native production pipeline that automates opportunity scouting, playtest review, demo risk sweep, and daily heartbeat reporting using LLM agents.',
    descriptionZh: '基于 LLM Agent 的制作人工作流自动化系统：机会发现、试玩反馈、Demo 风险扫描、每日心跳报告。',
    tech: ['OpenAI', 'LangChain', 'Python', 'TypeScript'],
    status: 'R&D',
    color: '#8A948D',
  },
  {
    id: 'p2',
    name: 'Tofu Survivor',
    nameZh: '豆腐生存者',
    description: 'A hyper-casual mobile game with AI-generated content pipeline, achieving $70W monthly revenue at peak.',
    descriptionZh: '超休闲手游，集成 AI 生成内容管线，峰值月流水 $70W。',
    tech: ['Unity', 'C#', 'AI-UGC', 'Firebase'],
    status: 'Live',
    color: '#6B7068',
  },
  {
    id: 'p3',
    name: 'Xuanchenjie',
    nameZh: '玄尘诀',
    description: 'An open-world RPG featuring hybrid LLM + rule-based NPC cognitive system with persistent memory and emotional modeling.',
    descriptionZh: '开放世界 RPG，混合 LLM + 规则驱动 NPC 认知系统，具备持久记忆与情绪建模。',
    tech: ['Unreal Engine', 'Python', 'LLM', 'Vector DB'],
    status: 'In Dev',
    color: '#4A524D',
  },
  {
    id: 'p4',
    name: 'NPC Cost Model',
    nameZh: 'NPC 成本模型',
    description: 'Research project optimizing LLM inference costs for game NPCs while maintaining narrative quality. 78% cost reduction achieved.',
    descriptionZh: '游戏 NPC 的 LLM 推理成本优化研究，在保持叙事质量前提下降低 78% 成本。',
    tech: ['Python', 'OpenAI API', 'Prompt Engineering'],
    status: 'Research',
    color: '#5C635C',
  },
  {
    id: 'p5',
    name: "Today's Private Quest",
    nameZh: '今天怎么玩',
    description: 'A lifestyle quest generator app for couples, friends, and solo adventurers. Android MVP built with Kotlin and Jetpack Compose.',
    descriptionZh: '面向情侣、朋友和独处用户的现实生活副本生成 App。Kotlin + Jetpack Compose 构建。',
    tech: ['Kotlin', 'Jetpack Compose', 'AI Product', 'MVP'],
    status: 'MVP',
    color: '#7A8279',
    images: ['/images/todayquest-3.png', '/images/todayquest-2.png', '/images/todayquest-1.png'],
  },
];

// ===== RESEARCH =====
export const researchNotes: ResearchNote[] = [
  {
    id: 'r1',
    title: 'AI-Native Game Design: Beyond Chatbots',
    date: '2025.03',
    summary: 'Exploring how LLMs can become core game mechanics rather than mere conversational interfaces. From prompt engineering to gameplay systems.',
    tags: ['AI-Native', 'Game Design', 'LLM'],
  },
  {
    id: 'r2',
    title: 'NPC Cognitive Architecture',
    date: '2025.01',
    summary: 'A hybrid approach combining rule-based behavior trees with LLM reasoning for believable, cost-effective NPCs in open-world games.',
    tags: ['NPC AI', 'Architecture', 'Cost Optimization'],
  },
  {
    id: 'r3',
    title: 'Emotional Value Products',
    date: '2024.11',
    summary: 'Why players stick: analyzing the emotional hooks that drive retention in modern mobile and social games.',
    tags: ['Retention', 'Psychology', 'Product'],
  },
  {
    id: 'r4',
    title: 'AI-UGC Pipeline for Hyper-Casual',
    date: '2024.08',
    summary: 'Building automated content generation pipelines that reduce production costs by 60% while maintaining player engagement.',
    tags: ['AI-UGC', 'Pipeline', 'Automation'],
  },
  {
    id: 'r5',
    title: 'From Producer to AI Operator',
    date: '2024.05',
    summary: 'How AI tools are reshaping the game producer role: from intuition-driven to data-augmented decision making.',
    tags: ['Career', 'AI Tools', 'Leadership'],
  },
];

// ===== WORKFLOW =====
export const workflowSteps: WorkflowStep[] = [
  {
    step: 1,
    title: 'Discover',
    titleZh: '发现',
    description: 'AI-powered opportunity scouting across market data, player sentiment, and tech trends.',
    descriptionZh: 'AI 驱动的市场机会发现，整合市场数据、玩家情绪与技术趋势。',
  },
  {
    step: 2,
    title: 'Validate',
    titleZh: '验证',
    description: 'Rapid prototype validation using AI-assisted playtesting and synthetic user feedback.',
    descriptionZh: 'AI 辅助试玩验证与合成用户反馈，快速验证原型可行性。',
  },
  {
    step: 3,
    title: 'Design',
    titleZh: '设计',
    description: 'AI-augmented game design: from narrative generation to level design and economy balancing.',
    descriptionZh: 'AI 增强的游戏设计：叙事生成、关卡设计、经济平衡。',
  },
  {
    step: 4,
    title: 'Build',
    titleZh: '构建',
    description: 'Agile development with AI coding assistants, automated testing, and CI/CD pipelines.',
    descriptionZh: 'AI 编程助手辅助的敏捷开发、自动化测试与 CI/CD 管线。',
  },
  {
    step: 5,
    title: 'Launch',
    titleZh: '上线',
    description: 'Data-driven soft launch with AI-powered UA optimization and real-time analytics.',
    descriptionZh: '数据驱动的软上线，AI 优化用户获取与实时数据分析。',
  },
  {
    step: 6,
    title: 'Evolve',
    titleZh: '进化',
    description: 'Continuous live-ops with AI-generated content, A/B testing, and player sentiment monitoring.',
    descriptionZh: 'AI 生成内容驱动的持续运营、A/B 测试与玩家情绪监控。',
  },
];

// ===== SKILLS =====
export const skillTags: SkillTag[] = [
  { name: 'Game Production', level: 92 },
  { name: 'AI/LLM Integration', level: 88 },
  { name: 'Product Strategy', level: 85 },
  { name: 'Data Analytics', level: 80 },
  { name: 'Team Leadership', level: 78 },
  { name: 'Full-Stack Dev', level: 75 },
  { name: 'Game Design', level: 90 },
  { name: 'Growth Hacking', level: 82 },
];

// ===== CAREER TIMELINE =====
export const careerTimeline: CareerEntry[] = [
  {
    period: '2023 - Present',
    company: 'Glacier Network / 冰川网络',
    role: 'AI Producer',
    highlights: [
      '负责 AI 原生游戏产品线，从 0 到 1 搭建 AI 制作流程',
      '主导玄尘诀项目，设计混合 LLM + 规则 NPC 认知系统',
      '建立 AI-UGC 内容管线，降低 60% 生产成本',
      '搭建数据驱动的产品决策体系，DAU 提升 35%',
    ],
  },
  {
    period: '2021 - 2023',
    company: 'Dayu Infinite / 大宇无限',
    role: 'Senior Producer',
    highlights: [
      '负责超休闲游戏矩阵，峰值月流水 $70W',
      '搭建 AI 辅助内容生成系统，提升 3 倍产能',
      '管理 30+ 人研发团队，涵盖策划、程序、美术',
      '主导 3 款游戏从立项到全球上线',
    ],
  },
  {
    period: '2019 - 2021',
    company: 'Yile Interactive / 宜乐互娱',
    role: 'Game Producer',
    highlights: [
      '负责中重度手游产品，累计下载量破亿',
      '设计并落地核心玩法与经济系统',
      '建立玩家社群运营体系，留存提升 25%',
      '主导跨部门协作流程优化',
    ],
  },
  {
    period: '2017 - 2019',
    company: 'Yinnuo / 寅诺',
    role: 'Product Manager',
    highlights: [
      '负责社交游戏产品，DAU 突破 500 万',
      '设计病毒式传播机制，新增成本降低 40%',
      '建立 A/B 测试平台，迭代效率提升 50%',
    ],
  },
  {
    period: '2014 - 2017',
    company: 'Cheetah Mobile / 猎豹移动',
    role: 'Game Producer',
    highlights: [
      '负责工具类游戏产品矩阵，覆盖 20+ 国家',
      '搭建全球化发行体系，海外收入占比 60%',
      '主导 LiveOps 系统建设，LTV 提升 30%',
    ],
  },
  {
    period: '2011 - 2014',
    company: 'Alibaba / 阿里巴巴',
    role: 'Product Specialist',
    highlights: [
      '负责淘宝游戏化产品，用户活跃度提升 20%',
      '搭建数据监控与报警系统',
      '参与双十一游戏化营销活动设计',
    ],
  },
];

// ===== EDUCATION =====
export const education: EducationEntry[] = [
  {
    school: 'National University of Singapore',
    schoolZh: '新加坡国立大学',
    degree: 'Master of Computing',
    degreeZh: '计算机硕士',
    major: 'Artificial Intelligence',
    majorZh: '人工智能',
    period: '2009 - 2011',
    highlights: [
      '专注机器学习与游戏 AI 研究',
      '发表 2 篇关于 NPC 行为建模的论文',
      '参与新加坡-香港联合 AI 游戏研究项目',
    ],
    certificates: ['Dean\'s List', 'Research Scholarship', 'NUS AI Lab'],
  },
  {
    school: 'Hunan Agricultural University',
    schoolZh: '湖南农业大学',
    degree: 'Bachelor',
    degreeZh: '本科',
    major: 'Computer Science',
    majorZh: '计算机科学与技术',
    period: '2005 - 2009',
    highlights: [
      '校 ACM 程序设计竞赛队长',
      '开发校园社交 App，获得省级创业大赛金奖',
      'GPA 3.8/4.0，专业排名前 5%',
    ],
    certificates: ['ACM-ICPC Regional', 'Provincial Innovation Award', 'Outstanding Graduate'],
  },
];

// ===== PLAYER PROFILES =====
export const playerProfiles = [
  {
    category: 'Core Gamer',
    games: ['Elden Ring', 'Baldur\'s Gate 3', 'Hades', 'Celeste'],
    insight: '偏好高难度、强叙事、高重玩价值的游戏。关注游戏机制深度与情感共鸣。',
  },
  {
    category: 'Mobile Player',
    games: ['Genshin Impact', 'Honkai: Star Rail', 'Arknights', 'AFK Arena'],
    insight: '关注移动端的碎片化体验与长期留存设计。对抽卡经济系统和 LiveOps 有深度理解。',
  },
  {
    category: 'Indie Explorer',
    games: ['Disco Elysium', 'Outer Wilds', 'Return of the Obra Dinn', 'Inscryption'],
    insight: '热衷实验性游戏设计，关注 AI 如何赋能小团队创造大体验。',
  },
];

// ===== CORE CAPABILITIES =====
export const coreCapabilities = [
  {
    category: 'Game Production',
    items: ['Full Lifecycle', 'Agile/Scrum', 'Resource Planning', 'Risk Management', 'Cross-functional Leadership'],
  },
  {
    category: 'AI Integration',
    items: ['LLM Prompt Engineering', 'AI-Native Design', 'NPC Behavior Systems', 'AI-UGC Pipelines', 'Cost Optimization'],
  },
  {
    category: 'Product Strategy',
    items: ['Market Analysis', 'Player Research', 'Monetization Design', 'Growth Strategy', 'Data-Driven Decisions'],
  },
  {
    category: 'Technical',
    items: ['Unity', 'Unreal Engine', 'Python', 'TypeScript', 'Vector Databases', 'Firebase'],
  },
  {
    category: 'Data & Analytics',
    items: ['SQL', 'Python Pandas', 'A/B Testing', 'Cohort Analysis', 'LTV Modeling', 'Tableau'],
  },
  {
    category: 'Leadership',
    items: ['Team Building', 'Mentorship', 'Stakeholder Management', 'Crisis Management', 'Remote Team Management'],
  },
];

// ===== ABOUT =====
export const aboutBio = '我是 Masha Zhou，一名拥有 16 年游戏行业经验的 AI 游戏制作人。从阿里巴巴到冰川网络，我经历了从运营到制作人、从传统游戏到 AI 赋能的完整转型。我相信 AI 不仅是工具，更是下一代游戏的核心玩法。我的目标是构建 AI-Native 的游戏体验，让每一次交互都独一无二。';

// ===== CONTACT =====
export const contactInfo = {
  email: '442770520@qq.com',
  wechat: '442770520',
  portfolio: 'replace-me',
};

// ===== CAROUSEL =====
export const carouselProjects = [
  { id: 'c1', title: 'AI Pipeline', subtitle: 'Production System', color: '#8A948D' },
  { id: 'c2', title: 'Tofu Survivor', subtitle: '$70W Revenue', color: '#6B7068' },
  { id: 'c3', title: 'Xuanchenjie', subtitle: 'LLM RPG', color: '#4A524D' },
  { id: 'c4', title: 'NPC Cost Model', subtitle: 'Research', color: '#5C635C' },
  { id: 'c5', title: "Today's Quest", subtitle: 'Lifestyle MVP', color: '#7A8279' },
];

// ===== GITHUB PROJECTS =====
export const githubProjects: GitHubProject[] = [
  {
    name: '5050-game-innovation-lab',
    nameZh: '5050 游戏创新孵化库',
    description: 'A curated game innovation incubator database. 75+ playable samples, 1505+ industry articles, and an AI copilot for game concept validation.',
    descriptionZh: '游戏创新孵化数据库，收录 75+ 可玩样本、1505+ 行业文章，配备 AI 创意验证助手。',
    url: 'https://github.com/masha19890829-netizen/5050-game-innovation-lab',
    language: 'TypeScript',
    languageColor: '#3B82F6',
    stars: 47,
    forks: 12,
    tags: ['React', 'AI Copilot', 'Game Research', 'Netlify'],
    status: 'Active',
    lastUpdate: '2025.12',
  },
  {
    name: 'todays-quest-app',
    nameZh: '今天怎么玩 / Today\'s Private Quest',
    description: 'A lifestyle quest generator app for couples, friends, and solo adventurers. Kotlin + Jetpack Compose MVP with AI-ready architecture.',
    descriptionZh: '面向情侣、朋友和独处用户的现实生活副本生成 App。Kotlin + Jetpack Compose 构建，预留 AI 生成接口。',
    url: 'https://github.com/masha19890829-netizen/todays-quest',
    language: 'Kotlin',
    languageColor: '#A855F7',
    stars: 23,
    forks: 5,
    tags: ['Kotlin', 'Jetpack Compose', 'AI Product', 'MVP'],
    status: 'Active',
    lastUpdate: '2025.08',
  },
  {
    name: 'ai-npc-cognitive-framework',
    nameZh: 'AI NPC 认知框架',
    description: 'Hybrid LLM + rule-based NPC behavior system for persistent open-world RPGs. 78% cost reduction with 4.2/5.0 believability score.',
    descriptionZh: '混合 LLM + 规则驱动的 NPC 行为系统，用于持久化开放世界 RPG。推理成本降低 78%，可信度评分 4.2/5.0。',
    url: 'https://github.com/masha19890829-netizen/ai-npc-framework',
    language: 'Python',
    languageColor: '#F59E0B',
    stars: 156,
    forks: 34,
    tags: ['Python', 'LLM', 'NPC AI', 'OpenAI', 'RPG'],
    status: 'Research',
    lastUpdate: '2026.01',
  },
  {
    name: 'ai-producer-os',
    nameZh: 'AI Producer OS',
    description: 'Codex-powered producer workflow automation. Opportunity Scout, Playtest Review, Demo Risk Sweep, and Daily Heartbeat modules.',
    descriptionZh: '基于 Codex 的制作人工作流自动化系统。包含机会发现、试玩反馈、Demo 风险扫描和每日心跳四大模块。',
    url: 'https://github.com/masha19890829-netizen/ai-producer-os',
    language: 'TypeScript',
    languageColor: '#3B82F6',
    stars: 89,
    forks: 21,
    tags: ['Codex', 'AI Workflow', 'Game Production', 'Automation'],
    status: 'Active',
    lastUpdate: '2025.11',
  },
  {
    name: 'relic-hunter-design-kit',
    nameZh: '遗迹猎人设计套件',
    description: 'Complete game design document kit: 6 chapter floating islands, 54 levels, 810 nodes, full UX flow maps and combat operation guides.',
    descriptionZh: '完整游戏设计文档套件：6 章节浮岛、54 关卡、810 节点、完整 UX 流程图和战斗操作指南。',
    url: 'https://github.com/masha19890829-netizen/relic-hunter-design',
    language: 'Markdown',
    languageColor: '#EC4899',
    stars: 34,
    forks: 8,
    tags: ['Game Design', 'Level Design', 'AI-Assisted', 'Docs'],
    status: 'Archived',
    lastUpdate: '2025.06',
  },
];

// ===== PORTFOLIO IMAGES =====
export const portfolioImages: PortfolioImage[] = [
  {
    src: '/portfolio/6639.png',
    title: 'Relic Hunter - Chapter Design',
    category: 'Game Design',
    description: '6章节浮岛设计，54关卡，810节点',
  },
  {
    src: '/portfolio/6640.png',
    title: 'Relic Hunter - UX Flow',
    category: 'UX Design',
    description: '完整UX流程图与战斗操作指南',
  },
  {
    src: '/portfolio/6641.png',
    title: 'Relic Hunter - Level Design',
    category: 'Level Design',
    description: '关卡设计文档与数值平衡',
  },
  {
    src: '/portfolio/6642.png',
    title: 'Relic Hunter - Combat System',
    category: 'Game System',
    description: '战斗系统设计文档',
  },
  {
    src: '/portfolio/6643.png',
    title: 'Relic Hunter - Narrative Design',
    category: 'Narrative',
    description: '叙事设计与世界观构建',
  },
];

// ===== MANIFESTO =====
export const manifestoText = `AI 不是替代品，而是新介质。

我们相信，下一代游戏的灵魂在于：
每一个 NPC 都有自己的记忆与情感，
每一次对话都不可复制，
每一个世界都在玩家的参与下持续演化。

这不是科幻，这是正在发生的产品革命。`;

// ===== BILIBILI =====
export const bilibiliData = {
  uid: '237167264',
  nickname: 'Yi球入魂',
  signature: '日常黑三喵不是我真心，￣□￣｜｜',
  level: 'Lv.6',
  fans: '2.74万',
  plays: '580万+',
  badge: '知名偶像',
  url: 'https://space.bilibili.com/237167264',
};
