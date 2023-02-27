import React, { useEffect, useState } from "react";
import { api } from "../api/api";
import './CardPokemon.css'
import PropTypes from 'prop-types';

const CardPokemon = ({ nomePokemon }) => {
    
    const [detalhes, setDetalhes] = useState(null);
    const url = `/pokemon/${nomePokemon}`;
    const getDetalhes = async () => {
        try {
            const response = await api.get(url)
            setDetalhes(response.data)
            console.log(response.data);
        } catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        getDetalhes();
    }, [nomePokemon])


    return (
        <div className="card">
            <img  alt={nomePokemon} />
            <span>{nomePokemon}</span>
        </div>
    )

}
CardPokemon.propTypes = {
    nomePokemon: PropTypes.string.isRequired,
};

export default CardPokemon;