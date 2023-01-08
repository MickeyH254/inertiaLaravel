import { ref } from "vue";
import { defineStore } from "pinia";

export const useGameBrain = defineStore("gameBrain", () => {
  const questions = ref([]);
  const nextId = ref(0);
  const score = ref(0);

  const answers = ref([]);
  const history = ref([]);

  function nextQuestion() {
    nextId.value++;
    getAnswers();
    return questions.value[nextId.value];
  }

  function currentQuestionData() {
    return questions.value[nextId.value];
  }

  function getCurrentQuestion() {
    return currentQuestionData().question;
  }
  function checkCorrectAnswer(answer) {
    let correctAnswer = currentQuestionData().correct_answer;
    if (correctAnswer === answer) {
      score.value++;
      return true;
    } else {
      return false;
    }
  }

  function getAnswers() {
    answers.value = [
      ...currentQuestionData().incorrect_answers,
      currentQuestionData().correct_answer,
    ];
    return answers;
  }

  function setHistory(gameData) {
    history.value = gameData;
  }

  function setQuestions(questionsArray) {
    return (questions.value = questionsArray);
  }

  return {
    setQuestions,
    questions,
    score,
    nextQuestion,
    currentQuestionData,
    getCurrentQuestion,
    checkCorrectAnswer,
    getAnswers,
    answers,
    nextId,
    setHistory,
    history,
  };
});
