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

    <!-- <div class="box-name">
             <div class="name">
                TO DO
                <button class="button is-link is-small is-outlined" v-on:click="toggleModal()">Create Task</button>
            </div>
            <div class="name">
                DONE
            </div>
        </div> -->
        <div class="box-todo">
            <div class="todo" v-for="item in tasks">
                <span> {{ item.title }} </span>
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
            await this.getTasksToDo();
        },
        async updateToDoneTaks(id) {
            await this.updateToDone(id);
            await this.getTasksToDo();
        }
    },
    watch: {
        typeTask: function() {
            if (this.typeTask === "todo") {
                this.tasks = this.tasksToDo;
            } else {
                this.tasks = this.tasksDone;
            }
            // console.log(this.typeTask);
        },
    },
    async mounted() {
        await this.getTasksToDo();
        await this.getTasksDone();
        this.tasks = this.tasksToDo;
    },
    // created() {
    //     this.task = this.tasksToDo;
    // }
};
</script>

<style lang="scss">
    .main {
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border: 1px solid red;

        .to-do-list {
            width: 50%;
            height: 70%;
            border: 1px solid red;
            overflow-y:scroll;

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
                    border: 1px solid green;
                }
            }
            
            .box-todo {
                width: 100%;
                // padding: 100px;
                border: 1px solid blue;

                .todo {
                    display: flex;
                    justify-content: space-between;
                    border: 1px yellow solid;
                    margin: 10px;
                    
                    .buttons-todo {
                        display: flex;
                        flex-direction: column;
                    }
                }
            }

            
        }
    }

</style>