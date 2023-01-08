<template>
  <!-- Number of Questions -->
  <section>
    <div class="container">
      <label for="customRange2" class="form-label"
        >Number of Questions ({{ questions }})
      </label>
      <input
        v-model="questions"
        type="range"
        class="form-range"
        min="1"
        max="20"
        step="1"
        id="customRange2"
      />
    </div>
  </section>
  <!-- Difficulty -->
  <section>
    <select class="form-select" v-model="difficulty">
      <option disabled value="">Please select one</option>
      <option value="easy">Easy</option>
      <option value="medium">Medium</option>
      <option value="hard">Hard</option>
    </select>
  </section>
  <!-- Type -->
  <section>
    <div class="form-check">
      <input
        class="form-check-input"
        type="radio"
        name="flexRadioDefault"
        id="type1"
        value="boolean"
        v-model="type"
      />
      <label class="form-check-label" for="type1"> True/False </label>
    </div>
    <div class="form-check">
      <input
        class="form-check-input"
        type="radio"
        name="flexRadioDefault"
        id="type2"
        value="multiple"
        v-model="type"
        checked
      />
      <label class="form-check-label" for="type2"> Multiple Choice </label>
    </div>
  </section>
  <RouterLink to="/game">
    <button @click="onFinish" class="btn btn-dark">Play</button>
  </RouterLink>

</template>

<script setup>
import { ref } from "vue";
import { useSettingsStore } from "@/stores/settings";

const questions = ref(1);
const difficulty = ref("");
const type = ref("multiple");

let settingsStore = useSettingsStore();

function onFinish() {
  settingsStore.setNumber(questions.value);
  settingsStore.setDifficulty(difficulty.value);
  settingsStore.setGameType(type.value);
}
</script>
