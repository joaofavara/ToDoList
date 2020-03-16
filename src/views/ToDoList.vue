<template>
  <div class="main">
    <div class="to-do-list">
        <div class="header">
            <button class="button is-link is-small is-outlined" :disabled="this.typeTask === 'done'" v-on:click="toggleModal()">Create Task</button>
            <div class="control">
                <label class="radio">
                    <input type="radio" name="foobar" value="todo" v-model="typeTask">
                    To Do
                </label>
                <label class="radio">
                    <input type="radio" name="foobar" value="done" v-model="typeTask">
                    Done
                </label>
            </div>
        </div>
        <div class="box-todo">
            <div class="todo" v-for="item in tasks" :key="item._id">
                <span> {{ item.title }} - {{item._id}} </span>
                <div class="buttons-todo">
                    <button class="button is-success is-small is-outlined" v-on:click="updateToDoneTaks(item._id)">Done</button>
                    <button class="button is-danger is-small is-outlined" v-on:click="softDeleteTask(item._id)">Remove</button>
                </div>
            </div>
        </div>
    </div>
    <Modal :openModal=this.modal @closeModal="toggleModal" @createTask="createTask"/>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import Modal from '../components/Modal.vue';

export default {
    name: 'ToDoList',
    components: { 
        Modal
    },
    data() {
        return {
            modal: false,
            typeTask: 'todo',
            tasks: null,
        }
    },
    computed: mapState({
        tasksToDo: state => state.tasksToDo,
        tasksDone: state => state.tasksDone,
    }),
    methods: {
        ...mapActions([
            'getTasksToDo', 'saveTask', 'getTasksDone', 'softDelete','updateToDone'
        ]),
        toggleModal() {
            this.modal = !this.modal;
        },
        async createTask(title) {
            await this.saveTask(title);
            await this.getTasksToDo();
            this.toggleModal();
        },
        async softDeleteTask(id) {
            await this.softDelete(id);
            if (this.typeTask === "todo") {
                await this.getTasksToDo();
            } else {
                await this.getTasksDone();
            }
        },
        async updateToDoneTaks(id) {
            await this.updateToDone(id);
            if (this.typeTask === "todo") {
                await this.getTasksToDo();
            } else {
                await this.getTasksDone();
            }
        }
    },
    watch: {
        typeTask: async function() {
            if (this.typeTask === "todo") {
                await this.getTasksToDo();
                this.tasks = this.tasksToDo;
            } else {
                await this.getTasksDone();
                this.tasks = this.tasksDone;
            }
        },
        tasksToDo: function() {
            this.tasks = this.tasksToDo;
        },
        tasksDone: function() {
            this.tasks = this.tasksDone;
        },
    },
    async mounted() {
        await this.getTasksToDo();
        await this.getTasksDone();
        this.tasks = this.tasksToDo;
    },
};
</script>

<style lang="scss">
    .main {
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .to-do-list {
            width: 50%;
            height: 70%;
            border: 1px solid grey;

            .header {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                margin: 10px;
            }

            .box-name {
                display: flex;
                flex-direction: row;

                .name {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    padding: 10px;
                    width: 30%;
                }
            }
            
            .box-todo {
                width: 100%;
                height: 90%;
                overflow-y:scroll;
                border-top: 1px solid black;

                .todo {
                    display: flex;
                    justify-content: space-between;
                    border: 1px solid grey;
                    margin: 10px;
                    
                    .buttons-todo {
                        display: flex;
                        flex-direction: column;
                        margin: 5px;
                    }
                }
            }

            
        }
    }

</style>