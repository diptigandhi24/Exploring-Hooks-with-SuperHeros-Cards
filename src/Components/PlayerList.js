//Dipslay player list from ther server
import React, { useState, useEffect } from "react";
import { superHerosData } from "../data/ApiConfig";
//connect to server and get the data from the server
import axios from "axios";
import { async } from "q";
import "../App.css";

export default function DisplayPlayersList() {
  let [listOfSuperheros, displayCurrentList] = useState([]);
  useEffect(async () => {
    const result = await axios.get(superHerosData);
    displayCurrentList(result.data.superheroes);
  }, []);

  const deleteItemFromList = event => {
    const updateList = listOfSuperheros.filter(
      elm => elm.image.url !== event.target.value
    );
    displayCurrentList(updateList);
  };

  return (
    <div className="cards-display">
      {listOfSuperheros.map(elem => {
        return (
          <div>
            <img src={elem.image.url} className="cards" />
            {/* <h2>{elem.name}</h2> */}
            <button value={elem.image.url} onClick={deleteItemFromList}>
              {elem.name}
            </button>
          </div>
        );
      })}
    </div>
  );
}
