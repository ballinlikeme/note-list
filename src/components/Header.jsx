import { useState } from "react";
import { Filter } from "./Filter";

export const Header = ({ createNewNote, filterChange }) => {
  const [userInput, setUserInput] = useState("");

  const handleFilterChange = (filterValue) => {
    filterChange(filterValue);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (userInput === "") {
      alert("Cannot create an empty note");
      return;
    }
    const input = document.querySelector("input");
    createNewNote(userInput);
    input.value = "";
    setUserInput("");
  };

  const handleChange = (event) => {
    setUserInput(event.target.value);
  };

  return (
    <header className="header">
      <div className="header__container _container">
        <h1 className="header__title">What’s your plan for today?</h1>
        <form onSubmit={handleSubmit} action="#" className="header__form">
          <div className="header__input">
            <input
              onChange={handleChange}
              placeholder="Enter your note text..."
              type="text"
            />
          </div>
          <div className="header__button">
            <button>Submit</button>
          </div>
        </form>
        <Filter handleFilterChange={handleFilterChange} />
      </div>
    </header>
  );
};
