<script lang="ts" setup>

</script>

<template>
    <div class="content">
        <div id="logo">
            <img src="../assets/media/LogoDiagram.png" alt="Logo">
        </div>
        <nav>

            <ul class="nav-links">
                <li><a  href="#"> Home </a></li>
                <li><a href="#"> Diagrammes </a></li>
                <li><a href="#"> About </a></li><!-- quand on met : c'est pour mettre du code entre ""-->
            </ul>

            <div id="burger">
                <div class="line1"></div>
                <div class="line2"></div>
                <div class="line3"></div>
            </div>
        </nav>
    </div>
    
</template>

<style scoped>

.content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    min-height: 8vh;
    font-family: 'Montserrat', sans-serif;
}

nav {
    background-color: #f0cdcd;
    padding: 0 50px;
}
ul.nav-links {
  display: flex;
  justify-content: space-around;
  width: 50%;
  line-height: 75px;
}

ul.nav-links a {
  color: #fefefe;
  font-size: 1.2rem;
  font-weight: 500;
}
</style>