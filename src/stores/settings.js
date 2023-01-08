import { defineStore } from "pinia";
import { ref } from "vue";

export const useSettingsStore = defineStore("settings", () => {
  const gameDifficulty = ref("easy");
  const numberOfQuestions = ref(1);
  const gameType = ref("multiple");

  function setDifficulty(difficulty) {
    return (gameDifficulty.value = difficulty);
  }

  function setNumber(number) {
    return (numberOfQuestions.value = number);
  }

  function setGameType(type) {
    return (gameType.value = type);
  }

  return {
    gameDifficulty,
    numberOfQuestions,
    gameType,
    setDifficulty,
    setNumber,
    setGameType,
  };
});
