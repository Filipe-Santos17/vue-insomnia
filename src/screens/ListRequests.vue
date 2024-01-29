<template>
  <section class="border-x border-x-black">
    <hgroup>
      <InputFilter/>
      <button>order</button>
      <button>plus</button>
    </hgroup>
    <div>
      <transition-group tag="ul">
        <ItemRequest key="filho"/>
      </transition-group>
    </div>
  </section>
</template>

<script lang="ts" setup>
import InputFilter from "@/components/Input/InputFilter.vue"
import ItemRequest from "@/components/List/ItemRequest.vue";
</script>