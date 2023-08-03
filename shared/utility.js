export function handleChangeVote(answers, answerId, increment) {
  answers = answers.map((answer) => {
    if (answer.answerId != answerId) {
      return answer;
    } else {
      return { ...answer, upvotes: answer.upvotes + increment };
    }
  });
  return answers;
}
