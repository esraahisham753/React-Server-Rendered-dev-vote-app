import React from "react";

export const App = ({ questions, answers, handleChangeVote }) => {
  return (
    <div>
      <h1>Q&A Tool</h1>
      {questions.map(({ questionId, content }) => {
        return (
          <div key={questionId}>
            <h3>{content}</h3>
            {answers
              .filter((answer) => answer.questionId === questionId)
              .map(({ content, upvotes, answerId }) => (
                <div key={answerId}>
                  <span>
                    {content} - {upvotes}
                  </span>
                  <button
                    onClick={() => {
                      handleChangeVote(answerId, 1);
                    }}
                  >
                    +
                  </button>
                  <button
                    onClick={() => {
                      handleChangeVote(answerId, -1);
                    }}
                  >
                    -
                  </button>
                </div>
              ))}
          </div>
        );
      })}
    </div>
  );
};
