import { useTheme } from "next-themes";
import { BsSun } from "react-icons/bs";
import { BsMoonFill } from "react-icons/bs";

const ThemeButton = () => {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      aria-label="Toogle dark mode"
      type="button"
      className="w-full shadow-none border-none"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}>
      {resolvedTheme === "dark" ? <BsSun /> : <BsMoonFill color="black" />}
    </button>
  );
};

export default ThemeButton;
