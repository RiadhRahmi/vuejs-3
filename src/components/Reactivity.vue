<template>
  <button class="btn btn-primary" @click="myFun">Click Me</button>
  <div class="hello">test {{list }} {{ myObj }}</div>
  <TeleportComponent> </TeleportComponent>
</template>

<script>

import TeleportComponent from './TeleportComponent.vue'
import {ref} from 'vue'

export default {
    components:{
TeleportComponent
    },
  setup() {
    let list = ref([1, 2])
    let a = ref(0)
    let myObj = ref({ name: 'Preetish' })
    function myFun() {
      list.value[2] = 3
      myObj.value.last = 'HS'
      delete myObj.value.name
    }
    return { myFun, list, myObj }
  }
}
</script>

<style>
.btn{
    background: blue;
    color: white;
    padding: 15px;
    margin: 15px;
}
</style>