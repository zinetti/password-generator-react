import { useState } from "react";

function PasswordHistoryItem({ password, onCopy }) {
  const [copyText, setCopyText] = useState("Copiar!");

  const handleCopy = () => {
    onCopy(password);
    setCopyText("Copiado!");
    setTimeout(() => setCopyText("Copiar!"), 1500);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "1rem",
        marginBottom: "0.5rem",
        padding: "0.5rem 1rem",
        background: "var(--bg)",
        
        borderRadius: "4px",
      }}
    >
      <span style={{ wordBreak: "break-all", flex: 1 }}>{password}</span>
      <button onClick={handleCopy}>{copyText}</button>
    </div>
  );
}

export default PasswordHistoryItem;
