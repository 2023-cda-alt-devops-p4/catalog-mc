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
    background: #ffffff;
	height: 100px;
	width: 100%;
    min-height: 8vh;
    font-family: 'Montserrat', sans-serif;
}

nav {
    background-color: #ffffff;
    border : 3.5px solid #070707;
    padding: 0.2em 50px;
}
ul.nav-links {
    display: flex;
    justify-content: space-around;
    width: 90%;
    line-height: 80px;
    
}

ul.nav-links {
    color: #070707;
    font-size: 1.2rem;
    font-weight: 500;
}

li{
    margin: 0 20px;
    font-family: oswald, sans-serif;
}

li :hover{
    padding: 1rem;
    background-color: #070707;
    color: #ffffff;
}

</style>