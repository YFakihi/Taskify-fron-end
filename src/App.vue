<script setup>
import Navbar from './components/Navbar.vue';
import TasksPage from './pages/TasksPage.vue';
import Footer from './components/Footer.vue';
import  LoginTask from './components/auth/LoginTask.vue';
 
</script>

<template>
  <Navbar />
  <LoginTask/>
  <TasksPage />
  <Footer />
</template>

<style scoped>

</style>
