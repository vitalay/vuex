<template>
    <h1>Counter</h1>
    <h2>{{ count }}</h2>
    <button class="btn btn-primary" @click="increaseByOne">Увеличить</button>
    <h2>Умноженое на 3</h2>
    <h2>{{ $store.getters.multByThree }}</h2>
    <button class="btn btn-primary" @click="asyncMultByFive(55)">Асинхронное умножение</button>
  </template>
  
  <script>
  import { mapGetters, mapMutations, mapActions } from 'vuex';
  
  export default {
    computed: {
      ...mapGetters(['count',]), // Исправлено название геттера  
    },
    methods: {
      ...mapMutations(['increase']),
      ...mapActions(['asyncMultByFive']),

        increaseByOne() {
        this.increase(1);  
      }
    },
  };
  </script>
  
  <style scoped>
  
  </style>
  