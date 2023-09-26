<script>

export default {
    data() {
        return {
            diagramList: []
        };
    },
    methods: {
        goToDiagram(diagram) {
            this.$router.push({ title: '', params: { id: diagram.id}});
        }
    }
}
</script>

<template>

    <div class="row">
    <div v-for="let diagram of diagrams">
        <div @click="goToModal(diagram)" class="custom-card">
        <div class="custom-card-image">
            <img :src="diagram.img" alt="Diagram Image">
        </div>
        <div class="custom-card-content">
            <p class="custom-card-title">{{ diagram.name }}</p>
            <p class="custom-card-description">{{ diagram.resume }}</p>
        </div>
        </div>
    </div>
    </div>
</template>



