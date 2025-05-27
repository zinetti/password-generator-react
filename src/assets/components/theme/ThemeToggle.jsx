
function ThemeToggle({ darkMode, toggleTheme }) {
  return (
    <button onClick={toggleTheme} style={{ marginBottom: "1rem" }}>
      {darkMode ? "☀️ Modo Claro": "🌙 Modo Escuro"  }
    </button>
  );
}

export default ThemeToggle;
