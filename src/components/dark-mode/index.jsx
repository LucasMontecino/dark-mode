import useLocalStorage from "./useLocalStorage";
import "./theme.css";

export default function DarkMode() {
  const [theme, setTheme] = useLocalStorage("theme", "dark");

  function handleChangeTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  console.log(theme);

  return (
    <div className="light-dark-mode" data-theme={theme}>
      <div className="container">
        <p>Hello World!</p>
        <button onClick={handleChangeTheme}>Change Color Theme</button>
      </div>
    </div>
  );
}
