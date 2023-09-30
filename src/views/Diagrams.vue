<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import IDiagram from '../interface/IDiagram'
import Modal from '../component/modal/Modal.vue'
import Data from '../data.json'



    const diagramList = ref<IDiagram[]>([])

    const modalIsVisible = ref<boolean>(false)

    const goToModal = (diagram: IDiagram) => {

        modalIsVisible.value = !modalIsVisible.value
    }

    onMounted(() => {
        diagramList.value = [...Data];

    });

</script>

<template>

    <div class="content">
        <div class="row">
            <div class="card-item" v-for="diagram in diagramList" :key="diagram.id">
                <div @click="goToModal(diagram)" class="custom-card">
                    <div class="custom-card-image">
                        <img :src="diagram.image" :alt="diagram.title">
                    </div>
                    <div class="custom-card-content">
                        
                        <p class="custom-card-title">{{ diagram.title }}</p>
                        <p class="custom-card-description">{{ diagram.resume }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
        

    <Modal
    :on-set-is-visible="() => modalIsVisible = !modalIsVisible"
    :isVisible = "modalIsVisible"/>
<!--
    <footer>
        <div class="footer">
            @2023 DiagramUniverse
            <ul>
                <li>Mentions Legales</li>
                <li>Politique de confidentialité</li>
            </ul>
        </div>
    </footer>-->
</template>

<style scoped>

.content {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    
    .row {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        max-width: 1200px;
        width: 100%;
    }

    .card-item {
        flex: 0 0 calc(33.33% - 20px);
        margin: 10px;
        min-width: 300px;
        flex-basis: calc(33.33% - 20px);
        box-sizing: border-box;
        box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.1);
        transition: box-shadow 0.2s;
    }
    .card-item:hover {
        box-shadow: 6px 6px 8px rgba(0, 0, 0, 0.2);
    }
    .custom-card {
        display: flex;
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
        max-width: 100%;
        vertical-align: middle;
        flex-shrink: 0;
        background-size: cover;
    }

    .custom-card-content {
        display: flex;
        flex: 1 1 auto;
        flex-direction: column;
        padding: 1rem;
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

