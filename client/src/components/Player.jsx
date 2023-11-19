import players from "../data/players.json"
import plusIcon from "../assets/plus.svg"
import minusIcon from "../assets/minus.svg"

const Player = props => {
  const { player, setPlayer } = props
  return (
    <>
      <select
        value={player.social}
        onChange={e =>
          setPlayer({
            ...player,
            social: e.target.value,
            name: e.target.options[e.target.selectedIndex].textContent,
          })
        }
      >
        {players.map(player => (
          <option key={player.social} value={player.social}>
            {player.name}
          </option>
        ))}
      </select>
      <div className="control-panel">
        <button
          onClick={() => setPlayer({ ...player, score: player.score - 1 })}
        >
          <img src={minusIcon} />
        </button>
        <label>{player.score}</label>
        <button
          onClick={() => setPlayer({ ...player, score: player.score + 1 })}
        >
          <img src={plusIcon} />
        </button>
      </div>
    </>
  )
}

export default Player
