<template>
    <div>
       <router-link :to="{name:'hi',params:{username:'tom',password:11} }">hello组件</router-link>
       <p>{{$route.params.id}}</p>
       <router-view></router-view>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>

</style>