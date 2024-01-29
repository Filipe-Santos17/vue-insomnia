<template>
  <div>
    <input type="text" v-model="filter" placeholder="Filter" class="input-filter">
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name:"InputFilter",
  data(){
    return{
      filter: ''
    }
  }
})
</script>

<style>
.input-filter{
  border: 1px solid #FFF;

}
</style>