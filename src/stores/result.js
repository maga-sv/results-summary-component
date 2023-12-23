import { defineStore } from "pinia";

export const useResultStore = defineStore("result", {
  state: () => ({
    results: {
      total: 76,
      summary: {
        reaction: 80,
        memory: 92,
        verbal: 61,
        visual: 72,
      },
    },
  }),
});

// Your Result 76 of 100 Great You scored higher than 65% of the people who have taken these tests. Summary Reaction 80 / 100 Memory 92 / 100 Verbal 61 / 100 Visual 72 / 100 Continue
