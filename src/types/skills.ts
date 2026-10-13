export interface Skill {
  name: string;
  icon: string;
}

export interface Skills {
  frontend: Skill[];
  backend: Skill[];
  tools: Skill[];
}

export type SkillCategory = keyof Skills;
