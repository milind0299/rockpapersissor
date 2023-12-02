import { useState } from "react";
import "./App.css";
import Radio from "./Radio";
import Modal from "./Modal";

function App() {
  const playValues = ["rock", "paper", "sissors"];
  const [radioValue, setRadioValue] = useState(null);
  const [compValue, setCompValue] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [win, setWin] = useState(false);

  function handleClick(e) {
    setRadioValue(e.target.value);
  }

  function handleSubmit() {
    const randomNumber = Math.floor(Math.random() * 3);
    setCompValue(playValues[randomNumber]);
    setIsModalOpen(true);
    switch (true) {
      case radioValue === playValues[randomNumber]:
        setWin("draw");
        break;
      case radioValue === "rock" && playValues[randomNumber] === "paper":
        setWin(false);
        break;
      case radioValue === "rock" && playValues[randomNumber] === "sissors":
        setWin(true);
        break;
      case radioValue === "paper" && playValues[randomNumber] === "rock":
        setWin(true);
        break;
      case radioValue === "paper" && playValues[randomNumber] === "sissors":
        setWin(false);
        break;
      case radioValue === "sissors" && playValues[randomNumber] === "rock":
        setWin(false);
        break;
      case radioValue === "sissors" && playValues[randomNumber] === "paper":
        setWin(true);
        break;
      default:
        break;
    }
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  return (
    <div className="App">
      <h1>Rock Paper Sissors</h1>
      <Radio list={playValues} sendVal={handleClick} />
      {radioValue ? (
        <div className="data-post-selection">
          <button onClick={handleSubmit}>Play!</button>
        </div>
      ) : (
        <p>Select an Input</p>
      )}
      <Modal closeModal={closeModal} isOpen={isModalOpen}>
        {win === "draw" ? (
          <h1>Draw</h1>
        ) : win ? (
          <h1>You Win</h1>
        ) : (
          <h1>Computer Win's</h1>
        )}
        <p>
          <strong>Your Play:</strong>{" "}
          {radioValue ? radioValue.toUpperCase() : null}
        </p>
        <p>
          <strong>Computer Play:</strong>{" "}
          {compValue ? compValue.toUpperCase() : null}
        </p>
      </Modal>
    </div>
  );
}

export default App;
