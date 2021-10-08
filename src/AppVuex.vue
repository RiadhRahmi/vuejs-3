<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h1>To-Do List</h1>
                <div>
                    <div class="alert alert-warning alert-dismissible fade show" role="alert">
                        <strong>Holy guacamole!</strong> You should check in on some of those fields below.
                        <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="alert"
                            aria-label="Close"
                        ></button>
                    </div>
                </div>
                <div>
                    <VuexTodoNew />
                    <VuexTodoList />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import VuexTodoNew from "./components/VuexTodoNew.vue";
import VuexTodoList from "./components/VuexTodoList.vue";

export default {
    components: {
        VuexTodoNew,
        VuexTodoList
    }
};
</script>

<style scoped>
.todolist {
    margin-left: auto;
    width: 100%;
    height: 100%;
    display: inline-block;
    margin-left: auto;
    margin-left: 33%;
}
</style>