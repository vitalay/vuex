<template>
  <h1>Counter</h1>
  <h2>{{ $store.getters.count }}</h2>
  <button class="btn btn-primary" @click="increase">Увеличить</button>
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