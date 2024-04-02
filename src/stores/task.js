import { completeTask } from '@/http/task-api';
import { defineStore } from 'pinia';

export const useTaskStore = defineStore('taskStore', {
    state: () => ({
        tasks: [
            {
                id: 0,
                name: "first task",
                is_complete: true,
            },
            {
                id: 1,
                name: "second task",
                is_complete: false,
            },
            {
                id: 2,
                name: "third task",
                is_complete: false,
            },
        ],

        task: {
            id: 0,
            name: "first task",
            is_complete: false,
        },
    }),
    getters: {
        completed: (state) => state.tasks.filter((task) => task.is_complete),
        uncompleted () {
            return this.tasks.filter((task) => !task.is_complete);
        },
        uncompletedCount () {
            return this.uncompleted.length;
        }

    }
});