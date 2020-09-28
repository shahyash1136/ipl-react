import React from 'react';
import { Link } from 'react-router-dom';

const Team = ({ teamId, teamName, homeGround, wins, primaryColor, isChampion, secondaryColor }) => {
    return (
        <div className="card team-card">
            <Link className="team-card__inner" to={`/players?id=${teamId}`} data-teamid={teamId} style={{ background: `linear-gradient(134deg,#${primaryColor},#${secondaryColor})` }}>
                <div className="card__info">
                    <div className="team-card__logo">
                        <img src={`/assets/images/teams/${teamId}.png`} alt={teamName} />
                    </div>
                    <div className="card__details">
                        <h3 className="card__title">
                            {teamName}
                        </h3>
                        <p className="card__subtitle">
                            {homeGround}
                        </p>
                        <div className="team-card__wins" data-champion={isChampion}>
                            {wins}
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}
export default Team;