import { useState } from "react"

export default function Player({ name, symbol }) {
    const [isEditing, setIsEditing] = useState(false);
    const [playerName, setPlayerName] = useState(name);
    function handleSaveClick(e) {
        setPlayerName(oldval => e.target.value? e.target.value : oldval);
        setIsEditing(false);
    } 

    function handleEditClick() {
        setIsEditing(isEditable => !isEditable);
    }

    function handleNameChange(e) {
        setPlayerName(e.target.value);
    }

    return (
        <li>
        <span className="player">
            {isEditing && (
                <input 
                    type="text"
                    value={playerName}
                    onChange={handleNameChange}
                />
            )}
            {!isEditing && <span className="player-name">{playerName}</span>}
            <span className="player-symbol">{symbol}</span>
        </span>
        {!isEditing && (
            <button onClick={handleEditClick}>Edit</button>
        )}
        {isEditing && (
            <button onClick={handleSaveClick}>Save</button>
        )}
        </li>
    )
}