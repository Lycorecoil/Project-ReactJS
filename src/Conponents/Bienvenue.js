import React, { useEffect, useState } from 'react';
import Card from './Card'; // Assurez-vous d'importer le composant Card

const Bienvenue = () => {
    const [data, setData] = useState([]);
    
    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/type/3") // Changez cela selon l'API que vous voulez utiliser
            .then((response) => response.json())
            .then((resultat) => {
                // Ici, nous allons juste récupérer les Pokémon de type 3 (ex: Poison) pour cet exemple
                const pokemonPromises = resultat.pokemon.map(p => 
                    fetch(p.pokemon.url).then(res => res.json())
                );

                return Promise.all(pokemonPromises);
            })
            .then(pokemons => {
                // Nous extrayons le nom et l'image de chaque Pokémon
                const pokemonData = pokemons.map(pokemon => ({
                    name: pokemon.name,
                    picture: pokemon.sprites.front_default,
                }));
                setData(pokemonData); // Met à jour l'état avec les données des Pokémon
            })
            .catch((error) => {
                console.error("Erreur lors de la récupération des données :", error);
            });
    }, []); // Le tableau vide signifie que l'effet ne s'exécute qu'une seule fois après le premier rendu.

    return (
        <div>
            <h1>Données Pokémon :</h1>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {data.map((pokemon, index) => (
                    <Card key={index} picture={pokemon.picture} name={pokemon.name} />
                ))}
            </div>
        </div>
    );
}

export default Bienvenue;
