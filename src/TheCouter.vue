<template>
  <h1>Counter</h1>
  <h2>{{ $store.getters.count }}</h2>
  <button class="btn btn-primary" @click="increase">Увеличить</button>
  <h2>Умноженое на 3</h2>
  <h2>{{ $store.getters.multBythree }}</h2>
  <button class="btn btn-primary" @click="$store.dispatch('asyncMultByFive')">Асинхронное умножение</button>

</template>

<script>
export default {
    methods: {
        increase() {
            this.$store.commit('increase', 10)
        }

    }

}
</script>

<style>

</style>