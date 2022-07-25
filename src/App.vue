<template>
  <router-view />
</template>

<script>
import { defineComponent } from "vue";
import { useSessionStore } from "stores/session";
import axios from "axios";

export default defineComponent({
  name: "App",

  beforeCreate() {
    const session = useSessionStore();
    // Test authentication then store token into header
    session.initializeStore();
    // axios.defaults.headers["cookie"] = session.token;
  },
});
</script>
