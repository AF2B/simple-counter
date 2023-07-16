<!-- <script setup lang="ts">
  import { type Ref, ref, Ref } from 'vue';

  const counter: Ref<number> = ref<number>(0);

  const increment: () => void = (): void => {
    counter.value += 1;
  };

  const decrement: () => void = (): void => {
    counter.value -= 1;
  };
</script> Default mode-->

<!-- <script lang="ts">
export default {
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    increment() {
      this.counter++;
    },
    decrement() {
      this.counter--;
    },
  },
};
</script> Option API-->

<!-- Composition API -->
<!-- <script lang="ts">
import { ref } from 'vue';

export default {
  setup() {
    const counter = ref(0);

    const increment = () => {
      counter.value++;
    };

    const decrement = () => {
      counter.value--;
    };

    return {
      counter,
      increment,
      decrement,
    };
  },
};
</script> -->

<!-- Composition API with <script setup> -->
<script lang="ts" setup>
  import { ref, type Ref } from 'vue';

  const counter: Ref<number> = ref<number>(0);

  const increment: () => void = (): void => {
    counter.value += 1;
  };

  const decrement: () => void = (): void => {
    counter.value -= 1;
  };
</script>

<template>
  <main>
    <div>
      <h1>Just an counter with Vue 3</h1>
    </div>
    <div>
      <h2>Counter: {{ counter }}</h2>
      <button @click="decrement">Decrement</button>
      <button @click="increment">Increment</button>
    </div>
  </main>
</template>

<style scoped>
  main {
    background-color: aliceblue;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
  }

  main > div {
    margin: 1rem;
  }
</style>
