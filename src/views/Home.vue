<template>
    <div class="home">
    <img alt="Vue logo" src="#" />
    </div>
</template>

<script>


export default {
    computed: {
        username() {
            return this.$route.params.username
        },
    },
    methods: {
        
    }
}
</script>