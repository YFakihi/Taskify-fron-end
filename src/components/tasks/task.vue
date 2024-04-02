<template>
    <li class="list-group-item py-3">
        <div class="d-flex justify-content-start align-items-center">
            <input class="form-check-input mt-0" 
            :class="completedTasks" 
            type="checkbox" 
            :checked="task.is_completed"
            @change="markTaskAsCompleted"/>
            <div class="ms-2 flex-grow-1" :class="completedTasks" title="Double click the text to edit or remove"
                @dblclick="startEditing">

                <div class="relative" v-if="isEdit">
                    <input class="editable-task" type="text" v-model="editingTask" @keyup.enter="updateTask"
                        @keyup.esc="cancelEditing" @blur="cancelEditing" v-focus />
                </div>

                <span v-else>{{ task.name }}</span>
            </div>
            <!-- <div class="task-date">24 Feb 12:00</div> -->
        </div>
        <TaskActions @edit="startEditing" v-show="!isEdit"
        @delete="deleteTask"
         />

    </li>
</template>

<script setup>
import { computed, ref } from "vue";
import TaskActions from "./TaskActions.vue";

const props = defineProps({
    task: Object
})

const emit = defineEmits(['updated', 'completed', 'deleted'])

const isEdit = ref(false)
const editingTask = ref('')

const completedTasks = computed(() => props.task.is_completed ? 'completed' : '');

const vFocus = {
    mounted: (el) => el.focus()
}

const startEditing = () => {
    isEdit.value = true
    editingTask.value = props.task.name
}

const cancelEditing = () => {
    isEdit.value = false
    editingTask.value = props.task.name
}

const updateTask = () => {
    const updatedTask = { ...props.task, name: editingTask.value }
    isEdit.value = false
    emit('updated', updatedTask)
}

const markTaskAsCompleted = () => {
    const updatedTask = { ...props.task, is_completed: !props.task.is_completed }
    emit('completed', updatedTask)
}

const deleteTask = () => {
    if(confirm('Are you sure you want to delete this task?')) {
        emit('deleted', props.task)
    }
}
</script>