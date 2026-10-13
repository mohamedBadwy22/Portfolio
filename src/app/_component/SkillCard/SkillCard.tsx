
export default function SkillCard({ skill }: { skill: { name: string; icon: string };  }) {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-2 w-fit hover:scale-105 hover:shadow-lg hover:shadow-emerald-500 hover:outline-1 transition-all duration-300 ease-in-out p-2 rounded-lg">
        <i className={skill.icon}></i>
        <span className="text-lg font-bold">{skill.name}</span>
      </div>
    </>
  );
}
