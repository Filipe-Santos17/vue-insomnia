<template>
  <span class="badge">{{ textContent }}</span>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BadgeDefault",
  props: {
    textContent: {
      type: String,
      required: true,
      default: "",
    },
  },
});
</script>

<style lang="scss">
.badge {
  background-color: rgb(var(--primary));
  color: #fff;
  padding: 2px 6px;
  border-radius: 2px;
  font-size: 0.75rem;
  line-height: 0.875rem;
  min-height: 0.5rem;
  font-weight: normal;
  vertical-align: baseline;
}
</style>