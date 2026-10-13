export default function AboutCard({
  card,
}: {
  card: { iconComponent: React.ReactNode; title: string; description: string };
}) {
  return (
    <>
      <div className="hover:scale-105 p-4 border-emerald-500 dark:border-emerald-800 rounded-lg shadow-sm shadow-emerald-500 flex items-center gap-4 transition-all duration-300">
        <div className="text-emerald-500 text-3xl p-2 rounded-full bg-gray-200">
          {card.iconComponent}
        </div>
        <div className="flex flex-col gap-1">
          <h4 className="font-bold">{card.title}</h4>
          <p className="text-sm text-gray-400">{card.description}</p>
        </div>
      </div>
    </>
  );
}
