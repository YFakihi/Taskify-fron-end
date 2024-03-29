<template>

<main style="min-height: 50vh; margin-top: 2rem;">
        <div class="container">
            <div class="row">
                <div class="col-md-8 offset-md-2">
                    <!-- Add new Task -->
                    <div class="relative">
                        <input type="text" class="form-control form-control-lg padding-right-lg"
                            placeholder="+ Add new task. Press enter to save." />
                    </div>
                    <!-- List of tasks -->
                    <div class="card mt-2">
                        <ul class="list-group list-group-flush">
                            
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </main>
 
</template>
<script setup>
import { onMounted, ref } from "vue";

import { allTasks } from "../Http/task-api";

const tasks = ref([])

// import api from "@/Http/api"

onMounted(async () => {
    const {data} = await allTasks()
    tasks.value = data.data
})
</script>