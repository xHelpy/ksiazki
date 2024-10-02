import React from "react";
import './App.css';

const Ksiazka = props => (
    <div>
        <div className="ksiazka">
            {props.author}: <b>{props.tytul}</b> stron: {props.stron}
        </div>

    </div>
)


export default Ksiazka;
