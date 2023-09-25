<script>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

export default {
    props : {
        to: { type: String, required: true }
    },
    setup(props) {
    const route = useRoute()
    const isActive = computed(() => route.path === props.to)
    return { isActive, collapsed }
  }
}
</script>

<template>
    <router-link :to="to" class="link" :class="{ active: isActive }">
    </router-link>
</template>

<style>
</style>