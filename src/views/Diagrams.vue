<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import IDiagram from '../interface/IDiagram'
import Modal from '../component/modal/Modal.vue'
import meriseData from '../data/merise.json'
import umlData from '../data/uml.json'


    const diagramList = ref<IDiagram[]>([])

    const modalIsVisible = ref<boolean>(false)

    const goToModal = (diagram: IDiagram) => {

        modalIsVisible.value = !modalIsVisible.value
    }

    onMounted(() => {
        diagramList.value = [...meriseData, ...umlData];
        console.log(meriseData);
    });

    /*Les images ne s'affichent pas*/
</script>

<template>

    <div class="content">
        <div class="row">
            <div class="card-item" v-for="diagram in diagramList" :key="diagram.id">
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
    </div>
        

    <Modal
    :on-set-is-visible="() => modalIsVisible = !modalIsVisible"
    :isVisible = "modalIsVisible"/>
</template>

<style scoped>
/* le grid ne fonctionne pas comme j'aimerai, aussi il faut ajouter un contener global car la c'est vraiment tres moche
c'est pas responsive 
BONUS: Ajouter une bar de recherche si il y a le temps 
*/
    .content {
        
    }

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

    .card-item {
        display: flex;
        padding: 1rem;
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

