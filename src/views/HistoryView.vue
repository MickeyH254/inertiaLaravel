<template>
  <ul class="list-group">
    <li v-for="history in gameBrain.history" class="list-group-item">
      {{ history.question }}
      <h1>Answers</h1>
      <ul class="list-group">
        <li v-for="history." class="list-group-item">An item</li>
      </ul>
    </li>
  </ul>
</template>

<script setup>
import {useGameBrain} from "@/stores/gameBrain";

let gameBrain = useGameBrain();


</script>
