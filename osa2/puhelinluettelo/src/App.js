import { useState } from "react";

const Button = ({ type, text }) => {
  return <button type={type}>{text}</button>;
};

const Filter = (props) => {
  //console.log(props.value);
  return (
    <>
      <div>
        <input
          id="filterSearch"
          value={props.value}
          onChange={props.handle}
          type="search"
          
        />
      </div>
    </>
  );
};

const Persons = ({ persons, filter }) => {
  //console.log(persons, filter);
  const filteredPersons = persons.filter(person => {
    return person.name.toLowerCase().includes(filter); 
  })
  return (
    <div>
      {filteredPersons.length > 0 ?
      filteredPersons.map((person) => (
        <p key={person.id}>
          {person.name} {person.phone}
        </p>
      )) :
        <h3>Haulla ei löytynyt nimiä.</h3>
    }
    </div>
  );
};

const PersonForm = ( props ) => {
  return (
    <form onSubmit={props.onsubmit}>
      <div>
        <label htmlFor="inputName">name:</label>
        <input id="inputName" value={props.newName} onChange={props.handle} />
      </div>
      <div>
        <label htmlFor="inputPhone">number:</label>
        <input
          id="inputPhone"
          type="tel"
          value={props.newNumber}
          onChange={props.handle}
        />
      </div>
      <div>
        <Button type="submit" text="add" />
      </div>
    </form>
  );
};

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", id: 1, phone: "040-1231244" },
  ]);

  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [newQ, setNewQ] = useState("");

  const HandleSearchChange = (event) => {
    setNewQ(event.target.value);
  };

  const handleInputChange = (event) => {
    if (event.target.id === "inputPhone") {
      setNewNumber(event.target.value);
    } else {
      setNewName(event.target.value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nameObject = {
      name: newName,
      id: persons.length + 1,
      phone: newNumber,
    };

    const names = persons.map((person) => {
      return person.name.toLowerCase();
    });

    const isThereMatch = names.find((name) => name === newName.toLowerCase());
    if (isThereMatch === undefined) {
      setPersons(persons.concat(nameObject));
      setNewName("");
      setNewNumber("");
    } else {
      alert(`${newName} is already added to phonebook`);
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={newQ} handle={HandleSearchChange} />
      <h3>add a new</h3>
      <PersonForm
        onsubmit={handleSubmit}
        newName={newName}
        newNumber={newNumber}
        handle={handleInputChange}
      />
      <h3>Numbers</h3>
      <Persons persons={persons} filter={newQ} />
    </div>
  );
};

export default App;
