import { socialLinks } from "../data/data";

const MainButton = () => {
  return (
    <>
      {socialLinks.map((item) => (
        <a
        href={item.url}
        target="_blank"
        rel="noopener noreferrer"
        key={item.id}
        className="relative text-mText text-l bg-btnBg text-center w-60 py-2 px-8 rounded-lg font-manrope font-bold tracking-widest overflow-hidden group hover:-translate-y-0.5 hover:scale-105 transition duration-300 ease-in-out"
      >
        <span
          className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-hText animate-border group-hover:animate-border-loop"
        ></span>
        <span className="relative z-10">{item.text}</span>
      </a>
      
      
      ))}
    </>
  );
};

export default MainButton;
