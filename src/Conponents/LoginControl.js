import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Remplacez useHistory par useNavigate
import './LoginControl.css';

const LoginControl = () => {
    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [email, setEmail] = useState('');
    const [motDePasse, setMotDePasse] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate(); 

    const handleSubmit = (event) => {
        event.preventDefault();
        if (motDePasse !== '1234') {
            setMessage('Mot de passe incorrect');
        } else {
            setMessage('');
            navigate('/bienvenue'); // Remplacez history.push par navigate
        }
    };

    return (
        <div >
            <h2>Formulaire d'inscription</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Nom :
                        <input
                            type="text"
                            value={nom}
                            onChange={(e) => setNom(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Prénom :
                        <input
                            type="text"
                            value={prenom}
                            onChange={(e) => setPrenom(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Email :
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Mot de passe :
                        <input
                            type="password"
                            value={motDePasse}
                            onChange={(e) => setMotDePasse(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <button type="submit">Connexion</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default LoginControl;
