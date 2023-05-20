import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Pet from "./pet/Pet";
import "./Pets.css";
import PetModel from "../../Models/PetModel";
import PetNavBar from "../navBar/NavBar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Pets: React.FC<{}> = () => {
  const defaultPets: PetModel[] = [];
  const [pets, setPets]: [PetModel[], (pets: PetModel[]) => void] = useState(defaultPets);

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


  const filterPets = async (value: string) => {
    const response = await axios.get("http://localhost:9000/pet").then((res) => {
      // filter the response to only include pets that match the search term
      const filtered = res.data.filter((pet: any) => {
        return pet.name.toLowerCase().includes(value.toLowerCase());
      });
      return filtered;
    });
    setPets(response);
  };

  const handleChange = (value: string) => {
    filterPets(value);
  };

  return (
    <div>
      <PetNavBar />
      <div className="pets">
        <div className="header" style={{marginBottom: "1em"}}>
          <h1>Tamagochis</h1>
        </div>

        <Form className="d-flex" style={
          { width: "50%", maxWidth: "550px", display: "flex", justifyContent: "center", alignItems: "center", margin: "auto" }
        }>
          <Form.Control
            type="search"
            placeholder="Search pet name..."
            aria-label="Search"
            id="searchInput"
            onChange={(e) => handleChange(e.target.value)}
          />
        </Form>
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
        <Link to="/addPets" style={{ textDecoration: "none" }}>
          <Button variant="info" className="create-btn">
            Create Pet
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Pets;
