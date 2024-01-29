<template>
  <section class="w-[500px] border-r h-full">
    <header class="flex w-full bg-neutral-90 pl-14 p-8 gap-10 h-48">
      <DropDownDefault :list-itens="options">
        <template #button>
          GET
        </template>
      </DropDownDefault>
      <input type="text" placeholder="https://api.myproduct.com/v1/users" class="bg-transparent border-none text-neutral-50 placeholder:text-[#515150] w-full outline-none pr-8"/>
      <section class="flex bg-primary text-white rounded">
        <button class="h-full border-r p-8">Send</button>
        <button class="h-full"><IconTriangle /></button>
      </section>
    </header>
    <section></section>
  </section>
</template>

<script lang="ts" setup>
import IconTriangle from "@/components/Icons/IconTriangle.vue";
import DropDownDefault from "@/components/Dropdown/DropDownDefault.vue";
import { ref } from "vue";

const options = ref([
  {
    value: "GET",
    name: "Get",
    color: "#F00"
  },
  {
    value: "POST",
    name: "POST",
    color: "#0F0"
  },
  {
    value: "PATCH",
    name: "PATCH",
    color: "#000"
  }
])
</script>
