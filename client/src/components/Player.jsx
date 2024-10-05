import plusIcon from "../assets/plus.svg";
import minusIcon from "../assets/minus.svg";

const Player = props => {
  const { player, setPlayer, autofocus } = props;
  return (
    <>
      <input
        value={player.name}
        onChange={e =>
          setPlayer({
            ...player,
            social: e.target.value,
            name: e.target.value,
          })
        }
        autoFocus={autofocus}
      />
      <div className="control-panel">
        <button
          tabIndex={-1}
          onClick={() => setPlayer({ ...player, score: player.score - 1 })}
        >
          <img src={minusIcon} />
        </button>
        <label>{player.score}</label>
        <button
          tabIndex={-1}
          onClick={() => setPlayer({ ...player, score: player.score + 1 })}
        >
          <img src={plusIcon} />
        </button>
      </div>
    </>
  );
};

export default Player;
