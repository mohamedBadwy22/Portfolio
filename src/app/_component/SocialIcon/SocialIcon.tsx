export default function SocialIcon({
  name,
  href,
  icon,
}: {
  name: string;
  href: string;
  icon: React.ReactNode;
}) {
  return (
    <>
      <a
        aria-label={`Link to ${name}`}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="outline-emerald-500 dark:outline-emerald-800 outline-2 text-emerald-500 dark:text-emerald-800 hover:outline-black p-2 rounded-full hover:text-black dark:hover:text-white font-medium hover:cursor-pointer hover:bg-gray-400 dark:hover:bg-emerald-500 transition-all duration-300"
      >
        {icon}
      </a>
    </>
  );
}
