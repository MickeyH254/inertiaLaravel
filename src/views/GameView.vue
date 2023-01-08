<template
  :class="{
    'template-right': correct,
    'template-left': wrong,
  }"
>
  <div class="container-fluid rounded mx-4 flex-column justify-content-between">
    <h1>Question {{ gameBrain.nextId + 1 }}</h1>
    <h2>Score {{ gameBrain.score }}</h2>
  </div>
  <div class="container">
    <h2>
      {{ gameBrain.getCurrentQuestion() }}
    </h2>

    <button
      v-for="answer in gameBrain.answers"
      :key="answer"
      @click="onClicked(answer)"
      class="btn btn-lg btn-dark mx-4"
      :class="{ 'btn-success': correct, 'btn-danger': wrong }"
    >
      {{ answer }}
    </button>
  </div>
</template>

<script setup>
import { onBeforeMount, ref } from "vue";
import { useGameBrain } from "@/stores/gameBrain";
import axios from "axios";
import { useRouter } from "vue-router";

const gameBrain = useGameBrain();
const correct = ref(false);
const wrong = ref(false);
const router = useRouter();

function onClicked(answer) {
  if (gameBrain.checkCorrectAnswer(answer)) {
    console.log("True");
    correct.value = true;
    setTimeout(() => {
      correct.value = false;
    }, 3000);
  } else {
    console.log("false");
    wrong.value = true;
    setTimeout(() => {
      wrong.value = false;
    }, 3000);
  }
  if (gameBrain.nextId < 9) {
    gameBrain.nextQuestion();
  } else {
    gameBrain.setHistory(gameBrain.questions);
    router.push({ name: "history" });
  }
}

async function fetchQuestions() {
  try {
    const response = await axios.get(
      "https://opentdb.com/api.php?amount=10&category=26&difficulty=medium&type=multiple"
    );
    await gameBrain.setQuestions(response.data.results);
    gameBrain.getAnswers();
  } catch (e) {
    console.log(e);
  }
}

onBeforeMount(() => {
  fetchQuestions();
});
</script>

<style scoped>
.template-right {
  color: green;
}
.template-wrong {
  color: red;
}
</style>
