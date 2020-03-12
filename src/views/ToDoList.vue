<template>
  <div class="main">
    <div class="to-do-list">
        <div class="box-name">
            TO DO
        </div>
        <div class="box-todo">
            <div class="todo" v-for="item in tasks" >
                <span> {{ item.title }} </span>
                <div class="buttons-todo">
                    <button class="button is-success is-small is-outlined">Outlined</button>
                    <button class="button is-danger is-small is-outlined">Outlined</button>
                </div>
            </div>
            
        </div>
    </div>
    <button class="button is-link is-outlined" v-on:click="toggleModal()">Outlined</button>
    {{this.modal}}
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
        }
    },
    computed: mapState({
        tasks: state => state.tasks,
    }),
    methods: {
        ...mapActions([
            'getTasks', 'saveTask'
        ]),
        toggleModal() {
            this.modal = !this.modal;
        },
        async createTask(title) {
            await this.saveTask(title);
            await this.getTasks();
            this.toggleModal();
        }
    },
    async mounted() {
        await this.getTasks();
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
        border: 1px solid red;

        .to-do-list {
            width: 50%;
            height: 70%;
            border: 1px solid red;
            overflow-y:scroll;

            .box-name {
                padding: 20px;
                width:20%;
                border: 1px solid green;
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