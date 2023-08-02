import React from "react";
import ReactDOM from "react-dom";

import { App } from "./app";

let state = undefined;

fetch("https://5xwlhr-7777.csb.app/data")
  .then((data) => data.json())
  .then((json) => {
    state = json;
    console.log("state changed");
    render();
  });

//ReactDOM.render(<App />, document.querySelector("#container"));

function handleChangeVote(answerId, increment) {
  state.answers = state.answers.map((answer) => {
    if (answer.answerId != answerId) {
      return answer;
    } else {
      return { ...answer, upvotes: answer.upvotes + increment };
    }
  });
  render();
}

function render() {
  ReactDOM.hydrate(
    <App {...state} handleChangeVote={handleChangeVote} />,
    document.querySelector("#container")
  );
}

//render();
