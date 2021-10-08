<template>


  <button type="button" @click="inc">count is: {{ count }}</button>
  
  <h2>Book Informations</h2>
  <p>{{ book.title }}</p>
  <p>{{ book.author }}</p>
  <p>{{ book.year }}</p>


</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { Book } from '../models/Book'
export default defineComponent({
    components:{
    },
  setup() {

    let count = ref(0)
    let book = ref({
        title: 'Vue 3 Guide',
        author: 'Vue Team',
        year: 2020
      } as Book)


    
    const inc = ():void => {
      count.value += 1
    }
    

return {
      count,
      inc,
      book
    }
  }
})
</script>