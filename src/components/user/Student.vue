<template>
    <div>
        student
    </div>
</template>

<script>
export default {

    //组件内守卫
    //钩子函数（守卫）写在组件中， beforeRouteEnter进入路由前，beforeRouteLeave离开组件前
     beforeRouteEnter(to, from, next) {
      console.log("去", to.fullPath)
      console.log("来自", from.fullPath)
      next(true)
    },
    beforeRouteLeave(to, from, next) {
      console.log("去", to.fullPath)
      console.log("来自", from.fullPath)
      next(true)
    }
}
</script>

<style scoped>

</style>