<template>
  <header>
    <h1 class="text-center">Welcome to the Game. Choose a category</h1>
  </header>

  <!-- Grid Layout -->
  <div class="container">
    <div class="m-auto row row-cols-lg-3 row-cols-sm-1">
      <div
        v-for="(value, key, index) in myCategories"
        :key="index"
        class="col card border-primary mb-3 mt-4 m-auto"
        style="max-width: 18rem"
      >
        <div class="card-header">Header</div>
        <div class="card-body text-primary">
          <h5 class="card-title">Primary card title</h5>
          <p class="card-text">{{ key }} {{ value }}</p>
        </div>
        <div class="card-footer bg-transparent border-success">
          <button @click="onCategorySelect(value)" class="btn btn-secondary">
            Select {{ key }}
          </button>
        </div>
      </div>
    </div>

    <TestComponent :selected="myCategory" />

    <RouterLink to="/settings">
      <button type="button" class="btn btn-dark">Next</button>
    </RouterLink>
  </div>
</template>

<script setup>
import { useCategoryStore } from "@/stores/counter";
import { ref } from "vue";
import TestComponent from "@/components/TestComponent.vue";

const categories = useCategoryStore();
let myCategories = categories.categories;

const myCategory = ref(0);

function onCategorySelect(value) {
  categories.theSelectedCategory(value);
  myCategory.value = value;
}
</script>
