import {
  type IconType,


  SiDocker,


  SiMongodb,
  SiMysql,
  SiNextdotjs,

  SiPostgresql,
  SiReact,
  SiRedis,

  SiTailwindcss,
  SiPython,
  SiDart,
  SiZig,
  SiGo,
  SiSupabase,
  SiFirebase,
  SiFlutter,
  SiTypescript,
  SiSqlite,
  SiPocketbase,
  SiFastapi,
  SiCsharp,
  SiTsnode,
  SiDotnet,
} from '@icons-pack/react-simple-icons'

const SKILLS: { field: string; skills: { skill: string; icon: IconType }[] }[] =
  [
    {
      field: 'Languages',
      skills: [
        {
          skill: 'python',
          icon: SiPython,
        },
        {
          skill: 'dart',
          icon: SiDart,
        },
        {
          skill: 'go',
          icon: SiGo,
        },
        {
          skill: 'zig',
          icon: SiZig,

        },
        {
          skill: 'typescript',
          icon: SiTypescript,
        },
        {
          skill: 'csharp',
          icon: SiCsharp
        },
      ],
    },
    {
      field: 'Backend',
      skills: [
        {
          skill: 'ts-node',
          icon: SiTsnode,
        },
        {
          skill: 'fastapi',
          icon: SiFastapi,
        },
        {
          skill: 'dotnet',
          icon: SiDotnet,
        },
        {
          skill: 'firebase',
          icon: SiFirebase,

        },
        {
          skill: 'supabase',
          icon: SiSupabase,
        },
        {
          skill: 'pocketbase',
          icon: SiPocketbase,
        },
        {
          skill: 'redis',
          icon: SiRedis,
        },
        {
          skill: 'postgresql',
          icon: SiPostgresql,
        },
        {
          skill: 'mongodb',
          icon: SiMongodb,
        },
        {
          skill: 'mysql',
          icon: SiMysql,
        },
        {
          skill: 'Sqlite',
          icon: SiSqlite,
        },
        {
          skill: 'docker',
          icon: SiDocker,
        },
      ]
    },
    {
      field: 'Frontend',
      skills: [
        { skill: 'nextjs', icon: SiNextdotjs },
        { skill: 'react', icon: SiReact },
        { skill: 'tailwind', icon: SiTailwindcss },
        { skill: 'flutter', icon: SiFlutter },
      ],
    },

  ]

export default SKILLS
