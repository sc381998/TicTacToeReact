import React from "react";
import { NavLink } from "react-router-dom";
export default function StartGame(props) {
  const { data, handleUpdate } = props;
  // console.log(data);
  return (
    <>
      <div className="container0" id="container0">
        <h1 className="text-center" id="title">
          Tic <span className="text-white">Tac</span> Toe
        </h1>
        <small className="hide" id="alertPlayer">
          Both Player Name is Required
        </small>
        <small className="hide" id="alertPlayer1">
          Dimension is Required
        </small>
        <input
          className="form-control"
          placeholder="Enter 1st player name"
          type="text"
          id="playerOne"
          name="playerOne"
          // value={data.playerOne}
          onChange={handleUpdate}
        />
        <input
          className="form-control"
          // value={data.playerTwo}
          placeholder="Enter 2nd player name"
          type="text"
          id="playerTwo"
          name="playerTwo"
          onChange={handleUpdate}
        />

        <div className="form-group">
          <select
            id="dimension"
            name="dimension"
            // value={data.dimension}
            placeholder="Select the dimension"
            className="form-control"
            value={data.dimension}
            onChange={handleUpdate}
          >
            <option
              className="hide"
              value="Select the dimension"
              disabled={true}
            >
              Select the dimension
            </option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
          </select>
        </div>
        <div className="text-center">
          <NavLink to="/game" className="btn btn-sagar">
            Start Game
          </NavLink>
        </div>
      </div>
    </>
  );
}
