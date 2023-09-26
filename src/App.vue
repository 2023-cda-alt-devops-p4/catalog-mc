<script setup lang="ts">

import Modal from "./component/modal/Modal.vue";
import { ref } from "vue";

const isVisible = ref<boolean>(false);
</script>

<template>
    <div>
        <Modal
        :isVisible= "isVisible"
        v-on:setIsVisible="(value:boolean) => isVisible = value"
        />
    </div>
</template>


<style scooped>
</style>