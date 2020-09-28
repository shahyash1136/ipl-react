import React from 'react';
const addDefault = (ev) => {
    ev.target.src = '/assets/images/players/default.png'
}
const Player = ({ name, playerId, firstName, lastName, primaryColor, secondaryColor }) => {
    return (
        <div className="player__card" data-playerid={playerId}>
            <div className="player__container">
                <div className="player__img" style={{ background: `linear-gradient(134deg,#${primaryColor},#${secondaryColor})` }}>
                    <img src={`/assets/images/players/${playerId}.png`} onError={addDefault} alt={name} />
                </div>
                <div className="player__name">
                    <span>{firstName} <em>{lastName}</em></span>
                </div>
            </div>
        </div>
    )
}
export default Player;