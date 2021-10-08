<template>
      <div>
        <label>Name: </label>
        <input :value="name" @input="updateName($event.target.value)" />
        <label>Email: </label>
        <input :value="email" @input="updateEmail($event.target.value)" />
      </div>
</template>
 
 
 <script>
    export default {
      props: {
        name: String,
        email: String
      },
      setup(props, { emit }) {

        const updateName = value => {
          emit('update:name', value)
        }

        const updateEmail = value => {
          emit('update:email', value)
        }

        return { updateName, updateEmail }

      }
    }
</script>