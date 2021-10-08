<template>
    <p>count: {{ count }}</p>
    <p>NewVal (count * 2): {{ countDouble }}</p>
    <button @click="inc">Increment</button>
    <button @click="dec">Decrement</button>
    <p> Message: {{ msg }} </p>
    <button @click="changeMessage()">Change Message</button>
</template>
<script>
import { ref, computed, watch, onMounted  } from 'vue'
export default {
  setup() {

     // initialize data
    let count = ref(0)
    let msg= ref('some text')
   

    // computed value
    const countDouble = computed(() => count.value * 2)

    // watchs
    watch(count, newVal => {
      console.log('count changed', newVal)
    })

    watch(msg, newVal => {
      console.log('msg changed', newVal)
    })
    
    // inc method
    const inc = () => {
      count.value += 1
    }
    
    // dec method
    const dec = () => {
      if (count.value !== 0) {
        count.value -= 1
      }
    }
    // change message method
    const changeMessage = () => {
      msg.value = "Count now is : " + count.value
    }

    onMounted(()=>{
        console.log('hello from on mounted')
    })

// return data and methods and ....
return {
      count,
      inc,
      dec,
      countDouble,
      msg,
      changeMessage
    }
  }
}
</script>