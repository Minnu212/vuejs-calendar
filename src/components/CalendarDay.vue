<template>
    <div :class="classObject">
        {{day.format('D')}}
    </div>
</template>

<script>
export default {
  props: ["day"],
  computed: {
    classObject() {
      return {
        day: true,
        today: this.day.isSame(this.$moment(), "day")
      };
    }
  },
  created(){
      console.log('cc')
      console.log(this.$moment())
  }
};
</script>

<style>
</style>
