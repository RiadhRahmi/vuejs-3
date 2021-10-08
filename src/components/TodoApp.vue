<template>

    <div class="todo-list">
        <div style="width: 50%;display: inline-block;">
            <router-link to="/">
            <i class="fa fa-home" aria-hidden="true"></i>
            <span>Home</span>
            </router-link>
            <br>
            <router-link to="/add_task">
                <i class="fa fa-plus" aria-hidden="true" />
                <span>Add Tasks</span>
            </router-link>
        </div>
         <div style="width: 50%;display: inline-block;">
            <router-view />
        </div>
    </div>

    
          
</template>

<script>


export default {
  
  setup() {
    
  }
}
</script>
