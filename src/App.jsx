import { useDarkMode } from "./assets/hooks/theme/useDarkMode";
import { usePasswordGenerator } from "./assets/hooks/generator/usePasswordGenerator";
import ThemeToggle from "./assets/components/theme/ThemeToggle";
import PasswordOptions from "./assets/components/display/PasswordOptions";
import CopyButton from "./assets/components/buttons/CopyButton";
import PasswordDisplay from "./assets/components/display/PasswordDisplay"
import PasswordHistory from "./assets/components/display/PasswordHistory"



function App(){
  const [darkMode, setDarkMode] = useDarkMode()

  const {
    password,
    copyText,
    generatePassword,
    copyToClipboard,
    history
  } = usePasswordGenerator();

   return (
<div className={`app ${darkMode ? "dark" : "light"}`}>
  <div className="darkmode-toggle">
    <ThemeToggle darkMode={darkMode} toggleTheme={() => setDarkMode(!darkMode)} />
  </div>

  <div className="content-layout">
    <div className="main-section">
      <h1 className="title">Gerador de Senhas</h1>
      <PasswordOptions onGenerate={generatePassword} />
      <PasswordDisplay password={password} />
      <CopyButton onClick={() => copyToClipboard(password)} label={copyText} />

    </div>

    <div className="sidebar">
      <PasswordHistory history={history} onCopy={copyToClipboard} />
    </div>
  </div>
</div>


  );

}

export default App;