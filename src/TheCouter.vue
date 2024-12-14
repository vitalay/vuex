<template>
  <h1>Counter</h1>
  <h2>{{ $store.state.count }}</h2>
  <button class="btn btn-primary" @click="increase">Увеличить</button>
</template>

<script>
export default {
    methods: {
        increase() {
            this.$store.state.count++
        }

    }

}
</script>

<style>

</style>