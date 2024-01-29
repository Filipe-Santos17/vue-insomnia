<template>
  <div class="relative" v-click-away="onClickAway">
    <button @click="isRendered = !isRendered" class="bnt-dropdown-visible">
      <slot name="button"></slot>
      <IconTriangle />
    </button>
    <transition name="dropdown-content">
      <ul v-if="isRendered" class="dropdown-content">
        <li 
          v-for="opt in listItens" 
          class="dropdown-item"  
          :key="opt.value" 
          :style="{color: opt.color ?? ''}"
        >
          <p>{{ opt.name }}</p>
        </li>
      </ul>
    </transition>
  </div>
</template>

<script lang="ts">
interface ItemListDropdown {
  value: string,
  name: string,
  color: string,
}

import IconTriangle from "@/components/Icons/IconTriangle.vue";
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "DropDown",
  data() {
    return {
      isRendered: false,
    };
  },
  props: {
    listItens: {
      type: Array as PropType<ItemListDropdown[]>,
      required: true,
      //validator(val){},
    }
  },
  methods:{
    onClickAway() {
      this.isRendered = !this.isRendered
    },
  },
  components: {
    IconTriangle,
  },
});
</script>

<style lang="scss">
.bnt-dropdown-visible{
  display: flex;
  align-items: center;
  gap: .5rem;
  height: 100%;
}

.dropdown-content {
  padding: 0.25rem 0;
  background-color: rgb(var(--neutral-100));
  border: .5px solid rgb(var(--white));
  outline: none;
  border-radius: 0.25rem;
  transform-origin: top right;
  margin-top: 0.125rem;
  position: absolute;
  width: 14.375rem;

  .dropdown-item{
    padding: .25rem .5rem;
    width: 100%;
    text-transform: uppercase;
    cursor: pointer;
    
    &:hover{
      background-color: rgb(var(--neutral-80));
    }
  }

  &-enter-active, &-leave-active{
    transition: all 0.2s;
  }

  &-enter, &-leave-to{
    opacity: 0;
    transform: translateY(-5px);
  }
}
</style>
