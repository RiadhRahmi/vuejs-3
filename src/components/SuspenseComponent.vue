<template>
<p>Articles List</p>
<div v-for="item in articleList" :key="item.id">
    <ul>
        <li>{{ item.title }}</li>
    </ul>
</div>
</template>


<script>
import axios from 'axios'
import {ref} from 'vue'
export default {
  async setup() {
      const articleList = ref(null);
        articleList.value = await axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            console.log(response.data)
            return response.data
        })

    return {
      articleList
    }
  }
}
</script>