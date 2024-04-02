<template>
    <main style="min-height: 50vh; margin-top: 2rem;">
        <div class="container">
            <div class="row">
                <div class="col-md-8 offset-md-2">
                    <!-- Add new Task -->
                    <NewTask @added="handleAddedTask" />
                    <!-- List of uncompleted tasks -->
                    <Tasks :tasks="uncompletedTasks" @updated="handleUpdatedTask" @completed="handleCompletedTask" @deleted="handleDeleteTask" />
                </div>
            </div>
        </div>
    </main>
</template>

<script setup>
import { onMounted, computed, ref } from "vue";
import { useTaskStore } from "../stores/task";
import { allTasks, createTask, updateTask as apiUpdateTask, completeTask, deleteTask } from "../http/task-api";
import Tasks from "../components/Tasks/Tasks.vue";
import NewTask from "../components/Tasks/NewTask.vue";



const tasks = ref([])
onMounted(async () => {
    const { data } = await allTasks()
    tasks.value = data.data

});

const uncompletedTasks = computed(() => tasks.value.filter(task => !task.is_completed))


const handleAddedTask = async (newTask) => {
    const { data: createdTask } = await createTask(newTask)
    tasks.value.unshift(createdTask.data)
}

const handleUpdatedTask = async (task) => {
    const { data: updatedTask } = await apiUpdateTask(task.id, {
        name: task.name
    })
    const currentTask = tasks.value.find(t => t.id === task.id)
    currentTask.name = updatedTask.data.name
}

const handleDeleteTask = async (task) => {
    const { data } = await deleteTask(task.id)
    const index = tasks.value.findIndex(t => t.id === task.id)
    tasks.value.splice(index, 1)
}
</script>