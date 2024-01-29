<template>
  <li class="item-request">
    <BadgeDefault text-content="GET" />
    <p class="text-white">Teste</p>
    <div class="item-request-icon-arrow">
      <IconTriangle />
    </div>
  </li>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BadgeDefault from "@/components/Badge/BadgeDefault.vue";
import IconTriangle from "@/components/Icons/IconTriangle.vue";

export default defineComponent({
  name: "ItemRequest",
  components: {
    BadgeDefault,
    IconTriangle,
  },
});
</script>

<style lang="scss">
.item-request {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  width: 100%;
  padding: 0.5rem 1rem 0.5rem 0.875rem;
  cursor: pointer;
  border-left: 2px solid transparent;

  &:hover {
    background-color: rgb(var(--neutral-80));
    border-left-color: rgb(var(--primary));
  }

  p:hover {
    background-color: rgb(var(--neutral-80));
  }

  &-icon-arrow {
    margin: 0 0.5rem 0 auto;
  }
}
</style>
