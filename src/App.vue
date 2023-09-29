<script lang="ts" setup>

import Modal from "./component/modal/Modal.vue";
import { ref } from "vue";
import Navbar from "./component/Navbar.vue";
import Diagrams from "./views/Diagrams.vue";


const isVisible = ref<boolean>(true);

const diagram = Diagrams;
</script>

<template>
    <div>

        <Navbar
        :navLinks="[
            {
            name: 'Home',
            link: '/home',
            dropdown: false,
            },

            { name: 'About', link: '/about', dropdown: false },

            {
            name: 'Diagrams',
            link: '/Diagrams',
            dropdown: true,
            dropdownLinks: [ 
                { name: 'A', link: '/pA', dropdown: false },
                { name: 'B', link: '/pB', dropdown: false },
            ],
            },
            {
            name: 'About',
            link: '/About',
            dropdown: true,
            dropdownLinks: [ 
                { name: 'C', link: '/pA', dropdown: false },
                { name: 'D', link: '/pB', dropdown: false },
            ],
            },
        ]"
        />

        <Diagrams />
        <Modal
        :isVisible= "isVisible"
        v-on:setIsVisible="(value:boolean) => isVisible = value"
        />
    </div>
</template>


<style scooped>
</style>