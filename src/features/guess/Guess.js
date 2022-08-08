import React, { useState } from "react";
import "./Guess.css";

import { useSelector, useDispatch } from "react-redux";
import {
  getLastGuess,
  getLowerBound,
  getUppwerBound,
  setGuess,
  setLowerBound,
  setUpperBound,
} from "./GuessSlice";

const Guess = () => {
  const dispatch = useDispatch();

  const lastGuessNumber = useSelector(getLastGuess);
  const upperBound = useSelector(getUppwerBound);
  const lowerBound = useSelector(getLowerBound);

  const [status, setStatus] = useState(false);
  const [lastGuess, setLastGuess] = useState("");
  const [rightAnswer, setRightAnsweer] = useState(0);
  const [lower, setLower] = useState(lowerBound);
  const [upper, setUpper] = useState(upperBound);

  console.log(lastGuessNumber);

  const submit = (e) => {
    e.preventDefault();

    if (+lastGuess === +rightAnswer) {
      setStatus(<h4 style={{ color: "green" }}>You got it! ✔</h4>);
    } else if (+lastGuess < +rightAnswer) {
      setStatus(<h4 style={{ color: "black" }}>Nope. Higher</h4>);
    } else {
      setStatus(<h4 style={{ color: "black" }}>Nope. Lower</h4>);
    }
  };
  const reset = (e) => {
    e.preventDefault();
    return;
  };

  const start = () => {
    if (lastGuessNumber === lastGuess) {
      dispatch(setLowerBound(lower));
      dispatch(setUpperBound(upper));
    }

    const range = upper - lower;
    setRightAnsweer(Math.trunc(Math.random() * range + lower));
    dispatch(setGuess(lastGuess));
  };

  return (
    <div className="container">
      <form className="container-fluid" onSubmit={submit}>
        <div>
          <h3>
            Guess the number between {lowerBound} and {upperBound}
          </h3>
          <p>Last guess: {lastGuessNumber}</p>
          <p>{status}</p>

          <label>Guess: </label>
          <input
            value={lastGuess}
            onChange={(e) => setLastGuess(e.target.value)}
            required
          />
          <button type="submit" className="btn btn-primary" onClick={start}>
            Make guess
          </button>
        </div>
      </form>
      <br />
      <form className="container-fluid" onSubmit={reset}>
        <h3>Game Config</h3>
        <div className="d-flex mx-auto text-center justify-content-center">
          <div>
            <label>Lower bound:</label>
            <input
              value={lower || ""}
              onChange={(e) => setLower(e.target.value)}
            />
          </div>
          <div className="upper">
            <label>Upper bound:</label>
            <input
              value={upper || ""}
              onChange={(e) => setUpper(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary ml-2"
            onClick={start}
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default Guess;
