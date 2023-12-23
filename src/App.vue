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

          <Card v-for="(result, index) in resultStore?.results" :key="index" :result="result" />

        </div>

      </div>
    </section>
    
  </main>
</template>

<style scoped>
</style>
