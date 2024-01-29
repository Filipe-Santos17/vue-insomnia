<template>
  <PhTriangle color="#DBDBDB" weight="fill" class="rotate-180" :size="10" />
</template>

<script>
import { defineComponent } from "vue";
import { PhTriangle } from "@phosphor-icons/vue";

export default defineComponent({
  name: "ItemRequest",
  components: {
    PhTriangle,
  },
});
</script>
