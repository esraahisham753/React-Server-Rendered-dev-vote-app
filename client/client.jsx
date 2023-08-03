import React from "react";
import ReactDOM from "react-dom";

import { App } from "./app";
import { handleChangeVote } from "../shared/utility";

let state = undefined;

fetch("https://5xwlhr-7777.csb.app/data")
  .then((data) => data.json())
  .then((json) => {
    state = json;
    console.log("state changed");
    render();
  });

//ReactDOM.render(<App />, document.querySelector("#container"));
function handleVote(answerId, increment) {
  state.answers = handleChangeVote(state.answers, answerId, increment);
  fetch(`vote/${answerId}?increment=${increment}`);
  render();
}

function render() {
  ReactDOM.hydrate(
    <App {...state} handleChangeVote={handleVote} />,
    document.querySelector("#container")
  );
}

//render();
