<template>
  <hgroup class="w-56 flex flex-col items-center h-full">
    <span class="mt-24 cursor-pointer">
      <PhPlus :size="20" fill="gray"/>
    </span>
  </hgroup>
</template>

<script lang="ts">
import { PhPlus } from "@phosphor-icons/vue";

export default {
  name: "AsideOrganization",
  components: {
    PhPlus,
  },
};
</script>