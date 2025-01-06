import { socialLinks } from "../data/data";

const MainButton = () => {
  return (
    <>
      {socialLinks.map((item) => (
        <a href={item.url} target="_blank" rel="noopener noreferrer" key={item.id}>
          {item.text}
        </a>
      ))}
    </>
  );
};

export default MainButton;
