import rounds from "../data/rounds.json";

const ControlPanel = props => {
  const {
    round,
    setRound,
    handleSwap,
    handleSave,
    handleReset,
    isLoading,
    status,
  } = props;
  return (
    <>
      <select value={round} onChange={e => setRound(e.target.value)}>
        {rounds.map(round => (
          <option key={round.short} value={round.short}>
            {round.full}
          </option>
        ))}
      </select>
      <div className="control-panel">
        <button tabIndex={-1} onClick={handleSwap}>
          Swap
        </button>
        <button tabIndex={-1} onClick={handleSave} disabled={isLoading}>
          {status}
        </button>
        <button tabIndex={-1} onClick={handleReset}>
          Reset
        </button>
      </div>
    </>
  );
};

export default ControlPanel;
