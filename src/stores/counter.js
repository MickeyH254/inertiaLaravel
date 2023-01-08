import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", () => {
  const count = ref(0);
  const doubleCount = computed(() => count.value * 2);
  function increment() {
    count.value++;
  }

  return { count, doubleCount, increment };
});

export const useCategoryStore = defineStore("category", () => {
  const categories = {
    "General Knowledge": 1,
    "Entertainment": 2,
    "Science: Computers": 3,
    "Science: Nature": 4,
    "Sports": 5,
    "History": 6,
    "Geography": 7,
    "Art": 8,
    "Celebrities": 9,
  };

  const selectedCategory = ref(categories["General Knowledge"]);

  function theSelectedCategory(value) {
    return (selectedCategory.value = value);
  }

  return { categories, theSelectedCategory, selectedCategory };
});
