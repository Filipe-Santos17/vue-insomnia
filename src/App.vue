<template>
  <router-view v-slot="{ Component }">
    <component :is="Component" />
  </router-view>
</template>

<script setup>
import "@/style/sass/index.scss";
import "@/style/tailwind.css";
import usePreferenceTheme from "@/composables/usePreferenceTheme.ts"

usePreferenceTheme() //currentTheme
</script>