<template>
    <div class="task-actions">
            <button class="btn btn-sm btn-circle btn-outline-secondary me-1" @click="$event => emit('edit')">
                <IconPencil />
            </button>
            <button class="btn btn-sm btn-circle btn-outline-danger" @click="$event => emit('delete')">
                <IconDelete />
            </button>
        </div>
</template>

<script setup>
import IconPencil from "../icons/IconPencil.vue";
import IconDelete from "../icons/IconDelete.vue";

const emit = defineEmits(['edit', 'delete'])
</script>