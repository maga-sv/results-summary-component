<script setup>
import Card from "@/components/UI/Card/Card.vue";
import { useResultStore } from "./stores/result.js";

const resultStore = useResultStore()

</script>

<template>
  <main>

    <section class="result">
      <div class="container">

        <div class="result__cards">

          <Card :result="resultStore?.results" />

        </div>

      </div>
    </section>
    
  </main>
</template>

<style scoped>

main {
  height: 100vh;
  display: grid;
  place-items: center;
}

</style>
