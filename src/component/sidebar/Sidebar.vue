<script>
import SidebarLink from './SidebarLink'
import { collapsed, toggleSidebar, sidebarWidth } from './state'

export default {
  props: {},
  components: { SidebarLink },
  setup() {
    return { collapsed, toggleSidebar, sidebarWidth }
  }
}
</script>

<template>
    <nav>
            <ul>
                <li :class="{ active: currentRoute === '/' }"><router-link to="/">Accueil</router-link></li>
                <li :class="{ active: currentRoute === '/' }"><router-link to="/">Diagrammes</router-link></li>
                <li :class="{ active: currentRoute === '/' }"><router-link to="/">A Propos</router-link></li>
            </ul>
        </nav>
</template>

<style scoped>

</style>