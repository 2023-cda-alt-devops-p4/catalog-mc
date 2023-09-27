<script lang="ts" setup>

    const props = defineProps<{
        title?: string,
        isVisible: boolean
    }>();
    

    const goToDiagramList = () => {
    $router.push('/Diagrams');
    };
    
    defineEmits(['setIsVisible']);


</script>

<template>
    <div v-if="isVisible" class="modal-global-container">
        <div class="modal-container">
            
            <div class="diagram-card">
                <h2 class="header center"> {{ "diagram.title" }}</h2> <!--Titre du diagram selectionné-->
                <div class="card-img">
                <img src="#" alt="image du diagram">
            </div>
            <div class="card-stacked">
                <div class="card-content">
                    <table class="bordered striped">
                        <tbody>
                            <tr>
                                <td>Type de Digramme : </td>
                                <td> {{ "merise/uml" }}</td>
                                
                            </tr>
                            <tr>
                                <td>Definition : </td>
                                <td> {{ "diagram.definition" }}</td>
                                    
                            </tr>
                        </tbody>
                    </table>
                    
                </div>
                <div class="card-action">
                    <a @click="goToDiagramList">Retour</a>
                </div>
            </div>
            
            </div>
            
        </div>

        <div class="modal-global-overlay" @click="$emit('setIsVisible', !props.isVisible)" />
    </div>
</template>

<style lang="scss" scoped>
    .modal-global-container {
        position: fixed;
        top: 0;
        left: 0;
        height: 100%;
        min-height: 100vh;
        width: 100%;
        z-index: 500;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .modal-global-overlay {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background-color: transparent;
        z-index: 501;

    }
    .modal-container {
        width: 40%;
        height: auto;
        min-height: 400px;
        background-color: #FFF;
        border-radius: 10px;
        position: relative;
        z-index: 502;
    }

        .diagram-card {
    background-color: #f5f5f5;
    border: 1px solid #e0e0e0;
    border-radius: 5px;
    padding: 10px;
    margin-top: 20px;
    }

    .diagram-card .header {
    font-size: 24px;
    }

    .diagram-card .card-img {
    text-align: center;
    }
        
    .diagram-card .card-img img {
    max-width: 100%;
    height: auto;
    }

    .diagram-card .diagram-content {
        padding: 10px 0;
    }

    .diagram-card table {
    width: 100%;
    }

    .diagram-card table td {
    padding: 5px;
    }

</style>