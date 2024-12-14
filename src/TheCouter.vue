<template>
  <h1>Counter</h1>
  <h2>{{ $store.state.count }}</h2>
  <button class="btn btn-primary" @click="increase">Увеличить</button>
</template>

<script>
export default {
    methods: {
        increase() {
            this.$store.commit('increase', {
                value: 20,
                a: 111
            })
        }

    }

}
</script>

<style>

</style>