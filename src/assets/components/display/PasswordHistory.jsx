import PasswordHistoryItem from "./PasswordHistoryItem";

function PasswordHistory({ history, onCopy }) {
  return (
    <div>
      <h2>Histórico de Senhas</h2>
      {history.map((pw, index) => (
        <PasswordHistoryItem key={index} password={pw} onCopy={onCopy} />
      ))}
    </div>
  );
}

export default PasswordHistory;
