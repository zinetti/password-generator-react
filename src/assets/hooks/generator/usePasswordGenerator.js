import { useState } from "react";

export function usePasswordGenerator() {
  const [password, setPassword] = useState("");
  const [copyText, setCopyText] = useState("Copiar!");
  const [history, setHistory] = useState(() => {
    const saved = localStorage.getItem("passwordHistory");
    return saved ? JSON.parse(saved) : [];
  });

  // Armazena opções para gerar senha
  const [options, setOptions] = useState({
    length: 12,
    useLetters: true,
    useNumbers: true,
    useSymbols: false,
  });

  function generatePassword(newOptions) {
    // Atualiza as opções antes de gerar
    setOptions(newOptions);

    const { length, useLetters, useNumbers, useSymbols } = newOptions;

    let characters = "";
    if (useLetters) characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (useNumbers) characters += "0123456789";
    if (useSymbols) characters += "!@#$%&";

    if (!characters) {
      setPassword("Selecione ao menos um tipo");
      return;
    }

    let newPassword = "";
    for (let i = 0; i < length; i++) {
      const position = Math.floor(Math.random() * characters.length);
      newPassword += characters[position];
    }

    setPassword(newPassword);
    setCopyText("Copiar!");
    setHistory(prev => {
      const updated = [newPassword, ...prev.slice(0, 9)];
      localStorage.setItem("passwordHistory", JSON.stringify(updated));
      return updated;
    });
  }

  function copyToClipboard(pw = password) {
  const value = typeof pw === 'string' ? pw : String(pw);
  navigator.clipboard.writeText(value);
  setCopyText("Copiado!");

  setTimeout(() => {
    setCopyText("Copiar!");
  }, 1500);
}

  return {
    password,
    copyText,
    generatePassword,
    copyToClipboard,
    history,
  };
}
