import React, { useState } from 'react';

export default function Player({ initialName, symbol }) { // Destructure props here
    const [isEditing, setIsEditing] = useState(false);
    const [playerName, setPlayerName] = useState(initialName);

    function handleEditClick() {
        setIsEditing(isEditing => !isEditing);
    }

    let editPlayerName = <span className='player-name'>{playerName}</span>

    if (isEditing) {
      editPlayerName = (
            <input
                type='text'
                defaultValue={playerName}
                onChange = {(e) => setPlayerName(e.target.value)} 
                required
            />
        );
    }

    return (
        <li>
            <span className='player'>
                {editPlayerName}
                <span className='player-symbol'>{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button> {/* Remove () after handleEditClick */}
        </li>
    );
}
