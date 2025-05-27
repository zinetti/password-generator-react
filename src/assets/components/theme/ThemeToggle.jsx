
function ThemeToggle({ darkMode, toggleTheme }) {
  return (
    <button onClick={toggleTheme} style={{ marginBottom: "1rem" }}>
      {darkMode ? "🌙 Modo Escuro" : "☀️ Modo Claro"}
    </button>
  );
}

export default ThemeToggle;
