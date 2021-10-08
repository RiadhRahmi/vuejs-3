<template>
  <div class="counter">
    <p>count: {{ count }}</p>
    <p>NewVal (count * 2): {{ countDouble }}</p>
    <button @click="inc">Increment</button>
    <button @click="dec">Decrement</button>
    <p> Message: {{ msg }} </p>
    <button @click="changeMessage()">Change Message</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      count: 0,
      msg: 'some message'
    }
  },
  computed: {
    countDouble() {
      return this.count*2
    }
  },
  watch: {
    count(newVal) {
      console.log('count changed', newVal)
    },
    msg(newVal) {
      console.log('msg changed', newVal)
    }
  },
  methods: {
     inc() {
      this.count += 1
    },
    dec() {
      if (this.count !== 0) {
        this.count -= 1
      }
    },
    changeMessage() {
      this.msg = "Count now is : "+this.count
    }
  }
 
}
</script>