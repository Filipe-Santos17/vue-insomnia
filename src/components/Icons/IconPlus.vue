<template>
  <PhPlus :size="20" fill="gray"/>
</template>

<script lang="ts">
import { PhPlus } from "@phosphor-icons/vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: 'IconTriangle',
  components:{
    PhPlus
  }
})
</script>

