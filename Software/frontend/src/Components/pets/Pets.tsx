import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Pet from "./pet/Pet";
import "./Pets.css";
import PetModel from "../../Models/PetModel";
import PetNavBar from "../navBar/NavBar";
import Button from "react-bootstrap/Button";

const Pets: React.FC<{}> = () => {
  const defaultPets: PetModel[] = [];
  const [pets, setPets]: [PetModel[], (pets: PetModel[]) => void] =
    useState(defaultPets);

  const getPets = async () => {
    const response = await axios.get<PetModel[]>("http://localhost:9000/pet");
    setPets(response.data);
  };

  const handleDelete = async (
    props: { _id: string },
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    await axios.delete("http://localhost:9000/pet/" + props._id);
    getPets();
  };

  useEffect(() => {
    getPets();
  }, []);

  return (
    <div>
      <PetNavBar />
      <div className="pets">
        <div className="header">
          <h1>Tamagochis</h1>
        </div>
        <Link to="/addPets" style={{ textDecoration: "none" }}>
          <Button variant="info" className="create-btn">
            Create Pet
          </Button>
        </Link>
        {pets.map((pet) => (
          <Pet
            key={pet._id}
            _id={pet._id}
            name={pet.name}
            focusLevel={pet.focusLevel}
            tirednessLevel={pet.tirednessLevel}
            happinessLevel={pet.happinessLevel}
            birthDate={pet.birthDate}
            isSick={pet.isSick}
            isDead={pet.isDead}
            handleDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default Pets;
