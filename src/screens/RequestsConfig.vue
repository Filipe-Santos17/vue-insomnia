<template>
  <section>
    <div>
      <select>
        <option value="">Get</option>
      </select>
      <input type="text" placeholder="https://api.myproduct.com/v1/users"/>
      <section>
        <button>Send</button>
        <button><PhTriangle /></button>
      </section>
    </div>
    <section></section>
  </section>
</template>

<script lang="ts" setup>
import { PhTriangle } from "@phosphor-icons/vue";
</script>
