<script>

export default {
    data() {
        return {
            diagramList: []
        };
    },
}
</script>

<template>

<div class="row">
    <div v-for="let diagram of diagrams">
        <div @click="goToModal(diagram)"> <!--add class card horizontal + borderCard-->
            <div class="card-image">
                <img [src]="diagram.img">
            </div>

            <div class="card-stacked">
                <div class="card-content">

                    <p>{{ diagram.name }}</p>
                    <p><small> {{ diagram.resume }}</small></p>
                </div>
            </div>
        </div>
    </div>
</div>
</template>



