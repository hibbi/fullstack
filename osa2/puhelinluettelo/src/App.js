import { useState } from "react";

const Button = ({ type, text }) => {
  return <button type={type}>{text}</button>;
};

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas", id: 1 }]);
  const [newName, setNewName] = useState("");

  const handleInputChange = (event) => {
    setNewName(event.target.value);
    //console.log(event.target.value)
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nameObject = {
      name: newName,
      id: persons.length + 1,
    };

    const names = persons.map((person) => {
      return person.name.toLowerCase();
    });

    const isThereMatch = names.find(name => name === newName.toLowerCase())
    if (isThereMatch === undefined) {
      setPersons(persons.concat(nameObject));
      setNewName("");
    } else {
      alert(`${newName} is already added to phonebook`);
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="inputName">name:</label>
          <input id="inputName" value={newName} onChange={handleInputChange} />
        </div>
        <div>
          <Button type="submit" text="add" />
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map((person) => (
          <p key={person.id}>{person.name}</p>
        ))}
      </div>
    </div>
  );
};

export default App;
