<template>
      <MultipleModels v-model:name="inputName" v-model:email="inputEmail" ></MultipleModels>
        <p>Name: {{ inputName }}</p>
        <p>Email: {{ inputEmail }}</p>
</template>
 
 
 <script>
 import {ref} from 'vue'
 import MultipleModels from './MultipleModels.vue'
    export default {
        components:{
            MultipleModels
        },
      setup() {
         const inputName = ref('')
         const inputEmail = ref('')

        return { inputName, inputEmail }

      }
    }
</script>