<script lang="fr" setup>
    const props = defineProps<{
        title?: string, // ? = peut etre nul
        isVisible : boolean
    }>();
</script>

<template>
    <div class="modal-global-container">

    </div>
</template>

<style lang="scss" scoped>

    .modal-global-container {
        position : fixed;
        top: 0;
        left: 0;
        height: 100%;
        min-height: 100vh;
        width: 100%;
        z-index: 500;
        background-color: rgba(0, 0, 0, 0.5);
    }
</style>