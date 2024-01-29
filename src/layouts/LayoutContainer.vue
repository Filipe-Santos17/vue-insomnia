<template>
  <div class="flex w-full h-screen bg-neutral-100">
    <AsideOrganization />
    <ListRequests/>
    <RequestsConfig/>
    <RequestsInfo/>
  </div>
</template>

<script setup lang="ts">
import AsideOrganization from "@/screens/AsideOrganizations.vue";
import ListRequests from "@/screens/ListRequests.vue";
import RequestsConfig from "@/screens/RequestsConfig.vue";
import RequestsInfo from "@/screens/RequestsInfo.vue";
</script>