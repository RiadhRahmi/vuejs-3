<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import OptionsAPI from './components/OptionsAPI.vue'
import CompositionAPI from './components/CompositionAPI.vue'
import SuspenseComponent from './components/SuspenseComponent.vue'
import MultipleModelsParent from './components/MultipleModelsParent.vue'
import Reactivity from './components/Reactivity.vue'
import TypescriptComponenet from './components/TypescriptComponenet.vue'
import TodoApp from './components/TodoApp.vue'
import CompositionAPITwo from './components/CompositionAPITwo.vue'
import StateComponent from './components/StateComponent.vue'

</script>

<template>
    <div class="vue-3">
        <h1>Vue 3 Typescript Componenet section 1</h1>
        <TodoApp></TodoApp>
    </div>

    <div class="vue-3">
        <h1>Vue 3 Typescript Componenet section 2</h1>
        <TypescriptComponenet></TypescriptComponenet>
    </div>

    <div class="vue-3">
        <h1>Vue 3 Teleport Component</h1>
        <div id="modal-target"></div>
    </div>

    <div class="vue-3">
        <h1>Vue 3 Reactivity</h1>
        <Reactivity></Reactivity>
    </div>

    <div class="vue-3">
        <h1>Vue 3 Multiple v-models</h1>
        <MultipleModelsParent></MultipleModelsParent>
    </div>

    <div class="vue-3">
        <h1>Vue 3 Suspense</h1>
        <div class="app">
            <h3>Async/Promise with Success</h3>
            <Suspense>
                <template #default>
                    <SuspenseComponent />
                </template>
                <template #fallback>
                    <div>Loading ...</div>
                </template>
            </Suspense>
        </div>
    </div>

    <div class="vue-2">
        <h2>Options Api</h2>
        <OptionsAPI></OptionsAPI>
    </div>
    <div class="vue-3">
        <h2>Composition Api</h2>
        <CompositionAPI></CompositionAPI>
        <h2>Composition Api Two</h2>
        <CompositionAPITwo></CompositionAPITwo>

        <h2>State Component</h2>
        <StateComponent></StateComponent>
    </div>
</template>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
.vue-2 {
    background: rgba(255, 0, 0, 0.1);
    color: red;
    padding: 100px;
    margin: 100px;
}

.vue-3 {
    background: rgba(0, 255, 0, 0.1);
    color: green;
    padding: 100px;
    margin: 100px;
}
</style>
