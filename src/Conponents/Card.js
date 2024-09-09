import React from 'react';

function Card({ picture, name }) { // Utilisez la déstructuration pour les props
    return (
        <div style={{ margin: '10px', textAlign: 'center' }}>
            <div>
                <img src={picture} alt={name} style={{ width: '100px', height: '100px' }} />
            </div>
            <p>{name}</p>
        </div>
    );
}

export default Card;
