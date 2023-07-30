import React from "react";

export const App = ({ questions, answers }) => {
  return (
    <div>
      <h1>Q&A Tool</h1>
      {questions.map(({ questionId, content }) => {
        return (
          <div key={questionId}>
            <h3>content</h3>
          </div>
        );
      })}
    </div>
  );
};
