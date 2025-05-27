import { useState } from "react";

function PasswordOptions({ onGenerate }) {
  const [length, setLength] = useState(12);
  const [useLetters, setUseLetters] = useState(true);
  const [useNumbers, setUseNumbers] = useState(true);
  const [useSymbols, setUseSymbols] = useState(false);

 const handleSubmit = (e) => {
  e.preventDefault();
  onGenerate({ length, useLetters, useNumbers, useSymbols });
};

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "1rem", width: "80%" }}>
      <div>
        
        
      </div>
      <div className="checkbox-group" style={{ display: "flex", gap: "1rem", marginTop: "0.5rem" }}>
        <label style={{ display: "flex", alignItems: "center" }}>
          Tamanho:
        </label>
          <input
            type="number"
            min="4"
            max="32"
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
          />
        <label>
          <input type="checkbox" checked={useLetters} onChange={() => setUseLetters(!useLetters)} />
          Letras
        </label>
        <label>
          <input type="checkbox" checked={useNumbers} onChange={() => setUseNumbers(!useNumbers)} />
          Números
        </label>
        <label>
          <input type="checkbox" checked={useSymbols} onChange={() => setUseSymbols(!useSymbols)} />
          Símbolos
        </label>
      </div>
      <button type="submit" style={{width: '100%', marginTop: '1rem'}}>Gerar Senha</button>
    </form>
  );
}

export default PasswordOptions;
