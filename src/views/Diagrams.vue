<script lang="ts" setup>
import { ref } from 'vue';
import IDiagram from '../interface/IDiagram'
import Modal from '../component/modal/Modal.vue'

    const diagramList = ref<IDiagram[]>([])

    const modalIsVisible = ref<boolean>(false)

    const goToModal = (diagram: IDiagram) => {
        modalIsVisible.value = !modalIsVisible.value
    }
</script>

<template>

    <div class="row">
    <div v-for="diagram in diagramList">
        <div @click="goToModal(diagram)" class="custom-card">
        <div class="custom-card-image">
            <img :src="diagram.image" alt="Diagram Image">
        </div>
        <div class="custom-card-content">
            <p class="custom-card-title">{{ diagram.title }}</p>
            <p class="custom-card-description">{{ diagram.resume }}</p>
        </div>
        </div>
    </div>
    </div>

    <Modal
    :on-set-is-visible="() => modalIsVisible = !modalIsVisible"
    :isVisible = "modalIsVisible"/>
</template>

<style>

    .custom-card {
        display: flex;
        border: 1px solid #ccc;
        margin: 10px;
        cursor: pointer;
        transition: transform 0.2s;
        border-radius: 5px;
        overflow: hidden;
    }

    .custom-card:hover {
        transform: scale(1.05);
    }

    .custom-card-image {
        width: 100px; 
        height: 100px; 
        flex-shrink: 0;
        background-size: cover;
    }

    .custom-card-content {
        flex: 1;
        padding: 10px;
        display: flex;
        flex-direction: column;
    }

    .custom-card-title {
        font-size: 18px;
        font-weight: bold;
    }

    .custom-card-description {
        font-size: 14px;
        color: #666;
        margin-top: 10px;
    }
</style>


../interface/IDiagram